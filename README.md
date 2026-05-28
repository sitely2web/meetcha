# Meetcha Bubble Tea Cafe

A static marketing website for Meetcha Bubble Tea Cafe, located at 5960 W Parker Rd, Plano, TX.

## Pages

Single-page layout with the following sections:
- **Hero** — full-bleed photo with headline and CTA
- **Menu** — full menu across Milk Tea, Fruit Tea, Lemonade, Brewed Tea, Smoothies, Slushes, and Toppings
- **Testimonials** — customer reviews
- **Find Us** — address, hours, phone, and embedded Google Map

## Stack

Plain HTML, CSS, and JavaScript — no frameworks or build tools.

```
index.html
css/
  reset.css       — baseline reset
  tokens.css      — design tokens (colours, spacing, typography)
  style.css       — all component styles
js/
  main.js         — scroll nav transition + IntersectionObserver fade-ins
assets/
  images/         — hero and storefront photos
  boba.png        — favicon
```

## Design

- **Fonts:** Plus Jakarta Sans (headings) · DM Sans (body) via Google Fonts
- **Colours:** Cream `#F5F0EA` · Black `#1C1C1C` · Green `#7AC231` · Coral `#E8836A`
- **Motion:** CSS opacity + translateY fade-ups triggered by IntersectionObserver, no library

See [DECISIONS.md](DECISIONS.md) for full design rationale.

## Running locally

No build step — just open `index.html` in a browser, or serve with any static file server:

```bash
npx serve .
```
