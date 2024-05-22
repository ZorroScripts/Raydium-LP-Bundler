
# Solana Multi Bundler

Welcome to the Solana Multi Bundler project! This README will guide you through the setup and usage of the project.

## 🚀 Overview
The Solana Multi Bundler allows users to bundle multiple transactions on the Solana blockchain, including creating liquidity pools and managing token sales. This tool is designed for advanced users who need to perform complex transactions efficiently.

## 📝 Prerequisites
- **Linux Ubuntu VPS:** You need to purchase a Linux Ubuntu VPS. Contact support to buy one.
- **RPC Endpoint:** Rent an RPC endpoint. Contact support for assistance.
- **Solana Wallets:** Create two wallets:
  - Deployer Wallet (for creating the pool)
  - Fee Payer Wallet (for paying fees and snipe)
- **Token and Market ID:** Obtain the token address and market ID.

## 🔧 Setup Instructions

### Step 1: Connect to Your VPS
1. Purchase a Linux Ubuntu VPS.
2. Connect to your VPS using VS Code. You can use SSH for this purpose.
3. Install node.js and Python on your VPS.

### Step 2: Configure `config.js`
Fill in the lines that are marked down.
```bash
// ENTER YOUR RPC
// TOKEN MARKET ID
// TOKEN MINT ADDRESS AKA CA
// PRIV KEY OF POOL CREATOR
// PRIV KEY OF FEE PAYER!
```

### Step 3: Running the Project
To run the project, navigate to your project directory and execute the following command:
```bash
npm i
```
```bash
node main.js
```
## ⚙️ Script Functions

### 1. Create Keypairs
Generate keypairs if needed. Ensure they don't contain any SOL. Options:
- Create: `c`
- Use existing: `u`

This step is not required for every launch but only when you want to create new keypairs.

### 2. Pre Launch Checklist
Follow steps 2-6 sequentially.
- After each step, check the Bundle ID to ensure it lands. If it doesn't, redo the step.
- Check bundle ID here: [Jito Explorer](https://explorer.jito.wtf/)

### 3. Create Pool
To create a pool, spam the function as sometimes it might not land.

### 4. Sell Features
Sell all keypairs at once.

### 5. Sell Small Percentages of the Supply on Demand
This involves sending a percentage of every keypair's token balance to the fee payers and selling it in one bundle.

### 6. LP Remove
If you don't burn your LP, it will be removed automatically.

## 🛠️ Support
For any issues or assistance, contact support. They can help you with the entire setup process.

## 📞 Contact
- **Telegram:** [@support_telegram](https://t.me/ZorroScripts)

Enjoy bundling with Solana Multi Bundler! 🚀
