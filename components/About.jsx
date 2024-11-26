import Image from 'next/image';
import { RiArrowDropRightFill } from 'react-icons/ri';

const skill = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Tailwind',
  'ReactJs',
  'NextJs',
  'Shadcn Ui',
  'Firebase',
  'MySQL',
  'C Lang',
  'Arduino',
];

function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-full gap-5 px-10 pt-12 scroll-mt-10 h-fit md:pt-12 sm:pt-5 lg:px-28 md:px-20"
    >
      <div className="flex items-center ">
        <h1 className="text-custom-light me-[1vw] text-2xl font-bold">
          01. About Me
        </h1>
        <span className="md:w-[20vw] w-[40vw] h-[1px] bg-custom-light"></span>
      </div>
      <div className="flex flex-col w-full gap-0 lg:gap-16 lg:flex-row">
        <div className="lg:w-[60%] w-full flex flex-col gap-5">
          <p className="text-custom-main3">
            Halo! Nama saya Shofiyul Fuad. Saya adalah lulusan Universitas
            Trunojoyo dan pernah aktif dalam organisasi UKMFT SOKET yang
            berfokus pada{' '}
            <span className="text-custom-main2">bidang robotika</span>. Di UKMFT
            SOKET, saya bergabung dengan tim robot dan mendapatkan banyak
            pengalaman, terutama dalam pemrograman robotika, yang membawa saya
            untuk berpartisipasi dalam berbagai{' '}
            <span className="text-custom-main2"> Kontes Robot Indonesia </span>.
          </p>
          <p className="text-custom-main3">
            Pada semester akhir, saya mulai mengembangkan minat dalam{' '}
            <span className="text-custom-main2">pemrograman web</span> Saya
            banyak belajar tentang pengembangan web melalui berbagai platform
            media sosial dan mengikuti beberapa sesi pelatihan online.
          </p>
          <p className="text-custom-main3">
            Berikut adalah beberapa teknologi yang telah saya kuasai:
          </p>
          <ul className="grid grid-cols-3 list-disc">
            {skill.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-1.5 text-custom-main3 whitespace-nowrap"
              >
                <RiArrowDropRightFill size={24} className="text-custom-main3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-[40%] w-1/2 aspect-square overflow-hidden flex items-center justify-center mx-auto">
          <Image
            src="/eeng-abu.jpg"
            alt="logo"
            width={500}
            height={500}
            className="object-cover w-[80%] h-[80%] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
