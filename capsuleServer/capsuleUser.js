import web3 from "./web3";

const address = "0x38885f7bad05b3341d63362Df628926f36bf7A87";

const abi = [
  {
    constant: true,
    inputs: [{ name: "_userAddress", type: "address" }],
    name: "getFirstName",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_userAddress", type: "address" }],
    name: "getUser",
    outputs: [
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_userAddress", type: "address" },
      { name: "_firstName", type: "string" },
      { name: "_lastName", type: "string" },
      { name: "_email", type: "string" },
      { name: "_password", type: "string" },
      { name: "_userType", type: "string" }
    ],
    name: "setUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

export default new web3.eth.Contract(abi, address);
