require("events").EventEmitter.defaultMaxListeners = 0;
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require("../compile");

let userDetails;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  userDetails = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("UserDetails Contract", () => {
  it("deploys a contract", () => {
    assert.ok(userDetails.options.address);
  });
});
