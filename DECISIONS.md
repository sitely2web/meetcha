# Design decisions — Meetcha Bubble Tea Cafe

## References
- Primary: jenis.com — defines warmth, editorial food brand energy, section structure, copy tone
- Secondary: brightland.co — typography restraint, warm neutrals, photographic discipline, motion
- Secondary: graza.co — bold section openings, spacious layout, product-first hierarchy, CTA confidence

## Photography
| Section | Asset | Photographer | Source |
|---------|-------|--------------|--------|
| Hero | Iced Thai Tea in Lush Garden Setting | Nguyễn Tiến Thịnh | https://www.pexels.com/photo/refreshing-iced-thai-tea-in-lush-garden-setting-33241823/ |
| Find Us | Four cold drinks with straws on green grass | Kseniya Buraya | https://www.pexels.com/photo/drinks-in-plastic-cups-9980151/ |

## Typography
- Display/Heading: Syne ExtraBold — geometric, modern, echoes the bold block lettering of the sign; personality without loudness
- Body: DM Sans Regular/Medium — clean, humanist, highly readable at small sizes
- Source: Google Fonts

## Spacing
- Base unit: 8px — standard, scales cleanly across all breakpoints
- Scale: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192

## Colour
- --cream: #F5F0EA — page background, mirrors interior wall warmth
- --black: #1C1C1C — primary text, nav, footer background
- --green: #7AC231 — primary brand accent, extracted from exterior sign
- --green-dk: #4A7A1E — hover states, deep accents, from wall decal
- --coral: #E8836A — secondary accent, from "bubble tea cafe" sign script
- --mid: #5C5C5C — secondary text, captions
- --white: #FFFFFF — card surfaces, overlays

## Motion
- Easing: cubic-bezier(0.25, 0, 0, 1) — ease-out, feels natural and unforced
- Duration: 400ms — long enough to read, short enough not to delay
- Trigger: IntersectionObserver at 0.15 threshold
- Properties: opacity + translateY only — no library needed
- Stagger: 80ms between sibling elements

## Section decisions

### Nav
- Transparent over hero, transitions to #1C1C1C on scroll — keeps hero immersive without losing wayfinding
- "Meet" white / "cha" green — reinforces brand split from the sign without copying it literally
- Two links only (Menu, Find Us) — everything on the page; restraint over completeness

### Hero
- Left-aligned type, not centred — avoids the generic centred hero anti-pattern
- Gradient runs bottom-to-top (darkest at bottom) — type sits in the darkest zone for legibility
- "Boba worth meeting." — short, confident, wordplay on the brand name
- Green used on the label only, not the headline — keeps it rare and high-value

### Menu
- No images in menu section — content density is the visual texture; images would compete
- Flavor chips (pill tags) used for Smoothie/Slush/Toppings — communicates abundance without a wall of text
- Two-column grid on desktop — efficient use of space for a long menu

### Testimonials
- Dark background (#1C1C1C) immediately after cream menu — maximum contrast, resets attention
- Coral quote marks at low opacity — accent without dominance
- Four quotes chosen for: specificity (Fatima on smoothies), energy (Jiselle on speed), brevity (Ava), warmth (Alejandro)

### Find Us
- Storefront photo above address info — grounds the section in the real physical place before the map
- Hours in a table — cleanest way to scan day/time pairs
- Map iframe at 480px height — generous enough to be useful

### Footer
- Dark background mirrors nav — bookends the page
- Minimal — address, phone, hours only. No excess.
- Pexels attribution in subdued colour — required, not hidden

## Polish pass notes
<!-- populated during final pass -->
