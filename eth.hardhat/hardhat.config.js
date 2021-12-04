require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
task("balances", "Prints the list of account balances", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    balance = await ethers.provider.getBalance(account.address);
    console.log(account.address, "has balance", balance.toString());
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
require("dotenv").config();
const path = require("path");
const dev_mnemonic = process.env.ETH_WALLET_MNEMONIC;
const infura_endpoint = process.env.ETH_INFURA_RINKEBY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      forking: {
        url: infura_endpoint
      },
      gasPrice: 0,
      initialBaseFeePerGas: 0,
      loggingEnabled: false,
      accounts: {
        mnemonic: dev_mnemonic
      },
      chainId: 1, // metamask -> accounts -> settings -> networks -> localhost 8545 -> set chainId to 1
    },
    rinkeby: {
      url: infura_endpoint,
      accounts: {
        mnemonic: dev_mnemonic
      }
    }
  }
};
