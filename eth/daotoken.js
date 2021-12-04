import web3 from './web3';
//import CampaignFactory from './build/contracts/CampaignFactory.json';
//import DaoWorkstream from './build/contracts/DaoWorkstream.json';
import DaoToken from '../eth.hardhat/artifacts/contracts/DaoPayTreasury.sol/DAOToken.json';

export default (address) =>{
  return new web3.eth.Contract(
      DaoToken.abi,
    address);
};
