// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

abstract contract ERC20{    
    function decimals() public virtual view returns (uint8);
    function transfer(address _to, uint256 _value) public virtual returns (bool success);
    function transferFrom(address _from, address _to, uint256 _value) public virtual returns (bool success);
}

contract TokenSale{

    uint tokenPriceInWei = 1 ether;

    ERC20 token;
    address tokenOwner;

    constructor(address _token){
        tokenOwner = msg.sender;
        token = ERC20(_token);
    }

    function purchaseCoffee() public payable {
        require(msg.value >= tokenPriceInWei, "Not enough money sent!");
        uint tokensToTransfer = msg.value / tokenPriceInWei;
        uint remainder = msg.value - tokenPriceInWei * tokensToTransfer;
        token.transferFrom(tokenOwner, msg.sender, tokensToTransfer * 10 ** token.decimals());
        payable(msg.sender).transfer(remainder); //send the remaining of the money back
    }

}