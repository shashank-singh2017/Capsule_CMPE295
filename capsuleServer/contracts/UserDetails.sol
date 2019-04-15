pragma solidity ^0.4.17;

contract UserDetails {
    
    struct user {
        string name;
        string contactNo;
        string email;
    }
    
    mapping(address => user) userDetails;
    mapping(address => string) userRole;
    
    user userDetail;
    
    function getUserRole(address _userAddress) public view returns(string) {
        return userRole[_userAddress];
    }
    
    function setUser(address _userAddress,
                     string _name, 
                     string _contactNo, 
                     string _role, 
                     string _email) public payable {
        
        userDetail.name = _name;
        userDetail.contactNo = _contactNo;
        userDetail.email = _email;
        
        userDetails[_userAddress] = userDetail;
        userRole[_userAddress] = _role;
    }
    
    function getUser(address _userAddress) public view returns(string, string, string, string) {

        /*Getting value from struct*/
        user memory tmpData = userDetails[_userAddress];
        
        return (tmpData.name, tmpData.contactNo, userRole[_userAddress], tmpData.email);
    }
    
    function getUserName(address _userAddress) public view returns(string) {

        /*Getting value from struct*/
        user memory tmpData = userDetails[_userAddress];
        
        return (tmpData.name);
    }
    
}