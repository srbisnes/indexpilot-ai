# IndexPilot AI — Arquitectura

## 1. Visión de alto nivel

IndexPilot AI es un **portfolio construction engine** orientado a Solana que combina:

- Interpretación de intención del usuario (prompt en lenguaje natural)
- Universo de activos cripto nativos + xStocks tokenizados
- Asignación de capital con scoring
- Visualización de análisis técnico
- Preview de ejecución on-chain (agregador estilo Jupiter)

La versión actual es una **demo de frontend puro** (HTML + CSS + JS vanilla) diseñada para:

1. Validar UX de generación de portfolios
2. Mostrar el concepto de AI Market Read
3. Demostrar flujo no-custodial de punta a punta
4. Servir como base limpia para migrar a Next.js + wallet-adapter + Jupiter real

---

## 2. Capas del sistema (estado actual)

```
┌────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER                      │
│  index.html (UI completa: rail + main + modal + charts)     │
└─────────────────────────────┬────────────────────────────────┘
                             │
┌─────────────────────────────┴────────────────────────────────┐
│                    APPLICATION LOGIC                        │
│  • scorePromptCategories()                                  │
│  • generatePortfolio()                                      │
│  • buildFromWeights()                                       │
│  • buildAiRead()                                            │
│  • renderPortfolio() + drawChart()                          │
└─────────────────────────────┬────────────────────────────────┘
                             │
┌─────────────────────────────┴────────────────────────────────┐
│                      DATA LAYER (DEMO)                      │
│  • ASSETS[]  — universo estático con tags y base price      │
│  • PRESETS[] — 4 estrategias predefinidas                   │
│  • mulberry32 + seedFromString → precios/velas deterministas│
└──────────────────────────────────────────────────────────────┘
```

No hay backend. Todo corre en el navegador.

---

## 3. Motor de generación de portfolio

### 3.1 Scoring de categorías

El prompt del usuario se normaliza a minúsculas y se matchea contra un mapa de keywords por categoría.

### 3.2 Reglas de decisión

1. Si `meme` domina → aplica preset **Memecoin Momentum**
2. Si `ai + semis` es fuerte → aplica preset **IA & Semis**
3. Si `balanced` o mezcla stable+solana → **Balanceado 60/40**
4. Si foco claro en Solana → **Solana Core**
5. Fallback: scoring por tags de cada activo → top 6 activos ponderados

### 3.3 Construcción final

`buildFromWeights()` normaliza los pesos, calcula montos, genera precio y cambio 24h determinístico por símbolo.

---

## 4. Datos de mercado simulados

PRNG determinístico (mulberry32) seeded por el símbolo. En producción se reemplaza por Pyth / Birdeye / Helius.

---

## 5. Principios de diseño

1. **No-custodial first**
2. **Demo honest** — todo lo simulado está marcado como DEMO DATA
3. **Determinismo** — facilita demos y tests
4. **Zero-deps en la demo**
5. **Preparación para omnichaín**
