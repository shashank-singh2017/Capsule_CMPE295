pragma solidity ^0.4.17;

contract CapsuleUser {
    
    struct user {
        string firstName;
        string lastName;
        string email;
        string password;
        string userType;
    }
    
    mapping(address => user) userDetails;
    
    user userDetail;
    
    function setUser(address _userAddress,
                     string _firstName,
                     string _lastName, 
                     string _email,
                     string _password,
                     string _userType) public {
        
        userDetail.firstName = _firstName;
        userDetail.lastName = _lastName;
        userDetail.email = _email;
        userDetail.password = _password;
        userDetail.userType = _userType;
        
        userDetails[_userAddress] = userDetail;
        
    }
    
    function getUser(address _userAddress) public view returns(string, string, string, string, string) {

        /*Getting value from struct*/
        user memory tmpData = userDetails[_userAddress];
        
        return (tmpData.firstName, tmpData.lastName, tmpData.email, tmpData.password, tmpData.userType);
    }
    
    function getFirstName(address _userAddress) public view returns(string) {

        /*Getting value from struct*/
        user memory tmpData = userDetails[_userAddress];
        
        return (tmpData.firstName);
    }
    
}