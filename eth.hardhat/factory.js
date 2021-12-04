import web3 from './web3';
//import CampaignFactory from './build/contracts/CampaignFactory.json';
import DefiWallieFactory from './artifacts/contracts/DefiWallieFactory.sol/DefiWallieFactory.json';

console.log("hi");
var abi = JSON.stringify(DefiWallieFactory.abi);
console.log(abi);
const instance = new web3.eth.Contract(
  DefiWallieFactory.abi,
  '0xab961258F23f1e316A94640E6CFf0B0448FB81b4'
);

export default instance;


// DefiWallieFactory 0xab961258F23f1e316A94640E6CFf0B0448FB81b4
// CampaignFactory 0x4bC10AdcccDD87c8A7Cea8A002dF1B8C62932813
