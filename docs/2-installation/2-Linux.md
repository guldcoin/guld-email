## Linux

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

4. Go to Preferences -> Security tab. copy your PGP Key ID, obtained from GPA

5. Disable S/MIME Signing, hit ok.

6. You are ready to sign and encrypt your emails from Evolution.


#### Thunderbird + Enigmail

**not recommended**

How to install Thunderbird and Enigmail, then configure your PGP key.

1. [Download Thunderbird](https://www.mozilla.org/en-US/thunderbird/)

2. Open a Terminal and go to your home directory: `cd ~`

3. Extract the contents of the downloaded file:` tar xjf thunderbird-*.tar.bz2`

4. Run the thunderbird script in the thunderbird folder: `~/thunderbird/thunderbird`

5. Follow the configuration wizard to set up your email account.

6. Under Tools -> Addons, navigate to Extensions and search for `Enigmail`

7. Restart Thunderbird, and Enigmail should import your GPA Keys automatically. 

8. If your Keys are not loaded from GPA, load key backup from Enigmail settings in Hamburguer menu in THunderbird. 