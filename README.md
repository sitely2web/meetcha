# 🧋 Meetcha Bubble Tea Cafe

> **Boba worth meeting.** — A fast, beautiful static website for Meetcha Bubble Tea Cafe in Plano, TX.

---

## ✨ About

Meetcha is a beloved bubble tea cafe serving fresh milk teas, fruit teas, smoothies, slushes, and more at **5960 W Parker Rd, Plano, TX 75093**. This website brings their vibrant menu and cozy vibe to the web — no frameworks, no fuss.

---

## 📄 Sections

| Section | Description |
|---|---|
| 🖼️ **Hero** | Full-bleed photo with a punchy headline and CTA |
| 🍵 **Menu** | Complete menu — milk teas, fruit teas, lemonades, brewed teas, smoothies, slushes & toppings |
| 💬 **Testimonials** | Real customer reviews on a dark, high-contrast backdrop |
| 📍 **Find Us** | Address, hours, phone number, and an embedded Google Map |

---

## 🗂️ File Structure

```
meetcha-website/
├── index.html              # Single-page site
├── css/
│   ├── reset.css           # Baseline CSS reset
│   ├── tokens.css          # Design tokens (colours, spacing, type)
│   └── style.css           # All component & layout styles
├── js/
│   └── main.js             # Scroll nav + IntersectionObserver fade-ins
└── assets/
    ├── images/             # Hero & storefront photography
    └── boba.png            # Favicon
```

---

## 🎨 Design

- **Typography:** Plus Jakarta Sans (headings) · DM Sans (body) via Google Fonts
- **Colour Palette:**
  - 🟤 Cream `#F5F0EA` — warm page background
  - ⚫ Black `#1C1C1C` — nav, footer, primary text
  - 🟢 Green `#7AC231` — primary brand accent
  - 🟠 Coral `#E8836A` — secondary accent
- **Motion:** Smooth fade-up animations via IntersectionObserver — zero JavaScript libraries
- **Layout:** Fully responsive, mobile-first

> See [DECISIONS.md](DECISIONS.md) for full design rationale and reference brands.

---

## 🚀 Running Locally

No build step required — just open `index.html` in your browser, or spin up a local server:

```bash
npx serve .
```

---

## 📸 Photo Credits

- Hero: [Nguyễn Tiến Thịnh](https://www.pexels.com/photo/refreshing-iced-thai-tea-in-lush-garden-setting-33241823/) on Pexels
- Find Us: [Kseniya Buraya](https://www.pexels.com/photo/drinks-in-plastic-cups-9980151/) on Pexels

---

<p align="center">Made with 🧋 for Meetcha · Plano, TX</p>
