# blockchain-developer-bootcamp-final-project
Consensys bootcamp project

# FlashBots
We will be building out flashbot smart contract which will arbitrage across 2 exchanges (will be expanded to more in future phases)
We will use Flashloans to secure capital for the arbitrage


## STRATEGY

The Strategy will be the following:
1. Borrow a stable coin such as USDC or DAI from a Flashloan contract. Say we borrow 6000 DAI
2. Find out concurrently prices at 2 exchanges (Say Uniswap and Sushiswap) for the price of a token. Say ETH is priced at 3000 at UNI && ETH is priced at  3200 at Sushiswap
3. We buy 1 ETH at 3000 @ Uniswap
4. We sell 1 ETH at 3200 @ Sushiswap
5. We payback the Flashloan of 3000 DAI & keep the profits of (200 = 3200 - 3000)


## User interaction
- The user would enter certain parameters on the screen for the FlashBots
- The user would then click RUN to start the bot
- The screen would be refreshed with updates on the Flatbot statistics
