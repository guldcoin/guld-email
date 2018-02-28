# Windows

### How to install [GPG4win](https://www.gpg4win.org/) and generate your PGP key.

1. [Download GPG4Win](https://gpg4win.org/download.html)

2. Run Installer and make sure you activate Kleopatra and GPA as a components to install.

3. Generate your Keypair from Kleopatra by going to File -> New Certificate.

4. Choose `Create a personal OpenPGP key pair` from the options. 

5. Create a Key pair corresponding to the email from where you will be sending your signed messages.

6. Save a backup of this key pair into a secure location in your local storage only you control. You will use this to load onto Enigmail.

### Copying your PGP Key
1. Right click on the key from the list in Kleopatra

2. Select `Details` from the dropdown menu

3. Hit `Export` button 

4. Copy Block of text produced.

5. Paste public key block wherever needed.

### Signing with your PGP Key
1. Right click or `Ctrl + C` copy the desired text to your clipboard.

2. Hit the `Clipboard` Menu button on Kleopatra, then `OpenPGP-Sign`

3. Copy the produced output and paste into email or into [Telegram message to gai, the guld ai.](http://guld.chat) - This is how we make transactions on the guld blocktree.

### Encrypting with your PGP Key
1. Right click or `Ctrl + C` copy the text to encrypt to your clipboard.

2. Hit the `Clipboard` Menu button on Kleopatra, then `Encrypt`

3. Use the public key of the people you wish to give permission to read your secret message.

4. Copy the produced output and paste into email or Through any means available to have private conversations.





### Setting up Thunderbird + Enigmail as your email client. *_Recoommended_*

Follow these instructions in order to set up Thunderbird + the Enigmail plugin.

1. [Download Thunderbird Installer](https://www.mozilla.org/en-US/thunderbird/all/)

![](http://guld.email/pgp_installations/windows_gpg4win_5.png)


2. Install and Follow the configuration wizard to set up your email account

![](http://guld.email/pgp_installations/windows_gpg4win_6.png)

3. Under Tools -> Addons, navigate to Extensions and search for `Enigmail` and hit `Add to Thunderbird` 

![](http://guld.email/pgp_installations/windows_gpg4win_7.png)

4. This should automatically pull your key from Kleopatra, if it doesn't, then you must import your key backup from where you saved the export in Kleopatra. 
