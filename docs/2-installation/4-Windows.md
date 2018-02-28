## Windows

#### GPG4win

How to install [GPG4win](https://www.gpg4win.org/) and generate your PGP key.

1. [Download GPG4Win](https://gpg4win.org/download.html)

2. Run Installer and make sure you activate Kleopatra and GPA as a components to install.

3. Generate your Keypair from Kleopatra by going to File -> New Certificate.

4. Choose `Create a personal OpenPGP key pair` from the options. 

5. Create a Key pair corresponding to the email from where you will be sending your signed messages.

6. Save a backup of this key pair into a secure location in your local storage only you control. You will use this to load onto Enigmail.

#### Thunderbird + Enigmail

Follow these instructions in order to set up Thunderbird + the Enigmail plugin.

1. [Download Thunderbird Installer](https://www.mozilla.org/en-US/thunderbird/all/)

![](pgp_installations/windows_gpg4win_5.png)


2. Install and Follow the configuration wizard to set up your email account

![](pgp_installations/windows_gpg4win_6.png)

3. Under Tools -> Addons, navigate to Extensions and search for `Enigmail` and hit `Add to Thunderbird` 

![](pgp_installations/windows_gpg4win_7.png)

4. This should automatically pull your key from Kleopatra, if it doesn't, then you must import your key backup from where you saved the export in Kleopatra. 
