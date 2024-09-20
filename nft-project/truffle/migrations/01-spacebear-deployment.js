const Spacebear = artifacts.require("Spacebear");

module.exports = function (deployer, network, accounts) {
    //If token contains constructor arguments, we pass them as an object in the second argument
    deployer.deploy(Spacebear);
}