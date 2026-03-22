# 📊 Avinash Bot Dashboard

A live trading dashboard for monitoring the **APEX autonomous trading bot** — built with plain HTML/JS, hosted free on GitHub Pages, accessible from any device.

![Dashboard](https://img.shields.io/badge/Status-Live-22c55e?style=flat-square) ![Hosted](https://img.shields.io/badge/Hosted-GitHub%20Pages-3b82f6?style=flat-square) ![Exchange](https://img.shields.io/badge/Exchange-Kraken-purple?style=flat-square) ![Bot](https://img.shields.io/badge/Bot-APEX-orange?style=flat-square)

---

## 🌐 Live URL

```
https://avinashpathrol.github.io/apex-dashboard
```

Open this link on any device — phone, tablet, or laptop. Enter your credentials once and they save automatically.

---

## ✨ Features

### 📈 Live Market Data
- BTC price in CAD (live from Kraken)
- Last bot action (BUY / SELL / HOLD)
- CAD balance available in Kraken account
- Total P&L across all closed trades
- Win rate with W/L breakdown

### 📅 Trade Calendar
- Full monthly calendar view with navigation (‹ ›)
- Days colour coded: 🟢 green = profit, 🔴 red = loss
- Each trading day shows P&L and trade count
- Hover over any day for detailed breakdown

### 📊 Returns by Period
- 8 selectable periods: **1D, 1W, 15D, 1M, 2M, 3M, 6M, 1Y**
- Each period shows: P&L, trades, win rate, fees paid
- Mini line chart showing cumulative P&L curve for selected period

### 🏃 Run Statistics
- Runs today, this week, and all time
- Powered by GitHub Actions logs

### ⚡ Signal Analysis
- Visual signal strength meter (0–6 signals)
- Each indicator shown as green/red/grey dot
- Tells you exactly which signals are active and which are missing

### 🎯 Next Predicted Action
- Tells you what signal is missing before next BUY triggers
- Updates automatically every refresh

### 💸 Kraken Fee Tracker
- Fees today, this week, all time
- Fee % of total trade volume

### 🌍 Market Sentiment
- Fear & Greed Index (live)
- BTC Dominance %
- 24h Market Volume
- Total Crypto Market Cap

### ⏱️ Auto-Refresh
- Refreshes every **5 minutes** automatically
- Countdown timer shows time until next refresh
- Manual ↻ refresh button for instant update

---

## 🔧 How It Works

The dashboard connects to two data sources:

```
GitHub Actions API  →  Bot run logs (decisions, signals, prices)
Kraken Private API  →  Live balance, trade history, P&L
```

All API calls happen directly from your browser — no backend server required.

---

## 🚀 Setup

### What You Need
- A **GitHub Personal Access Token** (classic, with `repo` scope)
- Your **Kraken API Key** and **Kraken API Secret** (Query Funds + Query Orders permissions)

### First Time
1. Open the dashboard URL
2. Enter your GitHub token, repo name, Kraken API key, and Kraken API secret
3. Click **Connect & Save**
4. Credentials are saved to your browser — never needed again on that device

### Subsequent Visits
Just open the URL — it connects automatically.

### Sign Out
Click the **✕** button in the top right to clear saved credentials.

---

## 🔑 Getting Your Credentials

### GitHub Token
1. Go to github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → tick **repo** scope
3. Copy and save — shown only once

### Kraken API Keys
1. Login to Kraken → Security → API → Add Key
2. Enable: ✅ Query Funds, ✅ Query Open Orders, ✅ Query Closed Orders
3. ❌ Never enable Withdraw
4. Copy API Key and Private Key

---

## 📱 Add to Phone Home Screen

**iPhone (Safari):**
1. Open the dashboard URL in Safari
2. Tap the Share button → "Add to Home Screen"
3. It appears as an app icon with the green chart logo

**Android (Chrome):**
1. Open the dashboard URL in Chrome
2. Tap the 3-dot menu → "Add to Home Screen"

---

## 🤖 Related Repos

| Repo | Description |
|---|---|
| [apex-trading-bot](https://github.com/avinashpathrol/apex-trading-bot) | The trading bot — runs on GitHub Actions every 15 min |
| [apex-dashboard](https://github.com/avinashpathrol/apex-dashboard) | This repo — the dashboard UI |

---

## 🛠️ Tech Stack

- **Frontend:** Plain HTML + CSS + JavaScript (no frameworks)
- **Charts:** Chart.js
- **Hosting:** GitHub Pages (free)
- **Data:** GitHub Actions API + Kraken REST API + CoinGecko API + Fear & Greed API
- **Auth:** OAuth 1.0 (Kraken) + Personal Access Token (GitHub)
- **Storage:** Browser localStorage (credentials only)

---

## ⚠️ Security Notes

- Credentials are stored in **browser localStorage only** — never sent to any third party
- Kraken API keys used here have **read-only permissions** — no withdrawals possible
- The dashboard makes requests directly from your browser to GitHub and Kraken APIs
- For extra security, set your GitHub token to expire every 90 days

---

## 📄 License

Personal use only. Built for the APEX autonomous trading project.

---

*Built by Avinash Pathrol · Powered by APEX · Kraken · GitHub Actions*
