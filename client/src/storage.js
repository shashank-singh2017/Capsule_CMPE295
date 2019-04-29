import web3 from "./web3";

const address = "0x08C277Bb04905020090ab8f8BBc72ae0F15Ed6e6";

const abi = [
  {
    constant: true,
    inputs: [{ name: "batchId", type: "address" }],
    name: "getManufacturerData",
    outputs: [
      { name: "manufacturerRegNum", type: "string" },
      { name: "manufacturerName", type: "string" },
      { name: "manufacturerAddress", type: "string" },
      { name: "typeOfDrug", type: "string" },
      { name: "logisticHandlerName", type: "string" },
      { name: "labTestResults", type: "string" },
      { name: "productId", type: "string" }
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
      { name: "product", type: "string" },
      { name: "isDeclined", type: "bool" },
      { name: "curParty", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "batchId", type: "address" },
      { name: "drugName", type: "string" },
      { name: "quantity", type: "uint256" },
      { name: "arrivalTime", type: "string" },
      { name: "productId", type: "string" },
      { name: "productQualityRating", type: "string" },
      { name: "deliveryMetricsRating", type: "string" },
      { name: "reviewComments", type: "string" }
    ],
    name: "setEndUserData",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "batchId", type: "address" },
      { name: "manufacturerRegNum", type: "string" },
      { name: "manufacturerName", type: "string" },
      { name: "manufacturerAddress", type: "string" },
      { name: "typeOfDrug", type: "string" },
      { name: "logisticHandlerName", type: "string" },
      { name: "labTestResults", type: "string" },
      { name: "productId", type: "string" }
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
      { name: "quantity", type: "uint256" },
      { name: "arrivalTime", type: "string" },
      { name: "productId", type: "string" },
      { name: "productQualityRating", type: "string" },
      { name: "deliveryMetricsRating", type: "string" },
      { name: "reviewComments", type: "string" }
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
    constant: true,
    inputs: [{ name: "batchId", type: "address" }],
    name: "getRetailerData",
    outputs: [
      { name: "arrivalTime", type: "string" },
      { name: "quantity", type: "uint256" },
      { name: "shipmentNum", type: "string" },
      { name: "warehouseName", type: "string" },
      { name: "damagedItemsRecvd", type: "string" },
      { name: "damagedItemsQuantity", type: "uint256" },
      { name: "productId", type: "string" }
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
      { name: "destinationAddress", type: "string" },
      { name: "shipmentNum", type: "string" },
      { name: "quantity", type: "uint256" },
      { name: "departureTime", type: "string" },
      { name: "estimatedArrivalTime", type: "string" },
      { name: "productId", type: "string" }
    ],
    name: "setLogisticsData",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
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
    constant: false,
    inputs: [{ name: "batchId", type: "address" }],
    name: "setIsDeclined",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "batchId", type: "address" }],
    name: "getLogisticsData",
    outputs: [
      { name: "destinationName", type: "string" },
      { name: "destinationAddress", type: "string" },
      { name: "shipmentNum", type: "string" },
      { name: "quantity", type: "uint256" },
      { name: "departureTime", type: "string" },
      { name: "estimatedArrivalTime", type: "string" },
      { name: "productId", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "batchId", type: "address" },
      { name: "arrivalTime", type: "string" },
      { name: "quantity", type: "uint256" },
      { name: "shipmentNum", type: "string" },
      { name: "warehouseName", type: "string" },
      { name: "damagedItemsRecvd", type: "string" },
      { name: "damagedItemsQuantity", type: "uint256" },
      { name: "productId", type: "string" }
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
    name: "getallBatchIds",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
export default new web3.eth.Contract(abi, address);
