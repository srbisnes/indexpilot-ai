/**
 * IndexPilot AI — Core types
 * Prepared for migration to TypeScript / Next.js
 */

export type AssetType = 'crypto' | 'xstock';

export interface Asset {
  sym: string;
  name: string;
  type: AssetType;
  tags: string[];
  base: number;
  color: string;
}

export interface PortfolioRow extends Asset {
  pct: number;
  amount: number;
  change24h: number;
  price: number;
  units: number;
}

export interface Portfolio {
  rows: PortfolioRow[];
  aiNote: string;
  capital: number;
}

export interface Preset {
  name: string;
  desc: string;
  weights: Record<string, number>;
}

export type ChartTab =
  | 'price'
  | 'vwap'
  | 'volume'
  | 'heatmap'
  | 'footprint'
  | 'profile';

export type AppMode = 'simple' | 'advanced';

export interface AppState {
  mode: AppMode;
  portfolio: Portfolio | null;
  chartTab: ChartTab;
  chartSymbol: string | null;
}
