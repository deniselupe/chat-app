import Image from 'next/image';
import seechoFriend from '../public/assets/seecho.webp';
import HeartIcon from '../public/svgs/heart-icon.svg';

export default function HomePage() {
  return (
    <>
      <section className="w-3/4 mx-auto mb-28 text-center">
        <Image 
          src={seechoFriend}
          alt="Picture of the Seecho AI"
          width={124}
          height={62}
          className="mx-auto my-12 sm:my-28"
        />
        <p className="mb-10 text-5xl font-bold">THIS IS MY FRIEND, SEECHO.</p>
        <p className="text-2xl">He is sleeping right now, but there are a bunch more companions just like him that are looking for a friend.</p>
        <button type="button" className="my-8 text-xl w-fit h-12 px-4 text-seecho-darkblue bg-seecho-orange hover:bg-seecho-lightblue rounded-md">
          <HeartIcon className="w-4 inline" />{' '}
          Join Waiting List
        </button>
      </section>
      <section className="bg-seecho-darkblue w-screen h-fit pt-12">
        <div className="text-center text-seecho-orange border border-red-400 w-fit h-fit mx-auto lg:flex">
          <div className="w-[300px] h-[300px] mx-auto lg:mx-4 my-4 border border-seecho-orange">
            <p className="mb-4 font-bold text-xl">Friendly</p>
            <p>Seecho is built with you in mind. No matter what your companion is there to listen and support you whenever you need.</p>
          </div>
          <div className="w-[300px] h-[300px] mx-auto lg:mx-4 my-4 border border-seecho-orange">
            <p className="mb-4 font-bold text-xl">Intelligent</p>
            <p>Trained on the latest data, Seecho will assist you in your daily life. From setting up appointments to teaching you new skills.</p>
          </div>
          <div className="w-[300px] h-[300px] mx-auto lg:mx-4 my-4 border border-seecho-orange">
            <p className="mb-4 font-bold text-xl">Yours</p>
            <p>Seecho is a personal companion built to adapt to you. Our goal is for it to always remain yours and provide you with the tools to make that possible.</p>
          </div>
        </div>
      </section>
    </>
  );
}