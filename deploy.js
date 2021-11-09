const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//const {interface, bytecode } = require('./compile');
const compiledFactory = require('./eth/build/contracts/DefiWallieFactory.json');

const mnemonic = process.env.ETH_WALLET_MNEMONIC;
const infura_endpoint = process.env.ETH_INFURA_RINKEBY;


const provider = new HDWalletProvider(
  mnemonic,infura_endpoint
);
const web3 = new Web3(provider);

const deploy = async()=>{
  const accounts = await web3.eth.getAccounts();

  console.log('accts len: ', accounts.length, 'acct: ', accounts[0]);
  console.log(compiledFactory.abi);
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.abi))
  .deploy({data: compiledFactory.bytecode})
  .send({gas: '1000000', from: accounts[0]});
  //console.log(interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();


//https://rinkeby.infura.io/v3/1a5a0f939c1a41a285b37d5a7b1672e6
//project id: 1a5a0f939c1a41a285b37d5a7b1672e6
//secret: fbbf1fbad94b4c8b9256fc033745cd0a
