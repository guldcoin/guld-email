## guld.email FAQ - Intro to PGP



### What is PGP?

PGP (Pretty Good Privacy) encryption is one of the best ways to protect your privacy and prove your identity online.


Don't let the name fool you. It's DAMN good privacy.

PGP works through Private and Public key Pairings, created by each user on a trusted computer.


### What can I do with PGP?

1. Digitally `Sign` a file, proving your identity attached to it. 
2. `Encrypt` a file with someone else's public key to ensure only the recipient can open it.
3. `Apply` and attach to your guld identity for digital transactions through our [Telegram group and bot, Gai.](http://guld.chat)
4. `Assign permisions` to who can acces files in your personal guld file cloud. 
5. `Access` your guld cloud files from any [TigoCTM machine](https://tigoctm.com).

### How does the guld.email page work?
This page will generate an email template to send over to `public@iramiller.com`

1. Hit the `send` button to prepare a send transaction. 
2. Fill in the the `sender`, `receiver` and `amount` fields, then hit generate. 
3. This will open your email client and attach the transaction file. If setup with PGP encryption, send as inline encrypted message, to `public@iramiller.com` 



### How does Private, Public Key Pair work?

The private key you create, along the public key it generates, are your two main tools to safely identify yourself across unsafe communication platforms.

The private key allows you to sign and encrypt messages and identify you (or whoever holds it) as the true sender of the signed message, while the public key, if sent to someone who wants to contact you, or received from someone you want to contact, allows you to encode messages so only those specific people can decode the contents.



### PGP Key generation Recomendations

 * Keys should use RSA for both signing and encrypting.

 * The RSA key should be at least 2048 bits length, but preferably 4096 bits.

 * Set your key with a Expiration date, in case you lose access to your keys in the future, your identity will not be on the lose.

### Key Storage

Do not share your private key with anyone. You must guard your private key very carefully.

You may share and publish your Public key, for it can only be used to encode messages that only you can open.

Hardware based PGP Keys, like Yubico Keys, are the highest standard of identity security. We encourage you use them.

#### Copying your Public Block Key

You may be asked to share your public key as a text block. 

Different programs allow this to be done in different ways.

  * Windows - Kleopatra: Right click on key, then hit details, then hit the export button to display the text to copy.
  
  * MacOS - GPG keychain: right click on the key from the list in GPG Keychain, then paste wherever needed.

  * Linux - GPG: right click and hit export. This will display the text block to paste.
  
  