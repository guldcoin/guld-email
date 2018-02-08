## Registration

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