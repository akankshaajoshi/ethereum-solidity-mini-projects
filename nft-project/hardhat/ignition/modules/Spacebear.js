// Spacebear.js (ignition/modules/Spacebear.js)

module.exports = async ({ ethers, getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
  
    // Example for deploying the Spacebear contract
    await deploy('Spacebear', {
      from: deployer,
      args: ['Bear Token', 'BEAR'],  // Constructor arguments if needed
      log: true,
    });
  
    console.log('Spacebear contract deployed!');
  };
  
  module.exports.tags = ['Spacebear'];  // Optional: Helps organize the deployments by tags
  