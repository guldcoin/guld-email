## guld.email and PGP FAQ

## Intro to PGP

### Why Guld uses PGP and Email? 

Guld works through PGP and secure email. Because of this privacy standards, only desktop clients can be used to send and receive guld.

### What is PGP?

PGP (Pretty Good Privacy) encryption is one of the best ways to protect your privacy and prove your identity online.

PGP works through Private and Public key Pairings. To use PGP the user must create 2 keys.

You can Sign a file, proving your identity attached to it, or encrypt a file with someone else's public key to ensure only the recipient.

### How does guld.email work?

1. Hit the 'send' button to prepare a send transaction. 
2. Fill in the the 'sender', 'receiver' and 'amount' fields, then hit generate. 
3. This will open your email client and attach the transaction file. If setup with PGP encryption, send as inline encrypted message, to public@iramiller.com 



#How does Private, Public Key Pair work?

The private key you create, along the public key it generates, are your two main tools to safely identify yourself across unsafe communication platforms.

The private key allows you to sign and encrypt messages and identify you (or whoever holds it) as the true sender of the signed message, while the public key, if sent to someone who wants to contact you, or received from someone you want to contact, allows you to encode messages so only those specific people can decode the contents.

PGP encryption allows us to securely identify ownership of accounts through secure keys.

On top of this, your key access as well can be protected with a password any time you use it.

#### PGP Key generation

Keys should use RSA for both signing and encrypting.

The RSA key should be at least 2048 bits length, but preferably 4096 bits.

Set your key with a Expiration date, in case you lose access to your keys in the future, your identity will not be on the lose.

#### Key Storage

Do not share your private key with anyone. You must guard your private key very carefully.

You may share and publish your Public key, for it can only be used to encode messages that only you can open.

Hardware based PGP Keys, like Yubico Keys, are the highest standard of identity security. We encourage you use them.
