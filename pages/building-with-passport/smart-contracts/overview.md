# Onchain Passports

Passports onchain functionality enables users to store their verified Stamps and scores onchain, and makes this data available via smart contracts.

We also discuss the onchain use cases in the following resources:
* [Tutorial: Building an app using onchain Passport data](../tutorials/integrating-onchain-stamp-data)
* [Reference: Learn about the available smart contracts and typical onchain developer flow](../contract-reference)

## Why onchain?

In addition to accessing Gitcoin Passport data offchain using the Passport API, Gitcoin has also released a smart contract stack that enables developers to access Passport score and Stamp data directly from the blockchain. 

This onchain Passport data enables partners that want to maintain a decentralized, permissionless backend to engage directly with our smart contracts instead of storing and processing Passport data pulled from our API. 

## Why not onchain?

Minting Passports onchain is an optional feature for users. Not all users will add their Passports onchain. Also, onchain Passports may not reflect the most up-to-date data for users, since the onchain mint is point-in-time and users could verify more Stamps or Stamps could expire (note that onchain attestations expire). 

## Onchain Passport

Passport data can be converted into onchain attestations that are stored and engaged with via the [Ethereum Attestation Service (EAS)](https://attest.sh/) or [Verax](https://ver.ax/), which make that data accessible to developers via smart contracts. This enables quadratic funding, rewards, governance, access control, and other programs to exist entirely onchain with their Passport integration. 

A simplified onchain Passport data flow follows this process:
1. A user decides to [mint their Passport onchain](https://support.gitcoin.co/gitcoin-knowledge-base/gitcoin-passport/moving-your-stamps-onchain) to one of the available networks via the Passport App.
2. Passport creates a [Stamp (Passport)](https://optimism.easscan.org/schema/view/0xd7b8c4ffa4c9fd1ecb3f6db8201e916a8d7dba11f161c1b0b5ccf44ceb8e2a39) and [score](https://optimism.easscan.org/schema/view/0x6ab5d34260fca0cfcf0e76e96d439cace6aa7c3c019d7c4580ed52c6845e9c89) attestation, and mints them onchain to EAS and other attestation registries, depending on which network they choose.
3. A developer utilizes our smart contract stack and users’ wallet addresses to request the Passport data from these onchain attestation registries.
4. The developer uses this Passport data in their web3 programs to satisfy their [use case](https://docs.passport.gitcoin.co/overview/use-cases).

Of course, there are some additional complexities to this, including Stamp expirations. 

## Available networks

This onchain smart contract stack is currently deployed to the following networks:

Mainnet
* Optimism Mainnet 
* Linea

Testnet
* Optimism Sepolia
* Base Goerli
* Linea Goerli

Please note that you can explore our testnet functionality by visiting https://passport.gitcoin.co/#/dashboard/testing. There, you will be able to add your Passport to one of the supported testnet networks using the "Bring Passport onchain" button at the bottom of the testing app. 

## Available registries

Attestations will be minted to one or two different registries, depending on which network the user chose to push their Passport.

* All onchain Passports will be minted to EAS, regardless of which network the user selects. 
* If the user selects Linea or Linea Goerli, the full attestation will be written to EAS, and a partial attestation will be written to Verax. 

## Why isn't Passport onchain by default?

Onchain Passports are entirely opt-in. Users can still use Gitcoin Passport without migrating your data onchain. 

While onchain Passports are in their infancy, the offchain Passport is useful as a single source. The offchain infrastructure is also perfectly sufficient for many use cases.

## Next steps

Learn more about onchain Passports:
* [Tutorial](/integrating-onchain-stamp-data)
* [Contract reference](/contract-reference)
* [Attestation schema](/attestation-schema)