var bip39 = require("bip39");
var ark = require('ripajs');
var argv = require('minimist')(process.argv.slice(2));

if (argv['n']) {
    ark.crypto.setNetworkVersion({
        ark_mainnet: 23,
        ark_devnet: 30,
        ripa_mainnet: 55
    }[argv['n']]);
}

for (i = 0; i < argv['a']; i++) {
    var passphrase = bip39.generateMnemonic();
    var address = ark.crypto.getAddress(ark.crypto.getKeys(passphrase).publicKey);

    console.log("Address: " + address + " | Passphrase: " + passphrase);
}
