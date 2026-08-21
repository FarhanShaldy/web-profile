# Web Profile — Muhammad Farhan Fajriansyah

Website personal portfolio berbasis **React.js** dan **Tailwind CSS**, dibuat sebagai media perkenalan diri, showcase proyek, dan kontak untuk keperluan pencarian kerja sebagai Full Stack Developer.

---

## ✨ Fitur

- **Single Page Application** dengan smooth scroll navigation antar section
- **Fully Responsive** — dioptimalkan untuk mobile, tablet, dan desktop
- **Animasi interaktif** menggunakan [Motion](https://motion.dev/) (fade in, scroll reveal, stagger)
- **Navbar sticky** dengan status "Open for Projects"
- **Profile Card** dinamis dengan animasi ulang saat breakpoint berubah

---

## 🧩 Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | React.js (Vite) |
| Styling | Tailwind CSS v4 |
| Animasi | Motion (motion.dev) |
| Build Tool | Vite |

---

## 📁 Struktur Project

```
web-profile/
├── src/
│   ├── assets/
│   │   └── profile.jpg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Techhero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Process.jsx
│   │   ├── Guarantee.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── Hooks/
│   │   └── useBreakpoint.js
│   ├── lib/
│   │   └── Motion.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 📄 Penjelasan Komponen

### Layout Utama
- **`App.jsx`** — Merangkai seluruh section menjadi satu halaman (Navbar → Hero → About → Skills → Projects → Process → Guarantee → Contact → Footer)
- **`Navbar.jsx`** — Navigasi sticky dengan logo, menu anchor link, dan status ketersediaan
- **`Footer.jsx`** — Informasi hak cipta dan identitas singkat

### Section
- **`Hero.jsx`** — Perkenalan awal: nama, tagline, deskripsi singkat, CTA, statistik pengalaman, dan `ProfileCard`
- **`About.jsx`** — Deskripsi diri lebih lengkap beserta tabel data pribadi
- **`Skills.jsx`** — Daftar teknologi yang dikuasai, dikelompokkan per kategori (Frontend, Backend, Database, Tools)
- **`Projects.jsx`** — Daftar proyek yang pernah dikerjakan beserta tech stack masing-masing
- **`Process.jsx`** — Alur kerja dalam mengembangkan sebuah proyek
- **`Guarantee.jsx`** — Komitmen kerja dan nilai-nilai yang dipegang
- **`Contact.jsx`** — Ajakan untuk terhubung beserta kontak (email & GitHub)

### Komponen Pendukung
- **`ProfileCard.jsx`** — Kartu profil ringkas (avatar, nama, status, tech stack) yang tampil di Hero pada layar besar
- **`Techhero.jsx`** — Daftar badge teknologi utama, digunakan di dalam `ProfileCard`

### Utilitas
- **`Hooks/useBreakpoint.js`** — Custom hook untuk mendeteksi breakpoint layar (`lg` ke atas), digunakan untuk memicu ulang animasi `ProfileCard` saat ukuran layar berubah
- **`lib/Motion.js`** — Kumpulan preset animasi (variants) Motion yang dipakai berulang di berbagai komponen: `fadeInUp`, `scrollReveal`, `staggerContainer`, `staggerItem`, dll

---

## 🚀 Instalasi & Menjalankan Project

1. **Clone repository**
   ```bash
   git clone https://github.com/FarhanShaldy/web-profile.git
   cd web-profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser.

4. **Build untuk production**
   ```bash
   npm run build
   ```

---

## 🎨 Kustomisasi

- **Ganti data pribadi** — edit array/teks di masing-masing file komponen (`About.jsx`, `Skills.jsx`, `Projects.jsx`, dst)
- **Ganti foto profil** — replace file di `src/assets/profile.jpg`
- **Ganti preset animasi** — edit `src/lib/Motion.js`
- **Ganti warna aksen** — cari dan ganti class `blue-300`/`blue-400` di seluruh komponen

---

## 📬 Kontak

- **Email:** m.farhan.fajriansyah@gmail.com
- **GitHub:** [github.com/FarhanShaldy](https://github.com/FarhanShaldy)
- **Domisili:** Sleman, D.I. Yogyakarta

---

## 📝 Lisensi

Project ini dibuat untuk keperluan personal portfolio. Bebas digunakan sebagai referensi belajar.
