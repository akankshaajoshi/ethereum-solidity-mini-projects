const Spacebear = artifacts.require("Spacebear");
const truffleAssert = require("truffle-assertions");

contract("Spacebear", (accounts) => {
    it("should credit nft to a certain account", async () => {
        const spacebearInstance = await Spacebear.deployed();
        const txnResult = await spacebearInstance.safeMint(accounts[1], "spacebear_1.json");

        truffleAssert.eventEmitted(txnResult, "Transfer", (ev) => {
            return ev.from === "0x0000000000000000000000000000000000000000" && 
                   ev.to === accounts[1] && 
                   ev.tokenId.toNumber() === 0;
        });

        assert.equal(await spacebearInstance.ownerOf(0), accounts[1], "Owner of token 0 is not accounts[1]");
    });
});