var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
  deployer.deploy(Voting, ['Sid','Kohli','Smith'], {gas: 890000});
};