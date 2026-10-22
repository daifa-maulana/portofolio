# CV Da'ifa Maulana

Website CV/portofolio interaktif berbasis **React 18 + Vite + Tailwind CSS** dengan dukungan dark mode, bilingual (ID/EN), dan animasi modern.

🌐 **Live:** [https://daifa-maulana.my.id](https://daifa-maulana.my.id)

## 🚀 Cara Menjalankan di Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server
npm run dev

# 3. Buka di browser
# http://localhost:5173
```

## 🚀 Deploy ke GitHub Pages

```bash
# Build & deploy ke branch gh-pages
npm run deploy
```

Custom domain dikonfigurasi via file `public/CNAME` → `daifa-maulana.my.id`.

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Utility-first CSS framework
- **Lucide React** — Icon library
- **Intersection Observer** — Scroll animations

## 📁 Struktur Project

```
portofolio/
├── public/
│   ├── 404.html              ← GitHub Pages SPA fallback
│   ├── CNAME                 ← Custom domain config
│   ├── favicon.svg
│   ├── daifa.jpg
│   ├── gemini-certified.png
│   ├── sertifikat-gemini-full.png
│   ├── sertifikat-gemini.pdf
│   └── projects/             ← Screenshot proyek
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx          ← Landing section
│   │   ├── Icons.jsx         ← Custom SVG icons
│   │   ├── Kontak.jsx
│   │   ├── Nav.jsx           ← Sticky navbar + dark/lang toggle
│   │   ├── Organisasi.jsx
│   │   ├── Pendidikan.jsx
│   │   ├── Pengalaman.jsx
│   │   ├── Profil.jsx
│   │   ├── Proyek.jsx
│   │   ├── Section.jsx       ← Reusable section wrapper
│   │   └── Skills.jsx
│   ├── data/
│   │   └── translations.js   ← Bilingual ID/EN strings
│   ├── hooks/
│   │   ├── useInView.js      ← Scroll reveal hook
│   │   ├── useLanguage.js    ← Language toggle hook
│   │   └── useTheme.js       ← Dark mode hook
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
