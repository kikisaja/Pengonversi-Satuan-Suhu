# 1. 1. Temperature Converter (Centralized Base Architecture Module)

Aplikasi kalkulator konversi satuan metrik suhu fungsional (*Temperature Converter*) terpadu yang memetakan relasi timbal balik antara Celsius, Fahrenheit, Kelvin, dan Reaumur secara simultan menggunakan **Vanilla JavaScript**. Fokus utama dari rancangan modul ini adalah melatih logika pemula dalam mereduksi redundansi rumus matematika lewat arsitektur titik tengah (*Centralized Base Architecture*).

Sangat direkomendasikan bagi siswa SMK Jurusan RPL kelas dasar untuk melatih implementasi kontrol alur logika kemudi `switch-case`.

---

## 🚀 Fitur Utama

* **Centralized Base Normalization:** Alih-alih membuat rumus kombinasi silang yang berjumlah sangat banyak, program ini menormalisasi variabel masukan apa pun terlebih dahulu ke dalam satu satuan standar universal tunggal (Celsius) sebelum disebar luas.
* **On-Change Instant Reactive:** Selain mengandalkan pemicu eksekusi manual via tombol, selektor komponen `<select>` dipasangi sensor pemantau `.addEventListener('change')` guna memperbarui grid panel hasil secara instan saat opsi diganti.
* **Smart Decimal Truncation:** Memanfaatkan evaluasi bersyarat `Number.isInteger()` dikombinasikan dengan metode pembatasan `.toFixed(2)` untuk mencegah rusaknya layout akibat luapan angka desimal tak terhingga.
* **Grid Pop Art Layouting:** Antarmuka responsif berbentuk kartu kuadran $2 \times 2$ memanfaatkan properti layout CSS modern Grid System (`grid-template-columns`).

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur kolom masukan angka numerik, opsi dropdown menu, dan kuadran hasil kartu
├── style.css        # Skema layouting Grid 2x2, pewarnaan pastel pop art kontras, dan pembatasan pembungkusan
└── script.js        # Normalizer switch-case suhu, mesin pembulat desimal, dan mutator text antarmuka
