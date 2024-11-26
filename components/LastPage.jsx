'use client';

import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const sosmed = [
  {
    logo: (
      <FiGithub
        size={20}
        className="text-custom-main3 hover:text-custom-main2"
      />
    ),
    link: 'https://github.com/eengsf',
  },
  {
    logo: (
      <FaLinkedinIn
        size={20}
        className="text-custom-main3 hover:text-custom-main2"
      />
    ),
    link: 'https://www.linkedin.com/in/shofiyul-fuad-b8836628b/',
  },
  {
    logo: (
      <SiTiktok
        size={20}
        className="text-custom-main3 hover:text-custom-main2"
      />
    ),
    link: 'https://www.tiktok.com/@eengsf_?_t=8ia5kTpOlQf&_r=1',
  },
  {
    logo: (
      <FaYoutube
        size={20}
        className="text-custom-main3 hover:text-custom-main2"
      />
    ),
    link: 'https://www.youtube.com/channel/UC0vqQM71BwT-blOJ2deI4bw',
  },
];

function LastPage() {
  const handleEmailClick = () => {
    const recipient = 'shofiyulfuad797@gmail.com';

    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  };
  return (
    <div
      id="contact"
      className="relative flex flex-col items-center justify-center w-full h-screen gap-5 px-10 lg:max-w-4xl md:max-w-3xl sm:max-w-2xl lg:px-28 md:px-20"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center">
          <h1 className="text-custom-main2 me-[1vw] font-bold">
            04. Contact Me?
          </h1>
        </div>
        <h2 className="text-5xl font-bold text-custom-light">Hubungi Saya</h2>
        <div className="flex flex-col text-center">
          <p className="text-custom-main3">Universitas Trunojoyo</p>
          <p className="text-custom-main3">S1 Teknik Elektro</p>
          <p className="text-custom-main3">
            Implementasi Algoritma Trajectory Planning Pada Keseimbangan Robot
            Hexapod Dalam Navigasi Tangga
          </p>
        </div>
        <button
          onClick={handleEmailClick}
          className="px-10 py-4 transition-all duration-200 border rounded-md border-custom-main2 hover:scale-105 hover:border-e-4 hover:border-b-4"
        >
          Say Hello
        </button>
      </div>

      <div className="absolute flex flex-col gap-1 bottom-3">
        <div className="flex items-center justify-center gap-5">
          {sosmed.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="text-custom-main3 hover:text-custom-main2"
            >
              {item.logo}
            </Link>
          ))}
        </div>
        <p className="text-sm text-custom-main3">shofiyulfuad797@gmail.com</p>
      </div>
    </div>
  );
}

export default LastPage;
