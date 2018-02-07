# Balboa Coin

__DRAFT__

#### Authors

 * _Aldo Antinori_
 * _Ira Miller <public@iramiller.com>_

#### License

_CC-BY-4.0_

### PURPOSE

This paper is the digital dollar section of the [Panama Glass](pty.glass) Vision Plan. The authors are not endorsing it as a political platform, but simply proposing a possible path to be considered. This document is “living,” being edited prior to and during the Panama Glass summit by the organizers, speakers and student helpers.

## ABSTRACT

Balboa Coin (abbreviated [XBC] [1] ) is a digital token that captures the value of trade infrastructure like canals, roads, and ports. Though the long-term plan is to abstract and expand to cover a larger region, this paper will propose an initial model with only Panama and the Panama Canal.

By implementing a digital token for Panama Canal access, the canal administrators could save tens of millions of dollars a year in fees, reinvest a large portion of profits, and pay dividends to every Panamanian. Panamanians would receive a Universal Basic Income and universal banking services on their cell phones. Balboa Coin would allow the spender a discount and other advantages when paying for Canal access, incentivizing use by shipping companies.

## Implementation

### Key Distribution

Each Panamanian Citizen would be required to register an official [RSA] [2] signing key with the Tribunal Electoral. Telecoms could also be delegated as agents for this activity, requiring a unique cedula number for each Balboa Coin enabled sim card.

This is similar to the way that Estonia issues digital IDs as part of their [e-residency program] [3]. Like Estonia these keys could be embedded in an [openPGP] [4] compliant chip inside the cedula, or a separate chip could be made in smart card, USB, or sim card form factor.

Estonia was less than diligent and used old, [non-standard implementations] [5] in their cards. Specifically, their RSA keys were only 1024 bits, whereas we would recommend 4096 bit keys. Exacerbated by this poor implementation, [a weakness] [6] was identified in 2017. This did not instantly break every key, but required Estonia to freeze the digital signing system.

Since the chips are physically embedded in the ID cards, re-issuing keys means re-issuing every ID. Panama should learn from this mistake by utilizing a separate key which is uniquely tied to a cedula number, but not actually embedded in the card. Such a system would allow cards to be reprogrammed and reprovisioned with a simple visit to the issuing telecom or the Tribunal Electoral.

### Canal Payments

Canal payments are currently processed through the banking system, with multi-day settlement times, and significant fees. Balboa Coin payments would be cleared in seconds and have zero fees. Naively assuming the bank fees are 1%, savings of $10 million could be achieved for every $1 billion in canal payments.

### User Applications

Two applications would need to be developed for the payments to flow. The first would be a wallet app with which all users could send and receive Balboa Coins. The second would be a canal admin application, for issuing invoices and running reports.

The Balboa Coin ledger, and governing documents would be immutably stored using the free and open source [guld filesystem] [7]. This is not the only distributed hash tree that could be used, as other countries are building off of Ethereum and other platforms. These are not, however, compatible with digital identity signing schemes like RSA, and are not able to assign custom fee schemes due to scaling limitations.

### Manual Fallback

TODO: Describe a method where users without cell phones or general access to digital networks could access their accounts. Could be through a government window or agent like a bank.


## Finances
### Costs

By utilizing open source and mature technologies, Balboa Coin could be executed at a very low cost, on the order of $40 million to set up the whole country, or roughly $10 per person.

| Item| Cost Estimate |
| openPGP sim cards| $30 million|
| Software Development | $5 million|
| User Onboarding| $5 million|

### openPGP sim cards

These special sim cards will turn each Panamanian phone into their digital cedula, and Canal interface. This will allow all Panamanians with access to a cell phone and a cedula number access to the Balboa Coin system. Since there are more cell phones than people in Panama, this should cover the entire population.

The estimate of $30 million is based on a cost of $7.5/sim. In Panama $2-3/card is standard, but we’d have to add openPGP support and formally verify both the | hardware and firmware.

### Software Development

A wallet app for people, and a separate Canal admin app would be needed.

The wallet app could look like any online banking or cryptocurrency wallet. Using open source standards, multiple wallets could even be developed, to reach different users. For example, the banking app [Nequi] [8] and blockchain wallet [jaxx] [9] could both be integrated, and could send Balboa Coins to each other.

On the management side, there are lots of enterprise users of blockchains to learn from. Dubai and Russia have both recently expressed plans to issue digital dollars (actually dirhams and rubles) on the Ethereum blockchain.

The Central Bank of Barbados issued a digital dollar on the Bitcoin blockchain in 2015 with the help of Bitt. Bitt recently published a plan for [Central Bank Multilateral Clearing Facility] [10]. By issuing a digital dollar that meets cryptographic technology standards, Panama would be able to enter into bilateral and multilateral exchange agreements with direct, real-time clearing of transactions. No central bank is actually needed.

All Balboa Coin users would also be able to access international peer to peer payments and exchange with counterparties in Barbados, Dubai, Estonia and other digital dollar standard countries.

### User Onboarding
A lot of education will need to be done, as well as the logistics of getting everyone’s digital keys registered. Users could either be onboarded through the Tribunal Electoral their telecoms. The cost of $5 million is in need of further analysis with more data from experts.

### Revenues
#### Year 1

In the first year, the Panama Canal Authority continues to operate the canal as usual. At the end of the accounting year, if any profits have been made, those profits will be put in the Balboa Coin Trust, and 1 XBC coin will be issued for each $1 deposited. These new XBC coins would be evenly distributed to every Panamanian citizen with a cedula, effectively paying them a dividend as owners of the Canal.

