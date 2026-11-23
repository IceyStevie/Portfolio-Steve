// Semua isi portofolio ada di file ini.
// Ganti teks di sini; komponen tidak perlu disentuh.
// Bagian dalam [kurung siku] adalah pengisi yang harus Anda ganti.

export default {
  nama: 'Steve',
  status: 'Terbuka untuk posisi Frontend, Backend, dan Fullstack Developer',
  headline: 'Saya membangun aplikasi web yang rapi di layar dan kokoh di server.',
  ringkasan:
    'Developer web lulusan Teknik Informatika Politeknik Negeri Batam. Saya mengerjakan antarmuka, API, dan basis data sampai aplikasi benar-benar dipakai. Membangun web E-Checksheet yang digunakan QC untuk mempermudah pekerjaannya.',

  // Ditampilkan sebagai kartu kode di hero
  profilJson: {
    nama: 'Steve Yosafat Marpaung',
    peran: ['fullstack'],
    stack: ['Laravel', 'Vue.js', 'Quasar', 'MySQL', 'Node.js', 'REST API', 'Odoo17', 'Python'],
    lokasi: 'Tanjungpinang, Indonesia',
    siap_bekerja: true
  },

  // tipe: 'frontend' | 'backend' | 'fullstack'  (dipakai oleh filter)
  proyek: [
    {
      id: 'echecksheet',
      tipe: 'fullstack',
      nama: 'E-Checksheet',
      deskripsi:
        'Aplikasi web checksheet digital untuk mengoptimalkan proses quality control di PT XYZ.',
      stack: ['Laravel', 'Vue.js', 'Quasar', 'MySQL'],
      peran:
        'Fullstack developer: Solo Developer membangun semua antarmuka, API, dan basis data sampai aplikasi benar-benar dipakai.',
      hasil: [
        'Diuji oleh pengguna QC dan diterapkan di scenario lini produksi.',
        'Diuji oleh supervisor QC dan diterapkan di scenario lini produksi.',
      ],
      tautan: [
        { label: 'Demo langsung', url: 'https://youtu.be/p79PNy8a6hA' },
        { label: 'Repositori GitHub', url: 'https://github.com/IceyStevie/E-Checksheet' }
      ]
    },
    // {
    //   id: 'proyek-frontend',
    //   tipe: 'frontend',
    //   nama: '[Nama Proyek 2]',
    //   deskripsi:
    //     '[Satu kalimat: antarmuka apa yang Anda bangun dan masalah pengguna yang dipecahkan.]',
    //   stack: ['[Vue.js]', '[Tailwind CSS]', '[REST API]'],
    //   peran:
    //     '[Komponen, tata letak responsif, integrasi API, aksesibilitas, atau performa yang Anda tangani.]',
    //   hasil: [
    //     '[Hasil terukur 1, misalnya skor Lighthouse performa X dan aksesibilitas Y]',
    //     '[Hasil terukur 2, misalnya tampil benar di lebar layar 360 sampai 1440 piksel]'
    //   ],
    //   tautan: [
    //     { label: 'Demo langsung', url: '' },
    //     { label: 'Repositori GitHub', url: '' }
    //   ]
    // },
    // {
    //   id: 'proyek-backend',
    //   tipe: 'backend',
    //   nama: '[Nama Proyek 3]',
    //   deskripsi:
    //     '[Satu kalimat: layanan atau API apa yang Anda bangun dan siapa yang memakainya.]',
    //   stack: ['[Node.js atau Laravel]', '[MySQL atau PostgreSQL]', '[Docker]'],
    //   peran:
    //     '[Rancangan skema, endpoint, validasi, autentikasi, pengujian otomatis, atau deployment.]',
    //   hasil: [
    //     '[Hasil terukur 1, misalnya X endpoint terdokumentasi di Postman atau Swagger]',
    //     '[Hasil terukur 2, misalnya waktu respons rata-rata di bawah X ms]'
    //   ],
    //   tautan: [
    //     { label: 'Dokumentasi API', url: '' },
    //     { label: 'Repositori GitHub', url: '' }
    //   ]
    // }
  ],

  // Hapus yang tidak Anda kuasai; semua yang tertulis bisa ditanyakan saat wawancara.
  keahlian: [
    { grup: 'Frontend', item: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Quasar', 'Desain responsif'] },
    { grup: 'Backend', item: ['PHP', 'Laravel', 'Node.js', 'REST API', 'Autentikasi'] },
    { grup: 'Data dan alat kerja', item: ['MySQL', 'Git dan GitHub', 'Postman', 'Pengujian black box', 'Figma'] }
  ],

  pendidikan: {
    judul: 'Teknik Informatika, Politeknik Negeri Batam',
    periode: '[2023] sampai [2026] · IPK [3,64]',
    catatan:
      'Tugas akhir: Rancang Bangun Aplikasi Web E-Checksheet untuk Optimalisasi Proses Quality Control pada PT XYZ'
  },

  pengalaman: [
    {
      judul: 'Fullstack Developer Intern, PT Sat Nusapersada',
      periode: 'Juli 2025 sampai Maret 2026',
      poin: [
        'Membangun aplikasi web E-Checksheet untuk mempermudah proses quality control.',
        'Memperbaiki banyak bug di sistem ERP Odoo17 yang digunakan perusahaan.',
        'Membantu tim frontend dan backend dalam pengembangan aplikasi web internal perusahaan.',
        'Mengikuti proses pengembangan perangkat lunak berbasis Agile, termasuk daily standup, sprint planning, dan code review.',
        'Memperbaiki scheduler di Odoo17 agar proses produksi berjalan lebih efisien.'
      ]
    }
  ],

  kontak: [
    { label: 'Email', nilai: 'steveym3111@gmail.com / iceystevie@gmail.com' },
    { label: 'GitHub', nilai: 'https://github.com/IceyStevie' },
    { label: 'LinkedIn', nilai: 'https://www.linkedin.com/in/steve-marpaung-178018287/' },
  ]
}
