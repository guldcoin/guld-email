## MacOS

#### How to install [GPGSuite](https://gpgtools.org/gpgsuite.html) and generate your PGP key.


1. [Download GPGSuite](https://gpgtools.org/gpgsuite.html)

2. Install the file in the DMG.

3. [Follow The steps](https://www.youtube.com/watch?v=P7xQVZN1S6Q)

4. Choose `Create a personal OpenPGP key pair` from the options.  

5. Launch GPG Keychain

6. Create a Key pair corresponding to the email from where you will be sending your signed messages.

7. Save a backup of this key pair into a secure location in your local storage only you control. You will use this to load onto Enigmail.

## Copying your PGP Key

1. Right click on the key from the list in GPG Keychain, 

2. Select `copy` from the dropdown menu. 

3. Paste public key block wherever needed.


## Signing with your PGP Key

1. Open up Textedit.app and paste the text you wish to Sign.

2. Highlight the message to be signed.

3. Right Click and click `Services -> Sign with OpenPGP on new window`

4. Copy the produced output and paste into email or into [Telegram message to gai, the guld ai.](http://guld.chat)  - This is how we make transactions on the guld blocktree.

## Encrypting with your PGP Key

1. Open up Textedit.app and paste the text you wish to Encrypt.

2. Highlight the message to be encrypted.

3. Right Click and click `Services -> Encrypt with OpenPGP on new window`

4. Use the public key of the people you wish to give permission to read your secret message.

5. Copy the produced output and paste into email or Through any means available to have private conversations.



## Setting up Thunderbird + Enigmail as your email client. **_Recommended_**


1. [Download Thunderbird Installer](https://www.mozilla.org/en-US/thunderbird/all/)

![](http://guld.email/pgp_installations/windows_gpg4win_5.png)

2. Install and Follow the configuration wizard to set up your email account

![](http://guld.email/pgp_installations/windows_gpg4win_6.png)

3. Under Tools -> Addons, navigate to Extensions and search for `Enigmail` and hit `Add to Thunderbird` 

![](http://guld.email/pgp_installations/windows_gpg4win_7.png)

4. This should automatically pull your key from GPG Keychain, if it doesn't, then you must import your key backup from where you saved the export in GPG Keychain. 


## Setting up mail.app as your email client. **_Not Recommended_** 

1. [GPGMail is included within GPG suite, and you can encrypt, sign and decrypt email right on mail.app](https://youtu.be/P7xQVZN1S6Q?t=84)

