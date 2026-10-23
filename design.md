# Design System & UI Specification: Portfolio Da'ifa Maulana

Dokumen ini merupakan pedoman desain (*single source of truth*) untuk pengembangan antarmuka, komponen, dan pengelolaan konten pada website portofolio Da'ifa Maulana ([daifa-maulana.my.id](https://daifa-maulana.my.id)).

---

## 1. Filosofi Desain

* **Modern Cyber-Minimalist:** Bersih, terstruktur rapi, elegan, dengan sentuhan futuristik yang halus (dot grid, spotlight glow, micro-interactions).
* **Content-First & Scannable:** Informasi dirancang hierarkis agar rekruter dan klien dapat membaca poin penting (keahlian, pengalaman industri, proyek) dalam waktu kurang dari 15 detik.
* **Performa & Responsif:** Ringan, transisi CSS native yang mulus, serta optimal di semua ukuran layar (Mobile 360px hingga Desktop 4K).
* **Dual Theme Support:** Mendukung Dark Mode (default rekomendasi) dan Light Mode dengan kontras rasio WCAG AAA.

---

## 2. Palet Warna & Token (Color System)

### A. Dark Mode (Primary Palette)
| Token | Nilai Hex | Penggunaan |
| :--- | :--- | :--- |
| **Canvas Background** | `#080d1a` | Background halaman utama |
| **Surface Card** | `rgba(15, 23, 42, 0.75)` / `bg-slate-900/80` | Kartu konten dengan backdrop-blur |
| **Surface Elevated** | `rgba(30, 41, 59, 0.6)` / `bg-slate-800/60` | Elemen interaktif, badge, input |
| **Border Default** | `rgba(51, 65, 85, 0.7)` / `border-slate-800/80` | Garis pembatas kartu |
| **Border Active / Hover** | `rgba(59, 130, 246, 0.5)` / `border-blue-500/50` | Efek hover kartu |
| **Text Primary** | `#f8fafc` (`text-slate-100`) | Judul dan teks utama |
| **Text Secondary** | `#94a3b8` (`text-slate-400`) | Deskripsi, subtitle, metadata |
| **Brand Accent** | `#4f8ef7` (`accent-dark`) | Tombol aktif, highlight, ikon |
| **Cyan Glow** | `#06b6d4` (`text-cyan-400`) | Spotlight & gradasi aksen |
| **Emerald Indicator** | `#10b981` (`emerald-500`) | Status aktif, badge sertifikat |

### B. Light Mode
| Token | Nilai Hex | Penggunaan |
| :--- | :--- | :--- |
| **Canvas Background** | `#f8fafc` | Background halaman utama |
| **Surface Card** | `rgba(255, 255, 255, 0.85)` | Kartu konten dengan backdrop-blur |
| **Border Default** | `rgba(226, 232, 240, 0.9)` | Garis pembatas kartu |
| **Text Primary** | `#0f172a` (`text-slate-900`) | Judul dan teks utama |
| **Text Secondary** | `#64748b` (`text-slate-500`) | Subtitle dan deskripsi |
| **Brand Accent** | `#2563eb` (`accent`) | Tombol, link aktif, highlight |

---

## 3. Tipografi

* **Sans-Serif (Body & Headings):** `Poppins, sans-serif`
  * Headings: `font-bold` (700) / `font-black` (900)
  * Body: `font-normal` (400) / `font-medium` (500)
* **Monospace (Code, Tag, Metadata):** `JetBrains Mono, monospace`
  * Digunakan pada: developer tab, nomor statistik, badge teknologi, dan format tanggal.

---

## 4. Pola Desain Kartu (Card System)

Semua kartu dalam portofolio mengikuti standarisasi berikut:

1. **Struktur Dasar Kartu:**
   * Sudut melengkung: `rounded-3xl` (24px) untuk kartu besar, `rounded-2xl` (16px) untuk kartu anak/badge.
   * Efek Kaca (*Glassmorphism*): `bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90`.
   * Elevasi: `shadow-md hover:shadow-xl transition-all duration-300`.
   * Interaksi Hover: `hover:-translate-y-1` atau `hover:border-blue-500/40`.

2. **Spesifikasi Kartu per Komponen:**
   * **Hero Photo / Code Card:** Mendukung 2 tab (`Foto Asli` dan `developer.ts` terminal interaktif).
   * **Kartu Proyek (`Proyek.jsx`):**
     * Header kategori (`Solo · Client Project`, `Magang`, `Kampus`).
     * Judul tebal & deskripsi bilingual (ID & EN).
     * Tag tumpukan teknologi (`tags`).
     * Tombol aksi eksternal (`rel="noopener noreferrer"`).
     * Interaksi klik untuk membuka modal preview detail.
   * **Kartu Pengalaman (`Pengalaman.jsx`):** Garis waktu vertikal (*timeline indicator*) dengan status magang aktif dan sorotan tanggung jawab (*checklist*).
   * **Kartu Sertifikasi (`Pendidikan.jsx`):** Menampilkan lencana resmi, tanggal berlaku, dan tombol tautan dokumen PDF.

---

## 5. Arsitektur Halaman Admin (`/admin`)

Halaman Admin bertindak sebagai panel kontrol terpusat untuk mengelola konten publik tanpa perlu mengedit kode sumber secara manual:

### Fitur Admin:
1. **Keamanan Sederhana:** Kunci sandi (PIN/Passcode) untuk melindungi akses ke mode edit.
2. **Tab Manajemen:**
   * **Hero & Profil:** Kelola salam, nama, peran, biografi, status badge, foto, dan statistik.
   * **Proyek:** Tambah, edit, hapus, atur urutan proyek, serta ubah tag & link demo.
   * **Pengalaman:** Tambah/edit rekam jejak kerja, nama perusahaan, periode, dan poin pencapaian.
   * **Keahlian (Skills):** Kelola daftar teknologi dan tools.
   * **Pendidikan & Organisasi:** Kelola riwayat studi, sertifikat resmi, dan pengalaman kepanitiaan.
   * **Kontak & Social:** Ubah link email, WhatsApp, GitHub, LinkedIn.
   * **Kustomisasi Tema & Card:** Opsi palet aksen (Biru, Cyan, Zamrud, Ungu) dan gaya border kartu.
3. **Penyimpanan & Sinkronisasi:**
   * **Local Storage:** Tersimpan otomatis di peramban untuk pratinjau instan.
   * **Export JSON:** Fitur unduh file cadangan (*backup*) data konten.
   * **Import JSON:** Fitur unggah untuk memulihkan atau memindahkan konfigurasi.
   * **Reset Default:** Mengembalikan ke konfigurasi awal kapan saja.

---

## 6. Standar Gambar Pratinjau Sosial (Open Graph Image)

* **Dimensi:** `1200 × 630 px` (Aspek Rasio 1.91:1).
* **Format & Ukuran File:** JPG berkualitas tinggi, ukuran **maksimal 100 KB** (sesuai limit WhatsApp crawler).
* **Komposisi Banner:**
  * Sisi Kanan: Foto asli Da'ifa Maulana (`daifa.jpg`) dalam bingkai profesional.
  * Sisi Kiri: Nama *"Da'ifa Maulana"*, Peran *"Web Developer & Technical SEO"*, ringkasan keahlian, dan tag stack resmi.
  * Latar: Dark theme dot grid `#090d16` selaras dengan UI website.
