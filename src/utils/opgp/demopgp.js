const openPgpUtils = require("./openPgpUtils");
const fs = require('fs').promises;

(async () => {
  const privateKey = await fs.readFile('src/utils/opgp/privateKey.asc', 'utf8');
  const publicKey = await fs.readFile('src/utils/opgp/publicKey.asc', 'utf8');

  openPgpUtils.securePhrase = 'securePhrase';
  //await openPgpUtils.generateKeys();
  openPgpUtils.privateKey = privateKey;
  openPgpUtils.publicKey = publicKey;

  const encryptedMessage = await openPgpUtils.encryptMessage('diego1234');
  const decryptedMessage = await openPgpUtils.dencryptMessage(encryptedMessage);

  console.log('decryptedMessage:', decryptedMessage);
})();

