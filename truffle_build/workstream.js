import web3 from './web3';
//import CampaignFactory from './build/contracts/CampaignFactory.json';
//import DaoWorkstream from './build/contracts/DaoWorkstream.json';
import DaoWorkstream from '../eth.hardhat/artifacts/contracts/DaoPayTreasury.sol/DaoWorkstream.json';

export default (address) =>{
  return new web3.eth.Contract(
      DaoWorkstream.abi,
    address);
};
