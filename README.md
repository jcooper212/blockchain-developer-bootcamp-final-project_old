# blockchain-developer-bootcamp-final-project
DaoPayTreasury - Management of DAO Payments

# DaoPayTreasury
## Problem Statement
DAOs are in their early phases of development. One of the challenges faced by DAOs is managing their contributor's payments. There are 1000s of individual contributors that make up the DAO. Contributors of the DAO typically work on items for the DAO and then are paid in the native token of the DAO. Currently most DAOs manage this on an adhoc manual basis. This creates reconciliation and transparency issues for the DAO.

## The Solution
DaoPayTreasury solves this by creating a workflow for paying DAO contributors.
DAOPayTreasury specifically deals with the Treasury Payments challenge of DAOs. Most DAOs are governed by underlying workstreams. DAOPayTreasury enables a DAO to create custom workstreams (Business Development, Engineering, Finance, Growth etc). The contributors of a workstream can create a payment request which will then get approved by the workstream lead, and paid by DAO Treasury Owner/Signer.


## User interaction
Main page - Create new workstreams for the DAO
For each workstream - Anyone can create a new payment request
Each payment request needs to be approved and then paid.
It can only be approved by the Workstream Owner - and can be paid by the daoOwner

## contracts
DAOToken - The native token of the DAO
DaoPayTreasury - The main DAOPayTreasury governence contract - this also acts as a factory contract to produce new DAOWorkstreams dynamically requested by the daoOwner
DaoWorkstream - This is a workstream which will hold a list of payment requests for the contributors

## Deployed contract on rinkeby
0x0E570d2E9c9fFECC7B03aCDCc007Aeb38283935A

## ENV VARIABLES (REQUIRED to be set prior to running)
ETH_WALLET_MNEMONIC=...privatekey mnemonic
ETH_INFURA_RINKEBY=...infura_endpoint
ETH_P=...privatekey

## Folder Structure
Here is a list of important folders and their description.

| Folder                       | Description                                            |
|:-----------------------------|:-------------------------------------------------------|
| `components`                 | Common Header & Layout React components                |
| `eth`                        | Common files used across the react pages               |
| `eth.hardhat/contracts`      | Smart contracts                                        |
| `eth.hardhat/test`           | tests                                                  |
| `pages`                      | Main React pages                                       |
| `pages/workstreams`          | Workstream pages                                       |
