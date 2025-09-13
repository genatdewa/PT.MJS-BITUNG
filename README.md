# PT. Mitra Jaya Samudera Website

Website responsif modern untuk PT. Mitra Jaya Samudera yang bergerak di bidang penangkapan ikan, penjualan ikan beku & segar, serta produksi & penjualan es balok.

## Fitur

- 🌐 **Multi-bahasa**: Indonesia & Inggris
- 📱 **Responsif**: Optimized untuk desktop, tablet, dan mobile
- 🎨 **Modern Design**: Menggunakan Tailwind CSS dengan tema biru laut
- ⚡ **Next.js 14**: Framework React terbaru dengan TypeScript
- 🔧 **SEO Optimized**: Meta tags dan struktur yang SEO-friendly

## Halaman

- **Beranda**: Overview perusahaan dan layanan
- **Tentang Kami**: Profil lengkap perusahaan
- **Produk Ikan**: 10 jenis ikan dengan detail dan gambar
- **Es Balok**: Produk es balok berbagai ukuran
- **Kontak**: Form kontak dan informasi perusahaan

## Jenis Ikan

1. Cakalang (Skipjack Tuna)
2. Tuna
3. Baby Tuna
4. Maesang
5. Tude
6. Malalugis
7. Suru
8. Kababidak
9. Deho
10. Lamadang

## Teknologi

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-i18next
- **Icons**: Heroicons
- **Fonts**: Inter

## Instalasi

1. Clone repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000)

## Build untuk Production

```bash
npm run build
npm start
```

## Struktur Proyek

```
├── components/          # Komponen React
│   ├── Header.tsx      # Header dengan navigasi
│   └── Footer.tsx      # Footer
├── pages/              # Halaman Next.js
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Beranda
│   ├── about.tsx       # Tentang kami
│   ├── products.tsx    # Produk ikan
│   ├── ice.tsx         # Produk es balok
│   └── contact.tsx     # Kontak
├── public/
│   └── locales/        # File terjemahan
│       ├── id/         # Bahasa Indonesia
│       └── en/         # Bahasa Inggris
├── styles/
│   └── globals.css     # Global styles
└── tailwind.config.js  # Konfigurasi Tailwind
```

## Warna Tema

- **Primary**: Sea Blue (#0ea5e9)
- **Secondary**: Ocean Blue (#0284c7)
- **Background**: Soft Blue Gradient
- **Text**: Gray (#374151)

## Lisensi

© 2024 PT. Mitra Jaya Samudera. All rights reserved.
