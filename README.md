# IndexPilot AI

Demo funcional de generación de portfolios on-chain para el ecosistema Solana:
crypto nativo (SOL, JUP, JTO, PYTH, ORCA, RAY, WIF, BONK) + xStocks tokenizados
(NVDAx, MSFTx, AAPLx, GOOGLx, METAx, AMZNx, SPYx, QQQx, COINx).

## Qué incluye

- Generación de portfolio por prompt (matching de keywords real, no hardcodeado)
- Capital configurable con cálculo de % y montos por activo
- 4 presets: Solana Core, IA & Semis (xStocks), Memecoin Momentum, Balanceado 60/40
- Modo Simple y Advanced Analysis
- Advanced: Price Action, VWAP, Volume, Liquidity Heatmap, Footprint/Delta, Volume Profile
- AI Market Read generado dinámicamente según el portfolio armado
- Wallet "conectar" simulada + modal de preview de ejecución con firma simulada

Todos los datos de mercado son **DEMO DATA** simulada localmente. No se firma ni
transmite ninguna transacción real. Arquitectura no-custodial.

## Deploy

Sitio estático. En Vercel se detecta automáticamente sin build command.

Repo: https://github.com/srbisnes/indexpilot-ai
