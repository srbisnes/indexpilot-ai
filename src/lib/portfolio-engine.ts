/**
 * Motor de generación de portfolios de IndexPilot AI
 * Matching por keywords + scoring de categorías + construcción de pesos
 */

import { ASSETS, findAsset } from './assets';
import { PRESETS } from './presets';
import { mulberry32, seedFromString } from './prng';
import type { Portfolio, PortfolioRow } from './types';

type CategoryScores = Record<string, number>;

function scorePromptCategories(text: string): CategoryScores {
  const t = (text || '').toLowerCase();
  const scores: CategoryScores = {
    solana: 0,
    tech: 0,
    ai: 0,
    semis: 0,
    meme: 0,
    stable: 0,
    growth: 0,
    dividend: 0,
    defi: 0,
    balanced: 0,
  };

  const map: Record<string, string[]> = {
    solana: ['solana', 'sol ', 'ecosistema solana', 'on-chain'],
    ai: ['ia', 'inteligencia artificial', 'ai', 'artificial intelligence'],
    semis: ['semiconductor', 'semis', 'chips', 'nvidia'],
    tech: ['tech', 'tecnolog', 'nasdaq'],
    meme: ['meme', 'degen', 'riesgo alto', 'alto riesgo', 'especulativ'],
    stable: ['estable', 'defensiv', 'conservador', 'bajo riesgo'],
    dividend: ['dividendo', 'renta', 'ingreso pasivo'],
    growth: ['crecimiento', 'growth'],
    defi: ['defi', 'staking', 'yield', 'dex'],
    balanced: ['balancead', 'diversificad', 'mixto', '60/40'],
  };

  for (const cat of Object.keys(map)) {
    map[cat].forEach((kw) => {
      if (t.includes(kw)) scores[cat] += 1;
    });
  }

  return scores;
}

export function buildFromWeights(
  weights: Record<string, number>,
  capital: number,
  aiNote: string
): Portfolio {
  const symbols = Object.keys(weights);
  const totalW = Object.values(weights).reduce((a, b) => a + b, 0);

  const rows: PortfolioRow[] = symbols
    .map((sym) => {
      const asset = findAsset(sym);
      if (!asset) throw new Error(`Asset not found: ${sym}`);

      const pct = (weights[sym] / totalW) * 100;
      const amount = capital * (pct / 100);
      const seed = seedFromString(sym + '::change');
      const rnd = mulberry32(seed);
      const change24h = rnd() * 10 - 4.5;
      const price = asset.base * (1 + (rnd() - 0.5) * 0.02);

      return {
        ...asset,
        pct,
        amount,
        change24h,
        price,
        units: amount / price,
      };
    })
    .sort((a, b) => b.pct - a.pct);

  return { rows, aiNote, capital };
}

export function generatePortfolio(promptText: string, capital: number): Portfolio {
  const scores = scorePromptCategories(promptText || '');
  const totalSignal = Object.values(scores).reduce((a, b) => a + b, 0);

  if (scores.meme >= 1 && scores.meme >= scores.ai && scores.meme >= scores.tech) {
    return buildFromWeights(
      PRESETS[2].weights,
      capital,
      'Detecté intención de alto riesgo / momentum en tu prompt, así que prioricé memecoins nativos de Solana con alta beta.'
    );
  }

  if (scores.ai + scores.semis >= 1 && scores.ai + scores.semis >= scores.solana) {
    return buildFromWeights(
      PRESETS[1].weights,
      capital,
      'Tu prompt apunta a IA y semiconductores, así que concentré la asignación en xStocks tecnológicos con exposición directa a esa tesis.'
    );
  }

  if (scores.balanced >= 1 || (scores.stable >= 1 && scores.solana >= 1)) {
    return buildFromWeights(
      PRESETS[3].weights,
      capital,
      'Interpreté tu pedido como un mandato balanceado, así que mezclé núcleo cripto de Solana con xStocks defensivos.'
    );
  }

  if (scores.solana >= 1 && totalSignal <= scores.solana + scores.defi) {
    return buildFromWeights(
      PRESETS[0].weights,
      capital,
      'Tu foco es el ecosistema Solana, así que armé el portfolio 100% con protocolos nativos líderes por liquidez y uso real.'
    );
  }

  const scored = ASSETS.map((a) => {
    let s = 0.4;
    a.tags.forEach((tag) => {
      if (scores[tag]) s += scores[tag] * 2;
    });
    if (scores.solana && a.type === 'crypto') s += scores.solana * 1.5;
    return { ...a, score: s };
  })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const totalScore = scored.reduce((sum, a) => sum + a.score, 0);
  const weights: Record<string, number> = {};
  scored.forEach((a) => {
    weights[a.sym] = (a.score / totalScore) * 100;
  });

  return buildFromWeights(
    weights,
    capital,
    totalSignal === 0
      ? 'No detecté una tesis específica en tu prompt, así que generé una canasta diversificada ponderando liquidez y relevancia dentro del universo disponible.'
      : 'Combiné las señales de tu prompt en una canasta ponderada a medida dentro del universo cripto + xStocks disponible en Solana.'
  );
}
