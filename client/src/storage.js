import web3 from "./web3";

const address = "0x3738eD9712fBba15bd6CFA2846CB5CF5F18C6C9B";

const abi = [
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "manufacturer",
    outputs: [
      { name: "drugName", type: "string" },
      { name: "drugFamily", type: "string" },
      { name: "typeOfDrug", type: "string" },
      { name: "ingredientsUsed", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "retailerBatches",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "endUserBatches",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "allBatchIds",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "batchId", type: "address" }],
    name: "getManufacturerData",
    outputs: [
      { name: "drugName", type: "string" },
      { name: "drugFamily", type: "string" },
      { name: "typeOfDrug", type: "string" },
      { name: "ingredientsUsed", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "batchId", type: "address" }],
    name: "getBatch",
    outputs: [
      { name: "manufacturerAdd", type: "address" },
      { name: "logisticsAdd", type: "address" },
      { name: "retailerAdd", type: "address" },
      { name: "endUserAdd", type: "address" },
      { name: "product", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }, { name: "", type: "uint256" }],
    name: "userBatches",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "batchId", type: "address" }],
    name: "getNextAction",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "batchId", type: "address" }],
    name: "getEndUserData",
    outputs: [
      { name: "drugName", type: "string" },
      { name: "quantity", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "getUserBatchIds",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "batchId", type: "address" },
      { name: "drugName", type: "string" },
      { name: "drugFamily", type: "string" },
      { name: "typeOfDrug", type: "string" },
      { name: "ingredientsUsed", type: "string" }
    ],
    name: "setManufacturerData",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "batchId", type: "address" }],
    name: "getRetailerData",
    outputs: [
      { name: "arrivalTime", type: "uint256" },
      { name: "quantity", type: "uint256" },
      { name: "shipmentNum", type: "string" },
      { name: "warehouseName", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "logistics",
    outputs: [
      { name: "destinationName", type: "string" },
      { name: "shipmentNum", type: "string" },
      { name: "quantity", type: "uint256" },
      { name: "departureTime", type: "uint256" },
      { name: "estimatedArrivalTime", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "manufacturerAdd", type: "address" },
      { name: "logisticsAdd", type: "address" },
      { name: "retailerAdd", type: "address" },
      { name: "endUserAdd", type: "address" },
      { name: "product", type: "string" }
    ],
    name: "setBatch",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "nextAction",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "batchId", type: "address" },
      { name: "drugName", type: "string" },
      { name: "quantity", type: "uint256" }
    ],
    name: "setEndUserData",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "userBatchesData",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "logisticsBatches",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "retailer",
    outputs: [
      { name: "arrivalTime", type: "uint256" },
      { name: "quantity", type: "uint256" },
      { name: "shipmentNum", type: "string" },
      { name: "warehouseName", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "tempData",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "endUser",
    outputs: [
      { name: "drugName", type: "string" },
      { name: "quantity", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "batchId", type: "address" },
      { name: "arrivalTime", type: "uint256" },
      { name: "quantity", type: "uint256" },
      { name: "shipmentNum", type: "string" },
      { name: "warehouseName", type: "string" }
    ],
    name: "setRetailerData",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getAllBatchIds",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "batchId", type: "address" }],
    name: "getLogisticsData",
    outputs: [
      { name: "destinationName", type: "string" },
      { name: "shipmentNum", type: "string" },
      { name: "quantity", type: "uint256" },
      { name: "departureTime", type: "uint256" },
      { name: "estimatedArrivalTime", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "batch",
    outputs: [
      { name: "manufacturerAdd", type: "address" },
      { name: "logisticsAdd", type: "address" },
      { name: "retailerAdd", type: "address" },
      { name: "endUserAdd", type: "address" },
      { name: "product", type: "string" },
      { name: "currentOwner", type: "address" },
      { name: "nextParty", type: "address" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "batchId", type: "address" },
      { name: "destinationName", type: "string" },
      { name: "shipmentNum", type: "string" },
      { name: "quantity", type: "uint256" },
      { name: "departureTime", type: "uint256" },
      { name: "estimatedArrivalTime", type: "uint256" }
    ],
    name: "setLogisticsData",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "exists",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "manufacturerBatches",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
export default new web3.eth.Contract(abi, address);
