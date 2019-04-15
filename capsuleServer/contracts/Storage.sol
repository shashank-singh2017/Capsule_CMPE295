pragma solidity ^0.4.17;

contract Storage {
    
    struct batchDetails {
        address manufacturerAdd;
        address logisticsAdd;
        address retailerAdd;
        address endUserAdd;
        string product;
        address currentOwner;
        address nextParty;
    }
    
    
    struct manufacturerDetails {
        string drugName;
        string drugFamily;
        string typeOfDrug;
        string ingredientsUsed;
    }
    
    struct logisticsDetails {
        string destinationName;
        string shipmentNum;
        uint256 quantity;
        uint256 departureTime;
        uint256 estimatedArrivalTime;
    }
    
    struct retailerDetails {
        uint256 arrivalTime;
        uint256 quantity;
        string shipmentNum;
        string warehouseName;
    }
    
    struct endUserDetails {
        string drugName;
        uint256 quantity;
    }
    
    mapping (address => batchDetails) public batch;
    mapping (address => manufacturerDetails) public manufacturer;
    mapping (address => logisticsDetails) public logistics;
    mapping (address => retailerDetails) public retailer;
    mapping (address => endUserDetails) public endUser;
    mapping (address => string) public nextAction;
    mapping (address => address[]) public userBatches;
    mapping (address => bool) public exists;
    
    batchDetails batchDetailsData;
    manufacturerDetails manufacturerDetailsData;
    logisticsDetails logisticsDetailsData;
    retailerDetails retailerDetailsData;
    endUserDetails endUserDetailsData;
    address[] public userBatchesData;
    address[] public allBatchIds;
    address[] public manufacturerBatches;
    address[] public logisticsBatches;
    address[] public retailerBatches;
    address[] public endUserBatches;
    address[] public tempData;
    
    function setBatch(address manufacturerAdd, address logisticsAdd, address retailerAdd, address endUserAdd, string product) public returns(address) {
        
        uint tmpData = uint(keccak256(msg.sender, now));
        address batchId = address(tmpData);
        allBatchIds.push(batchId);
        
        batchDetailsData.manufacturerAdd = manufacturerAdd;
        address[] memory tempManufacturerBatches = userBatches[manufacturerAdd];
        manufacturerBatches = tempManufacturerBatches;
        manufacturerBatches.push(batchId);
        userBatches[manufacturerAdd] = manufacturerBatches;
        exists[manufacturerAdd] = true;
        
        batchDetailsData.logisticsAdd = logisticsAdd;
        address[] memory tempLogisticsBatches = userBatches[logisticsAdd];
        logisticsBatches = tempLogisticsBatches;
        logisticsBatches.push(batchId);
        userBatches[logisticsAdd] = logisticsBatches;
        exists[logisticsAdd] = true;
        
        batchDetailsData.retailerAdd = retailerAdd;
        address[] memory tempRetailerBatches = userBatches[retailerAdd];
        retailerBatches = tempRetailerBatches;
        retailerBatches.push(batchId);
        userBatches[retailerAdd] = retailerBatches;
        exists[retailerAdd] = true;
        
        batchDetailsData.endUserAdd = endUserAdd;
        address[] memory tempEndUserBatches = userBatches[endUserAdd];
        endUserBatches = tempEndUserBatches;
        endUserBatches.push(batchId);
        userBatches[endUserAdd] = endUserBatches;
        exists[endUserAdd] = true;
        
        batchDetailsData.product = product;
        
        
        batch[batchId] = batchDetailsData;
        
        nextAction[batchId] = 'MANUFACTURER';
        
        return batchId;
    }
    
    function getBatch(address batchId) public view returns(address manufacturerAdd, address logisticsAdd, address retailerAdd, address endUserAdd, string product) {
        batchDetails memory tmpData = batch[batchId];
        return (tmpData.manufacturerAdd, tmpData.logisticsAdd, tmpData.retailerAdd, tmpData.endUserAdd, tmpData.product);
    }
    
    function getAllBatchIds() public view returns(address[]) {
        return allBatchIds;
    }

    function getNextAction(address batchId) public view returns(string) {
        return nextAction[batchId];
    }
    
    function setManufacturerData(address batchId, string drugName, string drugFamily, string typeOfDrug, string ingredientsUsed) public returns(bool) {
        manufacturerDetailsData.drugName = drugName;
        manufacturerDetailsData.drugFamily = drugFamily;
        manufacturerDetailsData.typeOfDrug = typeOfDrug;
        manufacturerDetailsData.ingredientsUsed = ingredientsUsed;
        
        manufacturer[batchId] = manufacturerDetailsData;
        
        nextAction[batchId] = 'LOGISTICS';
        
        return true;
    }
    
    function getManufacturerData(address batchId) public view returns(string drugName, string drugFamily, string typeOfDrug, string ingredientsUsed) {
        manufacturerDetails memory tmpData = manufacturer[batchId];
        return (tmpData.drugName, tmpData.drugFamily, tmpData.typeOfDrug, tmpData.ingredientsUsed);
    }
    
    function setLogisticsData(address batchId, string destinationName, string shipmentNum, uint256 quantity, uint256 departureTime, uint256 estimatedArrivalTime) public returns(bool) {
        logisticsDetailsData.destinationName = destinationName;
        logisticsDetailsData.shipmentNum = shipmentNum;
        logisticsDetailsData.quantity = quantity;
        logisticsDetailsData.departureTime = departureTime;
        logisticsDetailsData.estimatedArrivalTime = estimatedArrivalTime;
        
        logistics[batchId] = logisticsDetailsData;
        
        nextAction[batchId] = 'RETAILER';
        
        return true;
    }
    
    function getLogisticsData(address batchId) public view returns(string destinationName, string shipmentNum, uint256 quantity, uint256 departureTime, uint256 estimatedArrivalTime) {
        logisticsDetails memory tmpData = logistics[batchId];
        return (tmpData.destinationName, tmpData.shipmentNum, tmpData.quantity, tmpData.departureTime, tmpData.estimatedArrivalTime);
    }
    
    function setRetailerData(address batchId, uint256 arrivalTime, uint256 quantity, string shipmentNum, string warehouseName) public returns(bool) {
        retailerDetailsData.arrivalTime = arrivalTime;
        retailerDetailsData.quantity = quantity;
        retailerDetailsData.shipmentNum = shipmentNum;
        retailerDetailsData.warehouseName = warehouseName;
        
        retailer[batchId] = retailerDetailsData;
        
        nextAction[batchId] = 'ENDUSER';
        
        return true;
    }
    
    function getRetailerData(address batchId) public view returns(uint256 arrivalTime, uint256 quantity, string shipmentNum, string warehouseName) {
        retailerDetails memory tmpData = retailer[batchId];
        return (tmpData.arrivalTime, tmpData.quantity, tmpData.shipmentNum, tmpData.warehouseName);
    }
    
    function setEndUserData(address batchId, string drugName, uint256 quantity) public returns(bool) {
        endUserDetailsData.drugName = drugName;
        endUserDetailsData.quantity = quantity;
        
        endUser[batchId] = endUserDetailsData;
        
        nextAction[batchId] = 'DONE';
    }
    
    function getEndUserData(address batchId) public view returns(string drugName, uint256 quantity) {
        endUserDetails memory tmpData = endUser[batchId];
        return (tmpData.drugName, tmpData.quantity);
    }
    
    function getUserBatchIds(address userAddress) public view returns(address[]) {
        return userBatches[userAddress];
    }
    
}