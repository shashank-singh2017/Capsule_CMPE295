import web3 from "./web3";

const address = "0xE76393B0c1842bda287826228904C924472E4CfA";
const abi=
[{
    "constant":true,
    "inputs":[{"name":"_userAddress","type":"address"}],
    "name":"getFirstName",
    "outputs":[{"name":"","type":"string"}],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
},
{
    "constant":true,
    "inputs":[{"name":"_userAddress","type":"address"}],
    "name":"getUser",
    "outputs":[{"name":"","type":"string"},
    {"name":"","type":"string"},
    {"name":"","type":"string"},
    {"name":"","type":"string"},
    {"name":"","type":"string"}],
    "payable":false,"stateMutability":"view","type":"function"},
    {"constant":false,"inputs":[{"name":"_userAddress","type":"address"},
    {"name":"_firstName","type":"string"},{"name":"_lastName","type":"string"},
    {"name":"_email","type":"string"},
    {"name":"_password","type":"string"},{"name":"_userType","type":"string"}],"name":"setUser",
    "outputs":[],"payable":true,"stateMutability":"payable","type":"function"}];
export default new web3.eth.Contract(abi, address);
