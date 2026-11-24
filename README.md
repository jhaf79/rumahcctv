# Rumah CCTV — Website Statis Ringan

Website CCTV untuk **paket CCTV**, **jasa pasang CCTV**, dan **penjualan CCTV**.
Tanpa framework, tanpa font eksternal, tanpa library JS — cepat dimuat dan mudah di-crawl/cache Google.

## Deploy saat ini

- **Repo:** https://github.com/jhaf79/rumahcctv (public, branch `main`)
- **GitHub Pages URL:** https://jhaf79.github.io/rumahcctv/
- **Domain kustom:** https://rumahcctv.my.id (file `CNAME` sudah ditambahkan, Pages sudah dikonfigurasi)
- **WhatsApp:** 0852-8033-0855 → `wa.me/6285280330855`
- **Email:** jhaf79@gmail.com
- **Area layanan:** Depok, Bogor, DKI Jakarta, Bekasi, Tangerang, Banten

### Yang masih perlu dilakukan

1. **Arahkan DNS domain** `rumahcctv.my.id` ke GitHub Pages (lihat langkah di bawah).
2. Setelah DNS aktif & HTTPS terverifikasi, aktifkan *Enforce HTTPS* di **Settings → Pages**.
3. **Ganti testimoni & angka statistik** dengan data pelanggan nyata. Jangan memakai rating palsu / skema `aggregateRating` karena melanggar kebijakan Google.
4. **Ganti `assets/img/og-image.png`** dengan gambar brand asli 1200×630 px bila diinginkan (saat ini sudah berisi nama & nomor yang benar).

### Langkah DNS untuk domain `.my.id`

Di pengaturan DNS domain ( registrar / pengelola domain ), tambahkan:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `jhaf79.github.io` |

Tunggu propagasi (beberapa menit sampai 24 jam), lalu cek di **Settings → Pages** status domain harus berubah jadi hijau/verified. Centang **Enforce HTTPS**.

> Catatan: canonical di semua halaman sudah memakai `https://rumahcctv.my.id` (tanpa www). Pastikan domain yang dipakai adalah versi tanpa www sesuai canonical.

## Struktur file

```
index.html                  Beranda / landing page
paket-cctv.html             Halaman paket & harga
jasa-pasang-cctv.html       Halaman jasa instalasi
jual-cctv.html              Halaman katalog produk
kontak.html                 Halaman kontak + form ke WhatsApp
404.html                    Halaman error (noindex)
CNAME                       Domain kustom GitHub Pages
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

## Cara update konten

```powershell
cd C:\Users\sarman\project\Website
git add -A
git commit -m "Update konten"
git push
```

GitHub Pages otomatis rebuild dalam 1–2 menit setelah push.

## Tips agar cepat masuk Google & rating bagus

- **Google Search Console**: tambahkan properti domain `rumahcctv.my.id`, verifikasi, lalu submit `https://rumahcctv.my.id/sitemap.xml`.
- **Google Business Profile**: daftar & verifikasi bisnis untuk ulasan dan tampilan peta. Minta review pelanggan nyata setelah pemasangan selesai — ini sumber rating paling dipercaya Google.
- Pastikan **WhatsApp aktif dan balasan cepat**.
- Setelah DNS aktif, aktifkan **Enforce HTTPS** di Settings → Pages.
- Tambahkan artikel blog/panduan secara berkala (mis. "Cara memilih CCTV rumah") untuk menambah traffic organik.
- Hindari duplikat konten; tiap halaman sudah punya judul, deskripsi, dan canonical berbeda.

## Catatan performa

- Total CSS ± 10 KB, JS ± 1,5 KB (belum dikompres).
- Gambar berformat SVG/vector dan dimuat dengan `loading="lazy"` di bawah lipat.
- Tidak ada font, CSS framework, atau tracker pihak ketiga yang memberatkan.
