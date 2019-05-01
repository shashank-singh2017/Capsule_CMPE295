const path = require("path");
const fs = require("fs");
const solc = require("solc");

const capsuleUserPath = path.resolve(__dirname, "contracts", "CapsuleUser.sol");

const storagePath = path.resolve(__dirname, "contracts", "Storage.sol");

// const source = fs.readFileSync(storagePath, "utf-8");
// module.exports = solc.compile(source, 1).contracts[":Storage"];

const source = fs.readFileSync(capsuleUserPath, "utf-8");
module.exports = solc.compile(source, 1).contracts[":CapsuleUser"];
