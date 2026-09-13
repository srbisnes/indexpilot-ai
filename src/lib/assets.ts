/**
 * Universo de activos de IndexPilot AI
 * Crypto nativo Solana + xStocks tokenizados
 */

import type { Asset } from './types';

export const ASSETS: Asset[] = [
  { sym: 'SOL',    name: 'Solana',              type: 'crypto', tags: ['solana', 'layer1', 'defi'],           base: 178.40,   color: '#9945FF' },
  { sym: 'JUP',    name: 'Jupiter',             type: 'crypto', tags: ['solana', 'defi', 'dex'],              base: 0.92,     color: '#9945FF' },
  { sym: 'JTO',    name: 'Jito',                type: 'crypto', tags: ['solana', 'defi', 'staking'],          base: 2.85,     color: '#9945FF' },
  { sym: 'PYTH',   name: 'Pyth Network',        type: 'crypto', tags: ['solana', 'defi', 'oracle'],           base: 0.31,     color: '#9945FF' },
  { sym: 'ORCA',   name: 'Orca',                type: 'crypto', tags: ['solana', 'defi', 'dex'],              base: 3.60,     color: '#9945FF' },
  { sym: 'RAY',    name: 'Raydium',             type: 'crypto', tags: ['solana', 'defi', 'dex'],              base: 4.10,     color: '#9945FF' },
  { sym: 'WIF',    name: 'dogwifhat',           type: 'crypto', tags: ['solana', 'meme'],                     base: 1.85,     color: '#9945FF' },
  { sym: 'BONK',   name: 'Bonk',                type: 'crypto', tags: ['solana', 'meme'],                     base: 0.000021, color: '#9945FF' },
  { sym: 'NVDAx',  name: 'NVIDIA (xStock)',     type: 'xstock', tags: ['tech', 'ai', 'semis', 'growth'],      base: 132.50,   color: '#14F195' },
  { sym: 'MSFTx',  name: 'Microsoft (xStock)',  type: 'xstock', tags: ['tech', 'ai', 'stable', 'growth'],     base: 428.10,   color: '#14F195' },
  { sym: 'AAPLx',  name: 'Apple (xStock)',      type: 'xstock', tags: ['tech', 'stable', 'growth'],           base: 224.30,   color: '#14F195' },
  { sym: 'GOOGLx', name: 'Alphabet (xStock)',   type: 'xstock', tags: ['tech', 'ai', 'growth'],               base: 172.90,   color: '#14F195' },
  { sym: 'METAx',  name: 'Meta (xStock)',       type: 'xstock', tags: ['tech', 'ai', 'growth'],               base: 562.00,   color: '#14F195' },
  { sym: 'AMZNx',  name: 'Amazon (xStock)',     type: 'xstock', tags: ['tech', 'growth'],                     base: 186.70,   color: '#14F195' },
  { sym: 'SPYx',   name: 'S&P 500 (xStock)',    type: 'xstock', tags: ['balanced', 'stable', 'dividend'],     base: 568.20,   color: '#14F195' },
  { sym: 'QQQx',   name: 'Nasdaq 100 (xStock)', type: 'xstock', tags: ['tech', 'growth'],                     base: 487.40,   color: '#14F195' },
  { sym: 'COINx',  name: 'Coinbase (xStock)',   type: 'xstock', tags: ['tech', 'solana', 'growth'],           base: 224.00,   color: '#14F195' },
];

export function findAsset(sym: string): Asset | undefined {
  return ASSETS.find((a) => a.sym === sym);
}
