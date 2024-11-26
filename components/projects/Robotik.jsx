import Image from 'next/image';
import Link from 'next/link';

const robotik = [
  {
    name: 'Fire Fighting Robot',
    event: 'Misi memadamkan beberapa titik api di ruangan yang berbeda beda',
    img: '/krpai.jpg',
    link: 'https://www.youtube.com/watch?v=diCfQHWRh60&t=1s',
  },
  {
    name: 'SAR Robot',
    event:
      'Misi memadamkan api dan menyelamatkan korban (memindahkan object dummy) di ruangan yang berbeda',
    img: '/krsri.png',
    link: 'https://www.youtube.com/watch?v=4l2zqPrFwx8&t=17s',
  },
  {
    name: 'Hexapod Robot',
    event:
      'Implementasi Algoritma Trajectory Planning Pada Keseimbangan Robot Hexapod Dalam Navigasi Tangga',
    img: '/hexapod.jpg',
    link: 'https://www.youtube.com/watch?v=UPSTKmEljeU',
  },
];

function Robotik() {
  return (
    <div className="flex flex-col w-full gap-5 px-10 pt-12 scroll-mt-10 h-fit md:pt-12 sm:pt-5 lg:px-28 md:px-20">
      <div className="flex items-center justify-center">
        <h1 className="text-custom-light me-[1vw] text-2xl font-bold">
          Project Robotik
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {robotik.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            key={index}
            className="flex flex-col items-center justify-center rounded-md bg-custom-dark w-full lg:aspect-[7/5] relative group"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute top-0 w-full h-full transition-all duration-500 ease-in-out rounded-md bg-custom-main2 bg-opacity-70 group-hover:bg-opacity-30"></div>

            <div className="absolute text-3xl text-red-600 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="70px"
                height="70px"
              >
                <path
                  fill="#FF3D00"
                  d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                />
                <path fill="#FFF" d="M20 31L20 17 32 24z" />
              </svg>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-5 transition-all duration-500 opacity-100 group-hover:opacity-0">
              <h1 className="text-xl font-bold text-custom-main1">
                {item.name}
              </h1>
              <p className="text-xs text-center text-custom-main1">
                {item.event}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Robotik;
