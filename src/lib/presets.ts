/**
 * Presets de portfolio de IndexPilot AI
 */

import type { Preset } from './types';

export const PRESETS: Preset[] = [
  {
    name: 'Solana Core',
    desc: 'Mayores protocolos nativos de Solana',
    weights: { SOL: 35, JTO: 15, JUP: 15, PYTH: 10, ORCA: 10, RAY: 15 },
  },
  {
    name: 'IA & Semis (xStocks)',
    desc: 'Exposición tokenizada a la carrera de IA',
    weights: { NVDAx: 35, MSFTx: 20, GOOGLx: 20, METAx: 15, SPYx: 10 },
  },
  {
    name: 'Memecoin Momentum',
    desc: 'Alto riesgo, alta beta — solo cripto Solana',
    weights: { WIF: 40, BONK: 35, SOL: 25 },
  },
  {
    name: 'Balanceado 60/40',
    desc: '60% cripto Solana + 40% xStocks defensivos',
    weights: { SOL: 25, JUP: 15, JTO: 10, RAY: 10, SPYx: 20, AAPLx: 10, MSFTx: 10 },
  },
];
