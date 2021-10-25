pragma solidity ^0.8.0;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './Compound.sol';

//DefiWallie is a Wallet helper contract based on Compound - that helps a user deposit, save, pay, swap funds
//Phase 2 will also build out common useful featues such as Order Routing, TWAP best price execution and flash loan arb

//contract -- DefiWallie Wallet factory - creates and deploys a new DefiWallie contract which holds assets
contract DefiWallieFactory {
    address[] public deployedWallie;

    //Create a DefiWallie wallet
    function createWallie() public {
    }
    
    //Gets a list of DefiWallie's that exist
    function getWallies() public view returns (address[] memory){
    }
}

//contract -- DefiWallie is a Wallet helper contract based on Compound - that helps a user deposit, save, pay, swap funds
contract DefiWallie is Compound {
  address public admin;
  
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
    address _comptroller,
    address _cEthAddress
    ) Compound(_comptroller, _cEthAddress)
    {
      admin = msg.sender;
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

