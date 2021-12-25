pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
//import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.1/contracts/token/ERC20/IERC20.sol';
import './Compound.sol';
import "hardhat/console.sol";

    //'0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b', //comptroller
    //'0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5'  //ceth

//DefiWallie is a Wallet helper contract based on Compound - that helps a user deposit, save, pay, swap funds
//Phase 2 will also build out common useful featues such as Order Routing, TWAP best price execution and flash loan arb

//contract -- DefiWallie Wallet factory - creates and deploys a new DefiWallie contract which holds assets
contract DefiWallieFactory {

    mapping(address => address[]) public allWallets;
    //Compound specifics
    address public comptroller;
    address public cEth;
    address public owner;

    constructor(address _comptroller, address _cEthAddress) {
        comptroller = _comptroller;
        cEth = _cEthAddress;
        owner = msg.sender;
        console.log("created new factory ", owner);
    }
    //Create a DefiWallie wallet
    function createWallie(string memory walletName) public  returns (address) {
        DefiWallie newWallie = new DefiWallie(walletName, msg.sender, comptroller, cEth );
        allWallets[msg.sender].push(address(newWallie));
        console.log("created new Wallie ", address(newWallie));

        return address(newWallie);
    }

    //Gets a list of DefiWallie's that exist
    function getWallies(address ownerAddress) public view returns (address[] memory){
        return allWallets[ownerAddress];
    }
    function getOwnerWallies() public view returns(address[] memory){
      return allWallets[owner];
    }
    function getOwnerWallieAddress() public view returns(address){
      return allWallets[owner][0];
    }
}

//contract -- DefiWallie is a Wallet helper contract based on Compound - that helps a user deposit, save, pay, swap funds
contract DefiWallie is Compound {
  address public admin;
  string public walletName;

  //DefiWallie holds a list of assets
  struct Asset {
        string description;
        uint value;
        address tokAddress;
    }

    //List of Assets held by DefiWallie contract
    uint numAssets;
    mapping (uint => Asset) assets;

  //Restricted to admin only modifier
  modifier restricted(){
    require(msg.sender == admin,'only admin');
    _;
  }

  //Construct a DefiWallie address - backed by Compound
  constructor(
    string memory _walletName,
    address _creator,
    address _comptroller,
    address _cEthAddress
    ) Compound(_comptroller, _cEthAddress)
    {
      walletName = _walletName;
      admin = _creator;
      numAssets = 0;
      console.log("created wallet name ", _walletName, address(this));
    }

    //wallet name
    function wallieName()  public view returns (string memory){
      return walletName;
    }

  //Deposit funds
  function deposit(
    address tokAddress,
    uint amount
    ) external payable
    {
      console.log("deposit called - ", tokAddress, amount, msg.sender);
      address underlyingAddress = getUnderlyingAddress(tokAddress);
      console.log("deposit underlying - ", underlyingAddress);
      IERC20(underlyingAddress).transferFrom(msg.sender, address(this), amount);
      console.log("transfer from ", msg.sender, address(this), amount);
      supply(tokAddress, amount);
      console.log("supplied ", tokAddress, amount);

    }

  //Recieve funds
  function depositEth(uint amount) external payable
  {
    supplyEth(amount);
  }

  //Withdraw funds
  function withdraw(
    address tokAddress,
    uint amount,
    address recipient
    )
    restricted() external
  {
      require(getUnderlyingBalance(tokAddress) > amount, "bal too low");
        claimComp();
        redeem(tokAddress, amount);

        address underlyingAddress = getUnderlyingAddress(tokAddress);
        IERC20(underlyingAddress).transfer(recipient, amount);

        address compAddress = getCompAddress();
        IERC20 compToken = IERC20(compAddress);
        uint compAmount = compToken.balanceOf(address(this));
        compToken.transfer(recipient, compAmount);
  }

   //Withdraw Eth
   function withdrawEth(
      uint amount,
      address payable recipient
      )
      restricted() external
    {
        require(getUnderlyingEthBalance() > amount, "eth bal too low");
        claimComp();
        redeemEth(amount);
        address compTokenAddress = getCompAddress();
        IERC20 compToken = IERC20(compTokenAddress);
        uint compAmount = compToken.balanceOf(address(this));
        compToken.transfer(recipient, compAmount);
    }


    //Get Balance
    function getBalance(address tokAddress) public returns (uint) {
      return getUnderlyingBalance(tokAddress);
    }

    //Pay Bill
    function payBill(address toAddress) external payable {
    }

    //Swap a token
    function swap(address fromTokenAddress,address toTokenAddress,uint amount) external payable {
    }

    //Execute a TWAP executed token swap
    function twapSwap(address fromTokenAddress,address toTokenAddress,uint amount) external payable {
    }
}
