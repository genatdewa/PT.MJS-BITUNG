# Struktur Folder Gambar

Folder ini berisi semua gambar yang digunakan dalam website PT. Mitra Jaya Samudera.

## Struktur Folder

```
public/images/
├── logo_mjs.gif              # Logo utama perusahaan (Header & Footer)
├── MJS_Dpn.jpg               # Gambar profil perusahaan (Halaman About)
└── ikan/                     # Folder gambar ikan
    ├── cakalang.gif          # Gambar ikan Cakalang
    ├── tuna.gif              # Gambar ikan Tuna
    ├── baby_tuna.gif         # Gambar ikan Baby Tuna
    ├── maesang.gif           # Gambar ikan Maesang
    ├── tude.gif              # Gambar ikan Tude
    ├── malalugis.gif         # Gambar ikan Malalugis
    ├── suru.gif              # Gambar ikan Suru
    ├── kababidak.gif         # Gambar ikan Kababidak
    ├── deho.gif              # Gambar ikan Deho
    └── lamadang.gif          # Gambar ikan Lamadang
```

## Spesifikasi Gambar

### Logo Perusahaan
- **File**: `logo_mjs.gif`
- **Ukuran**: 48x48px (akan di-resize otomatis)
- **Format**: GIF (mendukung animasi)
- **Penggunaan**: Header dan Footer

### Gambar Profil Perusahaan
- **File**: `MJS_Dpn.jpg`
- **Ukuran**: 800x600px (akan di-resize otomatis)
- **Format**: JPG
- **Penggunaan**: Halaman About Us

### Gambar Ikan
- **Folder**: `ikan/`
- **Ukuran**: 400x300px (akan di-resize otomatis)
- **Format**: GIF (mendukung animasi)
- **Penggunaan**: Halaman Products dan Home

## Catatan Penting

1. **Nama File**: Pastikan nama file sesuai dengan yang didefinisikan di kode
2. **Format**: Gunakan GIF untuk logo dan ikan agar mendukung animasi
3. **Ukuran**: Gambar akan di-resize otomatis oleh CSS, tapi pastikan rasio aspek yang baik
4. **Optimasi**: Kompres gambar untuk performa website yang lebih baik
5. **Fallback**: Jika gambar tidak ditemukan, akan menggunakan gambar default

## Cara Menambah Gambar Baru

1. Simpan gambar di folder yang sesuai
2. Pastikan nama file sesuai dengan yang didefinisikan di kode
3. Gunakan format yang sesuai (GIF untuk animasi, JPG/PNG untuk gambar statis)
4. Test di browser untuk memastikan gambar muncul dengan benar
