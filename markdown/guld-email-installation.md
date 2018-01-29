## Installation

***Setting up your PGP Identity. (Creating your first keys)***

__TODO: Screenshots for Installation Instructions__

While PGP can work as a standalone technology, there are many popular, stable email clients and plugins.

### Linux

**Ubuntu and Gentoo minimum set for all instructions**

#### GPG

How to install GPG on linux systems. How to generate your PGP key.

1.[Download GnuPG](https://www.gnupg.org/download/index.html) and all the required libraries listed under it on Terminal.

2.[Download GPA] (https://www.gnupg.org/download/index.html) and run it.

3.Create your Key pair for the email account you will use to interact with guld.email. Set an expiration date for the key.

4.Back up your Key to a secure location and set up with password.



#### Evolution

**recommended**


How to install Evolution and configure your PGP key.

1. Download and install Evolution by running the following commands in Terminal 
```sudo add-apt-repository ppa:gnome3-team/gnome3-staging
sudo apt-get update
sudo apt-get install evolution'
```

2. Follow the configuration wizard to set up your email account. 

3. Your PGP keys should be loaded up from PGA Automatically.



#### Thunderbird + Enigmail

**not recommended**

How to install Thunderbird and Enigmail, then configure your PGP key.

1. [Download Thunderbird](https://www.mozilla.org/en-US/thunderbird/)

2. Open a Terminal and go to your home directory: `cd ~`

3. Extract the contents of the downloaded file:` tar xjf thunderbird-*.tar.bz2`

4. Run the thunderbird script in the thunderbird folder: `~/thunderbird/thunderbird`

5. Follow the configuration wizard to set up your email account.

6. Under Tools -> Addons, navigate to Extensions and search for `Enigmail`



#### MacOS

##### GPGSuite

How to install [GPGSuite](https://gpgtools.org/gpgsuite.html) and generate your PGP key.


1. [Download GPGSuite](https://gpgtools.org/gpgsuite.html)

2. Install DMG.

3. Launch GPG Keychain 

4. 

##### Thunderbird + Enigmail


1. [Download Thunderbird Installer](https://www.mozilla.org/en-US/thunderbird/all/)

2. Install and Follow the configuration wizard to set up your email account

3. Under Tools -> Addons, navigate to Extensions and search for `Enigmail`




**recommended**

How to install Thunderbird and Enigmail, then configure your PGP key.

##### Mail.app

**not recommended**

How to configure your PGP key for use with Mail.app.

#### Windows

##### GPG4win

How to install [GPG4win](https://www.gpg4win.org/) and generate your PGP key.

1. [Download GPG4Win](https://gpg4win.org/download.html)

2. Run Installer and make sure you activate Kleopatra and GPA as a components to install.

3. Generate your Keypair from Kleopatra by going to File -> New Certificate.

4. Choose `Create a personal OpenPGP key pair` from the options

5. 



##### Thunderbird + Enigmail

Follow these instructions in order to set up Thunderbird + the Enigmail plugin.
