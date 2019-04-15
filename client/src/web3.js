import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider);

console.log(window.web3);

console.log(web3.version);

export default web3;
