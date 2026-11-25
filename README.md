# Rumah CCTV — Website Statis Ringan

Website CCTV untuk **paket CCTV**, **jasa pasang CCTV**, dan **penjualan CCTV**.
Tanpa framework, tanpa font eksternal, tanpa library JS — cepat dimuat dan mudah di-crawl/cache Google.

## Deploy saat ini

- **Repo:** https://github.com/jhaf79/rumahcctv (public, branch `main`)
- **GitHub Pages URL:** https://jhaf79.github.io/rumahcctv/
- **Domain kustom:** https://rumahcctv.my.id (Aktif HTTPS via Cloudflare proxy, origin GitHub Pages)
- **WhatsApp:** 0852-8033-0855 → `wa.me/6285280330855`
- **Email:** jhaf79@gmail.com
- **Area layanan:** Depok, Bogor, DKI Jakarta, Bekasi, Tangerang, Banten

### Konfigurasi DNS & SSL (sudah aktif)

Nameserver domain diarahkan ke Cloudflare:

- `carol.ns.cloudflare.com`
- `george.ns.cloudflare.com`

Di Cloudflare → **DNS → Records**:

| Type | Name | Value | Proxy |
|---|---|---|---|
| A | `@` | `185.199.108.153` | 🟠 Proxied |
| A | `@` | `185.199.109.153` | 🟠 Proxied |
| A | `@` | `185.199.110.153` | 🟠 Proxied |
| A | `@` | `185.199.111.153` | 🟠 Proxied |
| CNAME | `www` | `jhaf79.github.io` | 🟠 Proxied |

Cloudflare → **SSL/TLS → Overview → Flexible**, dan **Edge Certificates → Always Use HTTPS → On**.

Hasil: `https://rumahcctv.my.id` → 200 OK, HTTP otomatis 301 ke HTTPS.

### Yang masih perlu dilakukan

1. **Verifikasi domain & submit sitemap** di Google Search Console: https://search.google.com/search-console → Add property → Domain → `rumahcctv.my.id` → verifikasi TXT → Sitemaps → `sitemap.xml`.
2. **Ganti testimoni & angka statistik** dengan data pelanggan nyata. Jangan memakai rating palsu / skema `aggregateRating` karena melanggar kebijakan Google.
3. **Ganti `assets/img/og-image.png`** dengan gambar brand asli 1200×630 px bila diinginkan (saat ini sudah berisi nama & nomor yang benar).

> Catatan: canonical di semua halaman memakai `https://rumahcctv.my.id` (tanpa www) — sudah sesuai dengan domain utama.

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
