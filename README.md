# Web-Sekolah

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Website profil sekolah statis untuk **SMK Alpanza Bogor**. Halaman ini menampilkan
informasi sekolah, program keahlian, fasilitas, berita, dan informasi PPDB.

## Teknologi

- HTML5, CSS3, dan JavaScript vanilla.
- [Bootstrap 5](https://getbootstrap.com/) untuk grid dan komponen.
- [Bootstrap Icons](https://icons.getbootstrap.com/) untuk ikon.
- [AOS](https://michalsnik.github.io/aos/) untuk animasi saat scroll.
- Tanpa build step - cukup buka `index.html`.

## Menjalankan lokal

Karena semua aset dimuat lewat CDN, cukup jalankan server statis sederhana:

```bash
python3 -m http.server 8080
```

Lalu buka <http://localhost:8080>.

Bisa juga membuka `index.html` langsung di browser, tetapi server statis lebih
konsisten untuk pengujian.

## Struktur

```text
Web-Sekolah/
├── index.html   # seluruh halaman
├── style.css    # tema, layout, dan animasi
└── main.js      # loading screen, navbar, smooth scroll, dsb.
```

## Kustomisasi

- Ganti nama sekolah, alamat, dan kontak di `index.html`.
- Warna utama dan font ada di bagian `:root` pada `style.css`.
- Program keahlian dan bagian lain bisa ditambah dengan menyalin pola section
  yang sudah ada.

## Lisensi

[MIT](LICENSE) © 2026 Panz-08
