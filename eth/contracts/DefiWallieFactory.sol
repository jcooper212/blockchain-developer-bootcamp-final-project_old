pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
//import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.1/contracts/token/ERC20/IERC20.sol';
import './Compound.sol';

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

    constructor(address _comptroller, address _cEthAddress) {
        comptroller = _comptroller;
        cEth = _cEthAddress;
    }
    //Create a DefiWallie wallet
    function createWallie(string memory walletName) public returns (address) {
        DefiWallie newWallie = new DefiWallie(walletName, msg.sender, comptroller, cEth );
        allWallets[msg.sender].push(address(newWallie));
        return address(newWallie);
    }

    //Gets a list of DefiWallie's that exist
    function getWallies(address ownerAddress) public view returns (address[] memory){
        return allWallets[ownerAddress];
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
    }

  //Deposit funds
  function deposit(
    address tokAddress,
    uint amount
    ) external
    {
    }

  //Recieve funds
  function receive() external payable
  {
  }

  //Withdraw funds
  function withdraw(
    address tokAddress,
    uint amount,
    address recipient
    )
    restricted() external
  {
  }

   //Withdraw Eth
   function withdrawEth(
      uint amount,
      address payable recipient
      )
      restricted() external
    {
    }

    //Get Balance
    function getBalance(address tokAddress) public view returns (uint) {

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
