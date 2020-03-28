require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name razor soap unveil half private fortune gentle'; 
let testAccounts = [
"0xa23427417772c5d049d86f75e87317b42ae1579ffa022533d76e6a5e6a813294",
"0x3116dd2476315127b4c677ec1a06df58f0d68b9e5ec9bf3c36666e5b798b40f4",
"0x53f5b8a5592b2fe5477a2e38c6a1dea58163ab3051527ee9463c13e90eaee9ee",
"0x8a6e8997a3fc90df253b74d2798a05a319fe528adac864b91d29b64b3c09a7b4",
"0xb55f0f8b37cfaa09c4947aa6d47f9d6793f305edd954b6eab562dbce10d36b52",
"0xa4b34ceeba4f3c873084f010884f8c3e7eb1725ae78de32aa4f1a343f8ef7712",
"0x40985878d35e5ab0b450ee3f2b729e8d30223c444a8680cb084c3a18da54040e",
"0xfc69f53205a063642f1c096d2f998009e54fdc5ccfb09db1400e2223ea695a33",
"0x89beb2a446f006a309375395586667acfcd3a9c62d25b7c885cdda265619a4e6",
"0x1198ad8206bf5b0c1ed3d0f63b8023f2fb119bb2892c16831c6199606a15eac2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
