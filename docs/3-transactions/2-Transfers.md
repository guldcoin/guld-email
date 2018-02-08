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
