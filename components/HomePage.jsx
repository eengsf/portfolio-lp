import Link from 'next/link';

function HomePage() {
  return (
    <div
      id="home"
      className="scroll-mt-24 flex flex-col w-full gap-5 h-[calc(100vh-80px)] md:pt-12 sm:pt-5 pt-12 lg:px-28 md:px-20 px-10 "
    >
      <h2 className="mb-3 text-custom-main3">Hi, nama saya</h2>
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-custom-light sm:text-6xl md:text-7xl">
          Shofiyul Fuad.
        </h1>
        <p className="text-4xl font-bold sm:text-6xl md:text-6xl text-custom-main3">
          Pemrograman Web & Robotik
        </p>
      </div>

      <p className="w-full text-sm md:w-1/2 text-custom-main3">
        Saya Lulusan Teknik Elektro dengan pengalaman dibidang pemrograman
        robotic, Terbiasa bekerja dengan algoritma kontrol yang mengasah
        kemampuan problem solving dan logika berpikir sistematis. Saat ini
        berfokus pada pengembangan web. Berpengalaman menyelesaikan proyek web
        mandiri dan memiliki motivasi tinggi untuk terus belajar teknologi baru.
        Siap berkontribusi dalam pengembangan aplikasi web yang inovatif dan
        fungsional
      </p>
      <Link
        href={
          'https://drive.google.com/file/d/1DbHinDeKrgpjMHM7OKMjdtDxdbkWhrcc/view?usp=sharing'
        }
        target="_blank"
        className="transition-all duration-200 px-16 py-4 border rounded-md mt-7 text-start border-custom-main2 w-fit hover:scale-[102%] hover:border-e-4 hover:border-b-4"
      >
        My Resume
      </Link>
    </div>
  );
}

export default HomePage;
