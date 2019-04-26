const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "fun glow gym favorite ability device joy replace garage amateur either under",
  "https://rinkeby.infura.io/v3/4797c4ada5234ee8ab8d76929d30973b"
);

// console.log(provider);
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
