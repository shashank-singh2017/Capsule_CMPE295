const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "apology laugh blame illness weapon glory evidence stable still next process web",
  "https://rinkeby.infura.io/v3/92ce39c7f8a14f75b508151c9e8d0558"
);

console.log(provider);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode })
    .send({ from: accounts[0] });

  console.log(interface);
  console.log("Contract deployed to ", result.options.address);
};
deploy();