For 2017 the canal revenues were [$1.909 billion] [11], so we could expect 1.909 billion XBC to be issued at the end of year 1. Since there are [3.753 million Panamanians] [12], each would receive 508.65 XBC. Each of these XBC would be backed by $1 which would be held in the Balboa Coin Trust. This represents 1.2 months at minimum wage of $416.

#### Year 2  

In the second year, the Panama Canal Authority would add XBC as an additional payment option. If a shipping company is able to acquire XBC on the open market, buying from Panamanians, they will be able to make faster, preferred payments for the Canal.

Meanwhile, the Balboa Coin Trust would have $1.909 billion to invest. Obviously this trust must be managed conservatively, investing in stable assets like gold and bonds. Strictly no Crypto Kitties!

If a conservative yield of 3%/year is achieved, a profit of $57.27 million would be realized on $1.909 billion. This exceeds the estimated setup costs for the program, paying it off completely in year two.

#### Years 3+

Over time the Balboa Coin Trust would accumulate a larger surplus, rolling over any interest payments or bond yields on the principle and adding profits.

#### Year 12

Public debt was $23.466 billion in 2017. Naively assuming public debt and canal profits stay relatively equal, the Balboa Coin Trust will have one dollar for each dollar of public debt by year 12.

### Government Budget

Theoretically, the government budget impact could be neutral, if 100% of the Balboa Coin Trust was lent to them as bonds at zero interest. In the 3% bond yield scenario described above, that 3% would be paid by the government to the Balboa Coin Trust, another neutral action for the public sector as a whole.

### Balboa Coin Trust

The Balboa Coin Trust would operate with a strict $1:XBC mandate. It would be required to keep all of its accounting records in the chosen distributed hash tree, and would do a full audit once a year when the new dividend is issued.

## Social Impact
### Universal Basic Income

“Universal Basic Income (UBI) can be described as a form of unconditional transfer payment to the entirety of the populace, without means testing or work requirements. It is an idea that is garnering heightened interest in debates across the political spectrum as a possible method of dealing with those prognostications that caution against a dire future of extreme inequality driven by both socioeconomic and technological factors.” - [Universal Basic Income: A Review] [14]

### Financial Services for the Unbanked

Every Panamanian would gain access to basic financial services using the Balboa Coin wallet application. In 2014, the World Bank estimated that only [44% of Panamanian adults had bank accounts] [15], so this would more than double access to financial services.


Furthermore, the financial services offered by Balboa Coin would be zero-cost. Compare to bank and money transmitter fees of up to 10%, which disproportionately impact the poor.

## Glossary

 * __Distributed hash tree__ - An immutable data structure that allows perfect triple entry accounting, like a blockchain or blocktree.
 * __Balboa Coin__ - A token backed by US$1, which can be redeemed for passage of the Panama Canal.
 * __XBC__ - The ISO-compliant currency code for Balboa Coin.

[1]: https://www.iso.org/iso-4217-currency-codes.html "ISO 4217 requires X before non-country codes, like XAU for gold"

[2]: http://people.csail.mit.edu/rivest/Rsapaper.pdf "R.L. Rivest, A. Shamir, and L. Adleman “A Method for Obtaining Digital Signatures and Public-Key Cryptosystems”, 1978"

[3]: https://e-resident.gov.ee/

[4]: https://tools.ietf.org/html/rfc4880 "RFC 4880 “OpenPGP Message Format”"

[5]: https://csrc.nist.gov/publications/detail/sp/800-131a/archive/2011-01-13 "NIST SP800-131A “Transitions: Recommendation for Transitioning the Use of Cryptographic Algorithms and Key Lengths”, 2011"

[6]: https://crocs.fi.muni.cz/_media/public/papers/nemec_roca_ccs17_preprint.pdf "Matus Nemec, Marek Sys, Petr Svenda, Dusan Klinec, Vashek Matyas “The Return of Coppersmith’s Attack: Practical Factorization of Widely Used RSA Moduli”, 2017"

[7]: https://guld.io/docs/guldFS-Specification.pdf "Ira Miller “Guld Filesystem Specification”, 2017"

[8]: https://www.nequi.com.pa "Nequi banking app"

[9]: https://jaxx.io "Jaxx digital currency wallet"

[10]: https://www.bitt.com/solutions/central-banks "Roland Haggins, Oliver Gale, Gabriel Abed, Simon Chantry “Central Bank Digital Currency Issuance”"

[11]: https://www.aguaclara.consulting/s/1-Informe-Economico-Panama-kpg6.pdf "Aristides Hernandez, Eloy Fisher “ECONOMIC REPORT OF PANAMA: Global and Regional Environment”, Jan. 2018, pp. 9"

[12]: https://www.cia.gov/library/publications/the-world-factbook/geos/pm.html "CIA World Factbook (July 2017 est.)"

[13]: https://www.aguaclara.consulting/s/1-Informe-Economico-Panama-kpg6.pdf "Aristides Hernandez, Eloy Fisher “ECONOMIC REPORT OF PANAMA: Global and Regional Environment”, Jan. 2018, pp. 11"

[14]: https://ssrn.com/abstract=3013634 "Chohan, Usman, Universal Basic Income: A Review (August 4, 2017)."

[15]: http://documents.worldbank.org/curated/en/187761468179367706/pdf/WPS7255.pdf "Asli Demirguc-Kunt, Leora Klapper, Dorothe Singer, Peter Van Oudheusden “The Global Findex Database”, 2014"
