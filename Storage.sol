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
        string manufacturerRegNum;
        string manufacturerName;
        string manufacturerAddress;
        string typeOfDrug;
        string logisticHandlerName;
        string labTestResults;
        string productId;
    }

    struct logisticsDetails {
        string destinationName;
        string destinationAddress;
        string shipmentNum;
        uint256 quantity;
        uint256 departureTime;
        uint256 estimatedArrivalTime;
        string productId;
    }

    struct retailerDetails {
        uint256 arrivalTime;
        uint256 quantity;
        string shipmentNum;
        string warehouseName;
        bool damagedItemsRecvd;
        uint256 damagedItemsQuantity;
        string productId;
    }

    struct endUserDetails {
        string drugName;
        uint256 quantity;
        uint256 arrivalTime;
        string productId;
        string productQualityRating;
        string deliveryMetricsRating;
        string reviewComments;
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

    function getallBatchIds() public view returns(address[]) {
        return allBatchIds;
    }

    function setManufacturerData(address batchId, string manufacturerRegNum, string manufacturerName, string manufacturerAddress, string typeOfDrug,
      string logisticHandlerName, string labTestResults, string productId) public returns(bool) {
        manufacturerDetailsData.manufacturerRegNum = manufacturerRegNum;
        manufacturerDetailsData.manufacturerName = manufacturerName;
        manufacturerDetailsData.manufacturerAddress = manufacturerAddress;
        manufacturerDetailsData.typeOfDrug = typeOfDrug;
        manufacturerDetailsData.logisticHandlerName = logisticHandlerName;
        manufacturerDetailsData.labTestResults = labTestResults;
        manufacturerDetailsData.productId = productId;

        manufacturer[batchId] = manufacturerDetailsData;
        nextAction[batchId] = 'LOGISTICS';

        return true;
    }

    function getManufacturerData(address batchId) public view returns(string manufacturerRegNum, string manufacturerName, string manufacturerAddress, string typeOfDrug,
      string logisticHandlerName, string labTestResults, string productId) {
        manufacturerDetails memory tmpData = manufacturer[batchId];
        return (tmpData.manufacturerRegNum, tmpData.manufacturerName, tmpData.manufacturerAddress, tmpData.typeOfDrug,
         tmpData.logisticHandlerName, tmpData.labTestResults, tmpData.productId);
    }

    function setLogisticsData(address batchId, string destinationName, string destinationAddress, string shipmentNum, uint256 quantity, uint256 departureTime, uint256 estimatedArrivalTime,
     string productId) public returns(bool) {
        logisticsDetailsData.destinationName = destinationName;
        logisticsDetailsData.destinationAddress = destinationAddress;
        logisticsDetailsData.shipmentNum = shipmentNum;
        logisticsDetailsData.quantity = quantity;
        logisticsDetailsData.departureTime = departureTime;
        logisticsDetailsData.estimatedArrivalTime = estimatedArrivalTime;
        logisticsDetailsData.productId = productId;

        logistics[batchId] = logisticsDetailsData;

        nextAction[batchId] = 'RETAILER';

        return true;
    }

    function getLogisticsData(address batchId) public view returns(string destinationName, string destinationAddress, string shipmentNum, uint256 quantity, uint256 departureTime, uint256 estimatedArrivalTime,
      string productId) {
        logisticsDetails memory tmpData = logistics[batchId];
        return (tmpData.destinationName, tmpData.destinationAddress, tmpData.shipmentNum, tmpData.quantity, tmpData.departureTime, tmpData.estimatedArrivalTime,
        tmpData.productId);
    }

    function setRetailerData(address batchId, uint256 arrivalTime, uint256 quantity, string shipmentNum, string warehouseName,bool damagedItemsRecvd,
    uint256 damagedItemsQuantity, string productId) public returns(bool) {
        retailerDetailsData.arrivalTime = arrivalTime;
        retailerDetailsData.quantity = quantity;
        retailerDetailsData.shipmentNum = shipmentNum;
        retailerDetailsData.warehouseName = warehouseName;
        retailerDetailsData.damagedItemsRecvd = damagedItemsRecvd;
        retailerDetailsData.damagedItemsQuantity = damagedItemsQuantity;
        retailerDetailsData.productId = productId;

        retailer[batchId] = retailerDetailsData;

        nextAction[batchId] = 'ENDUSER';

        return true;
    }

    function getRetailerData(address batchId) public view returns(uint256 arrivalTime, uint256 quantity, string shipmentNum, string warehouseName,bool damagedItemsRecvd,
    uint256 damagedItemsQuantity, string productId) {
        retailerDetails memory tmpData = retailer[batchId];
        return (tmpData.arrivalTime, tmpData.quantity, tmpData.shipmentNum,
          tmpData.warehouseName, tmpData.damagedItemsRecvd,
          tmpData.damagedItemsQuantity, tmpData.productId);
    }


    function setEndUserData(address batchId, string drugName, uint256 quantity, uint256 arrivalTime, string productId, string productQualityRating,
      string deliveryMetricsRating, string reviewComments) public returns(bool) {
        endUserDetailsData.drugName = drugName;
        endUserDetailsData.quantity = quantity;
        endUserDetailsData.arrivalTime = arrivalTime;
        endUserDetailsData.productId = productId;
        endUserDetailsData.productQualityRating = productQualityRating;
        endUserDetailsData.deliveryMetricsRating = deliveryMetricsRating;
        endUserDetailsData.reviewComments = reviewComments;

        endUser[batchId] = endUserDetailsData;

        nextAction[batchId] = 'DONE';
          return true;
    }

    function getEndUserData(address batchId) public view returns(string drugName, uint256 quantity, uint256 arrivalTime, string productId, string productQualityRating,
      string deliveryMetricsRating, string reviewComments) {
        endUserDetails memory tmpData = endUser[batchId];
        return (tmpData.drugName, tmpData.quantity, tmpData.arrivalTime, tmpData.productId, tmpData.productQualityRating,
           tmpData.deliveryMetricsRating,  tmpData.reviewComments);
    }

    function getUserBatchIds(address userAddress) public view returns(address[]) {
        return userBatches[userAddress];
    }

}
