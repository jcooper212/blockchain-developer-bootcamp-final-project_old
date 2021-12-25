import Web3 from "web3";

let web3;
const infura_endpoint = process.env.ETH_INFURA_RINKEBY;
const prkey = process.env.ETH_P;


if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(infura_endpoint);
  web3 = new Web3(provider);
  web3.eth.accounts.wallet.add(prkey);
}

export default web3;
