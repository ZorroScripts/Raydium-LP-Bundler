"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RayLiqPoolv4 = exports.walletconn = exports.payer = exports.wallet = exports.tokenAddress = exports.marketId = exports.tipAcct = exports.connection = exports.rpc = void 0;
const web3_js_1 = require("@solana/web3.js");
const bs58_1 = __importDefault(require("bs58"));
const anchor_1 = require("@project-serum/anchor");
exports.rpc = ''; // ENTER YOUR RPC
exports.connection = new web3_js_1.Connection(exports.rpc, {
    commitment: 'confirmed',
});
exports.tipAcct = new web3_js_1.PublicKey('Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY');
exports.marketId = ''; // TOKEN MARKET ID
exports.tokenAddress = ''; // TOKEN MINT ADDRESS AKA CA
exports.wallet = web3_js_1.Keypair.fromSecretKey(bs58_1.default.decode('' // PRIV KEY OF POOL CREATOR.
));
exports.payer = web3_js_1.Keypair.fromSecretKey(bs58_1.default.decode('' // PRIV KEY OF FEE PAYER.
));
exports.walletconn = new anchor_1.Wallet(exports.wallet);
exports.RayLiqPoolv4 = new web3_js_1.PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8');
