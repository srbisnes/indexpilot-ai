# IndexPilot AI

**Portfolios on-chain para el ecosistema Solana**  
Demo funcional · Arquitectura no-custodial · Datos de mercado simulados (DEMO DATA)

[![Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=flat-square&logo=vercel)](https://github.com/srbisnes/indexpilot-ai)
[![Solana](https://img.shields.io/badge/Solana-Ecosystem-9945FF?style=flat-square&logo=solana)](https://solana.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## Visión del producto

**IndexPilot AI** es un generador de portfolios on-chain orientado al ecosistema Solana que combina:

- **Crypto nativo** de alta liquidez (SOL, JUP, JTO, PYTH, ORCA, RAY, WIF, BONK)
- **xStocks tokenizados** (NVDAx, MSFTx, AAPLx, GOOGLx, METAx, AMZNx, SPYx, QQQx, COINx)

El usuario describe en lenguaje natural la tesis de inversión o elige un preset. IndexPilot genera la asignación de capital, muestra métricas, análisis técnico simulado y un preview de ejecución vía agregador estilo Jupiter.

> **Importante**: Esta versión es una **demo completa y funcional**. Todos los precios, velas, volumen, heatmaps y firmas son **DEMO DATA** generados localmente de forma determinística. No se firman ni transmiten transacciones reales. Arquitectura 100% no-custodial.

---

## Qué incluye la demo actual

| Feature | Estado | Descripción |
|---------|--------|-------------|
| Generación por prompt | ✅ | Matching real de keywords + scoring de categorías (no hardcodeado) |
| Capital configurable | ✅ | Cálculo automático de % y montos por activo |
| 4 Presets | ✅ | Solana Core · IA & Semis (xStocks) · Memecoin Momentum · Balanceado 60/40 |
| Modo Simple / Advanced | ✅ | Advanced incluye Price Action, VWAP, Volume, Liquidity Heatmap, Footprint/Delta, Volume Profile |
| AI Market Read | ✅ | Texto generado dinámicamente según el portfolio construido |
| Wallet simulada | ✅ | Conexión fake + dirección Solana realista |
| Preview de ejecución | ✅ | Ruta simulada + firma simulada (nunca se transmite) |
| Charts canvas | ✅ | Determinísticos por símbolo (misma sesión = mismos datos) |

---

## Arquitectura actual (Demo)

```
indexpilot-ai/
├── index.html              ← App completa (single-file, zero-deps, Vercel-ready)
├── public/index.html       ← Copia para static hosting
├── src/
│   ├── lib/
│   │   ├── assets.ts       ← Universo de activos + tags
│   │   ├── presets.ts      ← Presets de portfolio
│   │   ├── portfolio-engine.ts  ← Motor de matching + scoring
│   │   ├── prng.ts         ← Generador determinístico (mulberry32)
│   │   └── types.ts
│   └── components/         ← (preparado para migración React/Next)
├── docs/
│   ├── ARCHITECTURE.md
│   └── ROADMAP.md
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

La versión actual corre como **sitio estático puro**. No requiere build. Vercel la detecta automáticamente.

---

## Cómo correr localmente

```bash
# Opción 1 — zero dependencies
npx serve .
# o
python3 -m http.server 3000

# Opción 2 — con package.json
npm install
npm run dev
```

Abrí `http://localhost:3000` (o el puerto que use el servidor).

---

## Deploy en Vercel

El proyecto está diseñado para deploy **zero-config**:

1. Conectá el repo `srbisnes/indexpilot-ai` a Vercel.
2. Framework Preset: **Other** (o deja auto-detect).
3. Build Command: *(dejar vacío)*.
4. Output Directory: `.` o `public`.
5. Deploy.

Cada push a `main` genera un nuevo deploy.

---

## Roadmap (visión de producto real)

### Fase 1 — Demo actual (✅ completa)
- Matching por keywords + presets
- UI dark-mode Solana-native
- Charts técnicos simulados
- Preview de ejecución no-custodial

### Fase 2 — Datos reales + Jupiter
- Integración Jupiter Quote API + Swap API
- Precios reales vía Pyth / Birdeye / Helius
- Wallet real (Phantom, Solflare, Backpack) con `@solana/wallet-adapter`
- Simulación de swap real (sin firmar) → luego firma opcional

### Fase 3 — Inteligencia y personalización
- LLM real (OpenAI / Claude / Grok) para interpretación de prompt y AI Market Read
- Perfiles de riesgo del usuario
- Rebalanceo sugerido
- Historial de portfolios generados (localStorage + opcional on-chain)

### Fase 4 — Omnichaín & Institucional
- Soporte multi-chain (Solana + Base + Arbitrum) vía LayerZero / Wormhole / CCTP
- xStocks + tokenized RWAs de otras cadenas
- Módulo de compliance / KYC light para capital institucional
- Smart accounts / session keys para ejecución programada

---

## Universo de activos (actual)

**Crypto nativo Solana**
- SOL, JUP, JTO, PYTH, ORCA, RAY, WIF, BONK

**xStocks tokenizados**
- NVDAx, MSFTx, AAPLx, GOOGLx, METAx, AMZNx, SPYx, QQQx, COINx

---

## Seguridad & Disclaimer

- **No-custodial**: la demo nunca pide ni almacena claves privadas.
- **No se firman transacciones reales**.
- **DEMO DATA**: todo el market data es simulado de forma determinística.
- Este proyecto es una **demostración técnica**. No constituye asesoramiento financiero.

---

## Autor

Construido como demo de producto para el ecosistema Solana.  
Repo: [https://github.com/srbisnes/indexpilot-ai](https://github.com/srbisnes/indexpilot-ai)

---

## Licencia

MIT — ver [LICENSE](LICENSE)
