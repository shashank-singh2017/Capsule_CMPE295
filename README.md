# Capsule_CMPE295




# Smart Contracts in the prototype
The smart contracts section in the protoype includes the functionalities which are the building blocks for capsule decentralised application.

In this prototype by using web3 js, our web application is interacting with smart contracts on ethereum blockchain (deployed on test networks) and performs following tasks:

1. Checkin to our ether accounts and fetch account info like balance and ethers left.
2. Read the transaction smart contract (which will be used for our supply chain transactions).
3. Sign and broadcast the transaction to the test network. Once completed we can see the transaction block added on our test network.
4. Deploy the contract to the test networks.
5. Write new data and store the block on the blockchain.
6.
7.
8.

Through web3js we are able to interact with smart contracts as if they were Javascript objects. It auto converts all calls (from our web application to ethereum blockchain) into low level ABI calls over RPC.
