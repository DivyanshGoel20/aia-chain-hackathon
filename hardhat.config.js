/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "aiaTestnet",
   networks: {
      hardhat: {},
      aiaTestnet: {
         url: "https://1320.rpc.thirdweb.com",
         chainId: 1320,
         accounts: [`0x${PRIVATE_KEY}`],
         gasPrice: "auto",
      },
   },
};
