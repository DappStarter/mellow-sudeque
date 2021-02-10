require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index rifle stereo million imitate private equal genre'; 
let testAccounts = [
"0x09480ec98ac4122031cf4a7a6d6755cd8bc7353976ed1b9c8258666d4776f4a5",
"0x7e0017bd05c8cf5f7f4680eddf53c77cae577fce3d9d66a69308836d06e19219",
"0x7b32412f456fbd598126bbd2016a6c32c529a14f9b37ec8a07d63a6eb7a5e5b0",
"0xa17d66ad4fdcd5f114cd022981b3f062dfe1df861a6cb156d23048cb74ccc077",
"0x493115c566d4ce649c5584bdc51d267aa8773cc798bbd77ac967e68dd624deeb",
"0xe029abf83ff7ae67bb59db3bbabcfed1131529d9c62a2b3500207d868035e250",
"0xda3ba79845d931c119efe2415bea45294a499dea248bc5bb1da622cb5808a304",
"0x3e8a434cab280180ee2276e50f9fac3b74c8a22886e9612d58cbb72ca550c072",
"0x0fb0cf07ef2c950f0cc5f68bd9a5186a73ba1e5c6b6d8d4c3c7bb4cc241bd2c0",
"0xab7b4c0d5c54de4ef4f46fac5d6fa4d0129d89fab01abc925355bf96b9531469"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
