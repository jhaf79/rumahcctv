# Rumah CCTV — Website Statis Ringan

Website CCTV untuk **paket CCTV**, **jasa pasang CCTV**, dan **penjualan CCTV**.
Tanpa framework, tanpa font eksternal, tanpa library JS — total aset sangat kecil sehingga cepat dimuat dan mudah di-crawl/cache Google.

## Struktur

```
index.html                  Beranda / landing page
paket-cctv.html             Halaman paket & harga
jasa-pasang-cctv.html       Halaman jasa instalasi
jual-cctv.html              Halaman katalog produk
kontak.html                 Halaman kontak + form ke WhatsApp
404.html                    Halaman error (noindex)
.htaccess.example           Cache & kompresi untuk hosting Apache (opsional)
assets/css/style.css        Semua styling
assets/js/main.js           Menu mobile + form WhatsApp
assets/img/logo.svg         Logo
assets/img/favicon.svg      Favicon
assets/img/hero-camera.svg  Ilustrasi hero
assets/img/og-image.png     Gambar preview WhatsApp/Google (1200x630)
robots.txt                  Arahan crawler
sitemap.xml                 Daftar halaman untuk Google
```

## WAJIB diganti sebelum dipublish

1. **Nomor WhatsApp** — cari `6285280330855` di semua file HTML dan `assets/js/main.js`, ganti dengan nomor Anda (format: `62` + nomor tanpa `0`, tanpa spasi/tanda `+`).
2. **Nama & domain** — cari `Rumah CCTV`, `rumahcctv.my.id`, dan `jhaf79@gmail.com`, ganti dengan data bisnis Anda. Perbarui juga semua `canonical`, `og:url`, `robots.txt`, dan `sitemap.xml`.
3. **Alamat, jam buka, harga, dan area layanan** — saat ini masih contoh. Sesuaikan dengan data nyata di `index.html` (JSON-LD `LocalBusiness`) dan teks halaman.
4. **Testimoni & angka statistik** — contoh konten. **Ganti dengan ulasan pelanggan yang nyata** sebelum menambahkan skema `aggregateRating` / `Review`. Rating palsu melanggar kebijakan Google.
5. **`og-image.png`** — ganti dengan gambar brand Anda ukuran 1200×630 px (PNG/JPG) agar preview WhatsApp & media sosial terlihat baik.

## Cara pasang

### Opsi termudah: GitHub Pages / Netlify / Vercel
1. Upload seluruh folder ke repository GitHub.
2. Aktifkan GitHub Pages (branch `main`, root) atau drag folder ke Netlify Drop.
3. Set domain sendiri dan ganti semua URL canonical/sitemap ke domain tersebut.

### Opsi hosting cPanel (shared hosting)
1. Upload semua file ke `public_html/`.
2. Pastikan `robots.txt` dan `sitemap.xml` berada di root domain.
3. Aktifkan HTTPS (Let's Encrypt) — wajib untuk kepercayaan & SEO.
4. Opsional: rename `.htaccess.example` menjadi `.htaccess` untuk mengaktifkan browser cache + kompresi gzip.

## Tips agar cepat masuk Google & rating bagus

- **Daftarkan ke Google Search Console**, tambahkan properti domain, lalu submit `sitemap.xml` (mis. `https://domainanda.com/sitemap.xml`).
- **Buat & verifikasi Google Business Profile** untuk ulasan dan tampilan peta. Ini sumber rating paling dipercaya Google. Minta ulasan pelanggan nyata setelah pemasangan selesai.
- Pastikan **nomor WhatsApp aktif dan balasan cepat** — sinyal pengalaman pengguna yang baik.
- Gunakan **HTTPS**, aktifkan **Gzip/Brotli + browser caching** di hosting (file statis akan ter-cache dengan baik).
- Isi semua data `LocalBusiness` di JSON-LD dengan alamat & jam nyata agar eligible untuk rich result.
- Tambahkan artikel blog/panduan (mis. "Cara memilih CCTV rumah") secara berkala untuk menambah traffic organik.
- Hindari duplikat konten antar halaman; tiap halaman sudah punya judul, deskripsi, dan canonical berbeda.

## Catatan performa

- Total CSS ± 10 KB, JS ± 1,5 KB (belum dikompres).
- Gambar berformat SVG/vector dan dimuat dengan `loading="lazy"` di bawah lipat.
- Tidak ada font, CSS framework, atau tracker pihak ketiga yang memberatkan.
