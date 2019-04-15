import web3 from "./web3";

const address = "0x87288715a8960F4e0Fc7E3234C839dbE4c7a5483";

const abi = [
  {
    constant: true,
    inputs: [],
    name: "getNoOfUsers",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "userDetails",
    outputs: [
      { name: "firstName", type: "string" },
      { name: "lastName", type: "string" },
      { name: "email", type: "string" },
      { name: "password", type: "string" },
      { name: "userType", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
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
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "listOfAddress",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
export default new web3.eth.Contract(abi, address);
