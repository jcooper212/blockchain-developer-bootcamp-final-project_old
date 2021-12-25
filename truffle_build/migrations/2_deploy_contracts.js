const DaoPayTreasury = artifacts.require("DaoPayTreasury.sol");

module.exports = function (deployer) {

  deployer.deploy(
    DaoPayTreasury, 1000000000); //total supply
};
