// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;
contract BlockchainMessenger{
    
    string public myString = "Hello, world!";
    uint public counter = 0;
    address public myAddress;

    constructor() {
        myAddress = msg.sender;
    }

    function setMyString(string memory _myString) public {
        if(msg.sender == myAddress){
            myString = _myString;
            counter++;
        }
    }

}