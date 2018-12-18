const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/222312ashdweq'
const web3 = new Web3(rpcURL)
const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07' // Account address
web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') })
