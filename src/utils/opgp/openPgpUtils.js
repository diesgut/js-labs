const openpgp = require('openpgp');

class OpenPgpUtils {
    privateKey;
    publicKey;
    securePhrase;

    constructor() {
    }

    async generateKeys() {
        const { privateKey, publicKey } = await openpgp.generateKey({
            type: 'rsa', // Algotithm key
            rsaBits: 2048, // Length key
            userIDs: [{ name: 'diesgut', email: 'diesgut@mail.com' }],
            passphrase: this.securePhrase, //for private key protection
        });
        console.log('privateKey');
        console.log(privateKey);
        console.log('publicKey');
        console.log(publicKey);

        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }


    //This method use the plubic key
    async encryptMessage(message) {
        const objMessage = await openpgp.createMessage({ text: message })
        return await openpgp.encrypt({
            message: objMessage,
            encryptionKeys: await openpgp.readKey({ armoredKey: this.publicKey }),
        });
    }

    //This method use the private key
    async dencryptMessage(encryptedMessage) {
        return await openpgp.decrypt({
            message: await openpgp.readMessage({ armoredMessage: encryptedMessage }),
            decryptionKeys: await openpgp.decryptKey({
                privateKey: await openpgp.readPrivateKey({ armoredKey: this.privateKey }),
                passphrase: this.securePhrase,
            }),
        });
    }

    async writeKeys(privateKey, publicKey) {
        const fs = require('fs');
        fs.writeFileSync('privateKey.asc', privateKey);
        fs.writeFileSync('publicKey.asc', publicKey);
    }
}
module.exports = new OpenPgpUtils();