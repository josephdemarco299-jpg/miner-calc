# Miner Calc

GoMining profit calculator as an installable web app. Once it's on your Home Screen it opens full-screen, works offline, and pulls the live BTC price and network reward from mempool.space whenever it opens.

## Put it online (GitHub Pages, free)

1. On a computer, sign in to github.com and click **New repository**. Name it `miner-calc`, set it to **Public**, and click **Create repository**.
2. On the next page, click **uploading an existing file**. Drag in everything inside this folder (`index.html`, `sw.js`, `manifest.webmanifest`, `README.md` and the `icons` folder), then click **Commit changes**.
3. Open **Settings → Pages**. Under **Branch**, pick `main` and `/ (root)`, then click **Save**.
4. After a minute or two the app is live at `https://<your-username>.github.io/miner-calc/`.

## Add it to your iPhone Home Screen

1. Open that link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**, then **Add**.
3. Open **Miner Calc** from your Home Screen and enter your miner on the **Miner** tab. The Home Screen app keeps its own saved numbers, separate from Safari.

On Android, open the link in Chrome and tap **Install app** (or **Add to Home screen**) in the menu.

## Updating it later

Replace the changed files in the repository, and change `VERSION` at the top of `sw.js` (for example to `miner-calc-v2`). The app picks up the new version the next time it's opened with a connection, and shows it from the launch after that.
