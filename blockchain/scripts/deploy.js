const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.getContractFactory("CivicChainVoting");
  const voting = await Voting.deploy();

  await voting.waitForDeployment();

  console.log("CivicChainVoting deployed to:", await voting.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
