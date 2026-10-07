# Miner Calc and Farm Calc

Two GoMining calculators as installable web apps. Once on your Home Screen they open full-screen, work offline, and pull the live BTC price and network reward from mempool.space whenever they open.

| App | What it's for | Link |
| --- | --- | --- |
| **Miner Calc** | One digital miner | https://josephdemarco299-jpg.github.io/miner-calc/ |
| **Farm Calc** | Your whole mining farm: every miner, farm totals, farm-wide discounts | https://josephdemarco299-jpg.github.io/miner-calc/farm/ |

## Add one to your iPhone Home Screen

1. Open its link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**, then **Add**.
3. Open it from your Home Screen and enter your numbers. Each Home Screen app keeps its own saved numbers, separate from Safari.

On Android, open the link in Chrome and tap **Install app** (or **Add to Home screen**) in the menu.

## What's in the repo

- `index.html`, `sw.js`, `manifest.webmanifest`, `icons/`: Miner Calc
- `farm/`: Farm Calc, with its own copies of the same four pieces
- `.nojekyll`: tells GitHub Pages to serve the files as they are

GitHub Pages publishes the `main` branch from the root folder (Settings → Pages).

## Updating an app later

Change its files, and change `VERSION` at the top of that app's `sw.js` (for example `miner-calc-v3` or `farm-calc-v2`). The app picks up the new version the next time it's opened with a connection, and shows it from the launch after that.
