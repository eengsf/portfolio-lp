'use client';

import { useState } from 'react';

const exp = [
  {
    id: 0,
    name: 'UKMFT SOKET',
    role: 'Kepala Divisi Pemrograman',
    priode: '2020',
    main: [
      'Memimpin divisi pemrograman, bertanggung jawab mengelola anggota, menyusun program kerja dan memastikan kelancaran kegiatan divisi',
      'Mengembangkan dan menguji project mikrokontroller untuk digunakan sebagai referensi dalam mensupport kegiatan organisasi',
      'Mengadakan pelatihan berkala untuk anggota divisi, meliputi pengenalan pemrograman robotika hingga praktik algoritma kontrol',
      'Berkoordinasi dan kolaborasi dengan divisi lain untuk kerjasama dengan pihak eksternal seperti study banding robot antar kampus dan pelatihan umum',
    ],
  },
  {
    id: 1,
    name: 'Tim Robot',
    role: 'Kepala Bagian Pemrograman (Robot Berkaki Hexapod)',
    priode: '2020 – 2021',
    main: [
      'Memimpin pengembangan teknis robot berkaki, mulai dari perencanaan algoritma gerak, stabilitas robot, hingga implementasi dan debugging sistem',
      'Berkontribusi pada keberhasilan tim di kompetisi nasional, mencapai peringkat 10 besar nasional',
      'Mengembangkan algoritma inovatif, meningkatkan performa robot pada lintasan kompleks hingga 30% lebih stabil di permukaan tidak rata',
      'Berkoordinasi dengan tim mekanik dan elektronik, memastikan integrasi antar sistem berjalan lancar',
      'Melakukan analisis pasca kompetisi, memberikan masukan strategis untuk perbaikan sistem robot pada kompetisi berikutnya',
      'Mentor anggota junior, membantu transfer pengetahuan tentang algoritma kontrol dan pemrograman robotika',
    ],
  },
  {
    id: 2,
    name: 'Asprak',
    role: 'Asisten Praktikum (Manajemen Basis Data)',
    priode: '2022',
    main: [
      'Memandu praktikum bagi mahasiswa, memberikan pengajaran tentang dasar-dasar manajemen basis data, seperti perancangan database dan implementasi query SQL',
      'Mengembangkan materi modul praktikum yang digunakan oleh 75+ mahasiswa, dengan feedback posistif dari dosen',
      'Melakukan troubleshooting teknis, memberika Solusi untuk kesalahan yang dihadapi mahasiswa selama praktikum',
      'Menilai 75+ laporan dan proyek akhir praktikum mahasiswa berdasarkan standart kriteria',
    ],
  },
  {
    id: 3,
    name: 'Sertifikat',
    role: 'Sertifikat Kompetisi dan Sertifikat Dicoding',
    priode: '',
    main: [
      'Kontes Robot Pemadam Api Indonesia (2020)',
      'Kontes Robot SAR Indonesia (2021)',
      'Learn Basic JavaScript Programming (2023)',
      'Learn Front-End Web Development for Beginners (2023)',
      'Learn to Build Web Applications with React (2023)',
      'Learn Basic Structured Query Language (SQL) (2023)',
      'Learn Basic Web Programming (2023)',
    ],
  },
];

function Experience() {
  const [active, setActive] = useState(0);
  return (
    <div
      id="experience"
      className="flex flex-col justify-center w-full h-screen gap-5 px-10 lg:max-w-4xl md:max-w-3xl sm:max-w-2xl lg:px-28 md:px-20 "
    >
      <div className="flex items-center">
        <h1 className="text-custom-light me-[1vw] text-2xl font-bold">
          02. Experience
        </h1>
        <span className="md:w-[20vw] sm:w-[40vw] w-20 h-[1px] bg-custom-light"></span>
      </div>
      <div className="flex flex-col w-full gap-3 md:flex-row">
        <div className="flex flex-row w-full overflow-auto md:flex-col md:w-1/4">
          {exp.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item.id)}
              className={`p-4 min-w-max text-start  ${
                active === item.id
                  ? 'md:border-s-4 border-s-0 md:border-b-0 border-b-4 border-custom-main2 text-custom-main2'
                  : 'md:border-s-2 border-s-0 md:border-b-0 border-b-2 border-custom-light focus:whitespace-nowrap whitespace-nowrap focus:outline-none text-custom-main3'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col w-full gap-3 md:w-3/4">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-custom-main2">
              {exp[active].role}
            </h2>
            <p className="text-sm text-custom-main3">{exp[active].priode}</p>
          </div>
          <ul className="pl-5 list-disc">
            {exp[active].main.map((item, index) => (
              <li key={index} className="mb-1 ml-2 text-sm text-custom-main3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
