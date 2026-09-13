# CV Da'ifa Maulana

Website CV interaktif berbasis React + Vite dengan animasi dan efek modern.

## 🚀 Cara Menjalankan di Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server
npm run dev

# 3. Buka di browser
# http://localhost:5173
```

## 🌐 Deploy ke Vercel

### Cara 1 — Via GitHub (Recommended)
1. Push project ini ke GitHub
2. Buka [vercel.com](https://vercel.com) dan login
3. Klik **"Add New Project"**
4. Import repo GitHub kamu
5. Biarkan semua setting default (Vercel auto-detect Vite)
6. Klik **Deploy** — selesai! 🎉

### Cara 2 — Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Ikuti instruksi di terminal
```

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite** — Build tool
- **CSS-in-JS** — Inline styles + CSS variables
- **Canvas API** — Animated background
- **Intersection Observer** — Scroll animations

## 📁 Struktur Project

```
cv-daifa/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Background.jsx   ← Animated canvas background
│   │   ├── Card.jsx         ← Reusable card with hover effect
│   │   ├── Cursor.jsx       ← Custom cursor
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx         ← Landing section
│   │   ├── Nav.jsx          ← Sticky navbar
│   │   ├── Organisasi.jsx
│   │   ├── Pendidikan.jsx
│   │   ├── Profil.jsx
│   │   ├── Proyek.jsx
│   │   ├── Section.jsx      ← Reusable section wrapper
│   │   └── Skills.jsx
│   ├── hooks/
│   │   └── useInView.js     ← Scroll reveal hook
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
