const Migracija = artifacts.require("mojKittyContract");

module.exports = function (deployer) {
  deployer.deploy(Migracija);
};