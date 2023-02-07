//require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
//require('@nomiclabs/hardhat-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
      hardhat: {
          forking: {
              url: 'https://eth-goerli.g.alchemy.com/v2/7_5fmV6KBViG6pvb28_t8nXJ-wiqvb7P',
              blockNumber: 8335158,
          },
      },
  },
};
