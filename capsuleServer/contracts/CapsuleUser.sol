pragma solidity ^0.4.17;

contract CapsuleUser {
    
    struct user {
        // address userAddress;
        string firstName;
        string lastName;
        string email;
        string userType;
    }
    
    mapping(address => user) public userDetails;
    mapping(address => string) userRole;
    
    address[] userAddresses;
    
    user[] allUsers;
    
    user userDetail;
    
    function setUser(address _userAddress,
                     string _firstName,
                     string _lastName, 
                     string _email,
                     string _userType) public payable {
        userDetail.firstName = _firstName;
        userDetail.lastName = _lastName;
        userDetail.email = _email;
        userDetail.userType = _userType;
        userAddresses.push(_userAddress);
        allUsers.push(userDetail);
        userDetails[_userAddress] = userDetail;
        
    }
    
    function getUser(address _userAddress) public view returns(string, string, string, string) {

        /*Getting value from struct*/
        user memory tmpData = userDetails[_userAddress];
        
        return (tmpData.firstName, tmpData.lastName, tmpData.email, tmpData.userType);
    }

    function getUserRole(address _userAddress) public view returns(string) {
        return userRole[_userAddress];
    }
    
    function getFirstName(address _userAddress) public view returns(string) {

        /*Getting value from struct*/
        user memory tmpData = userDetails[_userAddress];
        
        return (tmpData.firstName);
    }
    
    function getNoOfUsers() public view returns(uint) {
        return allUsers.length;
    }
    
    function listOfAddress() public view returns(address[]) {
        return userAddresses;
    }
    
}