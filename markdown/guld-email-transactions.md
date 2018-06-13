## Transactions

Guld email transactions are like all other [guld](https://guld.io) transactions, except for one additional required tag: `timestamp`, which must be set to the epoch timestamp at the time of signing. The timestamp number must be ascending in transactions sequential in the blocktree, and no user may submit two transactions with the same timestamp.

### Registration

**Registering a Username on guld**

In order to reserve your guld username and start interacting with the network, you will need to configure your email with a PGP key pair. Each transaction signer uses their private key to sign the email matching one of the templates below. Replace `USERNAME` with your desired username, and `SENDER` with the member who is inviting you. You will require to repay `1 guld` to the ledger address `guld:Income:register:individual:USERNAME`. The name you use must be alphanumeric, and available.

##### Step 1

Receive at least 1 guld to your `USERNAME` from an existing member. Before sending this member must recognize your PGP key.

```
2018/01/27 * transfer
    ; timestamp: 1517242632
    SENDER:Assets   -1 guld
    SENDER:Expenses   1 guld
    USERNAME:Assets   1 guld
    USERNAME:Income   -1 guld
```

The transaction must be signed and hashed into the guld branch before moving on to step 2.

##### Step 2

To register a transaction on the guld, a pgp signed email must be sent to a guld email node with the following transaction format, changing USERNAME for your desired username:

```
2018/01/27 * individual registration
    ; timestamp: 1517242682
    USERNAME:Assets   -1 guld
    USERNAME:Expenses:guld:register   1 guld
    guld:Liabilities   1 guld
    guld:Income:register:individual:USERNAME   -1 guld
```

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
