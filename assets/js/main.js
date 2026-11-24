/* Rumah CCTV - minimal progressive enhancement */
(function () {
  'use strict';

  // Nomor WhatsApp (format internasional, tanpa tanda + dan spasi)
  var WA_NUMBER = '6285280330855';

  // Menu mobile
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Form kontak -> WhatsApp (fallback tetap tersedia tanpa JS)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (id) { return (document.getElementById(id) || {}).value || ''; };
      var message = [
        'Halo Rumah CCTV, saya ingin konsultasi:',
        '',
        'Nama: ' + v('cf-nama'),
        'No. HP: ' + v('cf-hp'),
        'Kebutuhan: ' + v('cf-kebutuhan'),
        'Lokasi: ' + v('cf-lokasi'),
        '',
        'Pesan: ' + v('cf-pesan')
      ].join('\n');
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message), '_blank', 'noopener');
    });
  }

  // Tahun di footer
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
