## Transactions

### Registration

**Registering a Username on guld**

To register a transaction on the guld, a pgp signed email must be sent from a guld account with the following transaction format, changing Username for your desired username:

Registration
; requires only sufficient guld and an open name

2018/27/01 * individual registration
    Username:Assets   -1 guld
    Username:Expenses:guld:register   1 guld
    guld:Liabilities   1 guld
    guld:Income:register:individual:Username   -1 guld

**How to register your guld username?**
In order to reserve your guld User name and start interacting with the network and sign transactions on the Blocktree, you will need to configure your email with a PGP key pair. The debtor in the transaction to be signed uses his private key to sign the email containing the template below replacing 'Username' with your desired username. You will require to send 1 guld to the ledger address 'guld:Income:register:individual' and the name you use must be available.

### Transfers
**How to send Transfers?**

The way that transactions are logged into the guld Blocktree ledger is by sending the creditor or recipient, a signed email with the transaction template below, and a PGP signature identifying the integrity of the sender's message.

A sample transaction email looks like this:

 ; requires signature of the debtor
2017/12/01 * transfer
    Sender:Assets   -x guld
    Sender:Expenses   x guld
    Receiver:Assets   x guld
    Receiver:Income   -x guld


You may also register groups, like companies and institutions, by sending a signed email with the following template:

; m = number of members
2017/12/01 * group registration
    Username:Assets   -m guld
    Username:Expenses:guld:register   m guld
    guld:Liabilities   m guld
    guld:Income:register:group:groupname   -m guld


To securely register trusted devices into the guld blocktree shared filesystem, you must send a transactionto the account 'guld:Income:register:device:Username:devicename' using the template below:

2017/12/01 * device registration
    Username:Assets   -0.1 guld
    Username:Expenses:guld:register   0.1 guld
    guld:Liabilities   0.1 guld
    guld:Income:register:device:Username:devicename   -0.1 guld
