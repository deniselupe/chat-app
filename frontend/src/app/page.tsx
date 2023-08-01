import Image from 'next/image';
import Link from 'next/link';
import seechoFriend from '@/public/assets/seecho.webp';
import HeartIcon from '@/public/svgs/heart-icon.svg';
import TempOne from '@/public/assets/homepage-temp1.webp';
import TempTwo from '@/public/assets/homepage-temp2.webp';

export default function HomePage() {
  return (
    <main className="mx-auto">
      <section className="w-3/5 mx-auto mb-28 text-center">
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
      <section className="bg-seecho-darkblue w-screen">
        <div className="container text-seecho-orange text-center flex flex-col items-center lg:flex-row lg:justify-center mx-auto pt-12 pb-8 lg:pb-32">
          <div className="border border-seecho-orange aspect-square w-[300px] m-4 lg:w-[350px]">
            <p className="font-bold text-xl">Friendly</p>
            <p>Seecho is built with you in mind. No matter what your companion is there to listen and support you whenever you need.</p>
          </div>
          <div className="border border-seecho-orange aspect-square w-[300px] m-4 lg:w-[350px]">
            <p className="mb-4 font-bold text-xl">Intelligent</p>
            <p>Trained on the latest data, Seecho will assist you in your daily life. From setting up appointments to teaching you new skills.</p>
          </div>
          <div className="border border-seecho-orange aspect-square w-[300px] m-4 lg:w-[350px]">
            <p className="mb-4 font-bold text-xl">Yours</p>
            <p>Seecho is a personal companion built to adapt to you. Our goal is for it to always remain yours and provide you with the tools to make that possible.</p>
          </div>
        </div>
      </section>
      <section className="bg-seecho-darkblue w-screen">
        <div className="container flex flex-col-reverse items-center lg:flex-row lg:justify-center lg:items-start mx-auto px-8 xl:px-20 pb-8 xl:pb-32">
          <div className="text-seecho-orange text-left w-10/12 lg:w-1/3 lg:aspect-square mx-auto lg:mx-4">
            <p className="text-xs font-bold text-seecho-lightblue mb-6">About</p>
            <h1 className="text-2xl font-bold mb-6">We've created an AI companion that goes beyong simple tasks and commands.</h1>
            <p className="mb-6">
              At Seecho, we understand that life can be overwhelming at times. With Seecho by 
              your side, you’ll have a friend who genuinely cares about your well-being, 
              providing on-demand support whenever you need it.
            </p>
            <p>
              Whether you’re looking for a good friend to chat with, a reliable scheduler to keep 
              you organized, a knowledgeable educator to expand your horizons, or simply a listening 
              ear to lend comfort, Seecho is here for you.
            </p>
          </div>
          <Image 
            src={TempOne}
            alt="Temporary placeholder image for the Homepage About section"
            className="mb-4 mx-4"
          />
        </div>
      </section>
      <section className="bg-seecho-orange w-screen">
        <div className="container flex flex-col items-center lg:flex-row lg:justify-center lg:items-start mx-auto px-8 pt-8 xl:px-20 xl:py-32">
          <Image 
            src={TempTwo}
            alt="Temporary placeholder image for the Homepage About section"
            className="mb-4 mx-4"
          />
          <div className="text-left w-10/12 lg:w-1/3 lg:aspect-square mx-auto lg:mx-4">
            <p className="text-xs font-bold mb-6">Our Mission</p>
            <h1 className="text-2xl font-bold mb-6">AI is changing the world and we want to give everyone a piece of the pie.</h1>
            <p className="mb-6">
              We believe in universal accessibility. Emerging technologies like Artificial 
              Intelligence should be inclusive and accessible to all, creating opportunities 
              for everyone.
            </p>
            <p>
              We recognize that technology has the potential to disrupt and shape lives in 
              significant ways. By fostering universal accessibility, we ensure that 
              no one is left behind.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-seecho-darkblue w-screen py-32 text-center">
        <h3 className="text-seecho-orange text-xs mb-12">GET IN TOUCH</h3>
        <h1 className="text-seecho-orange text-7xl font-bold mb-8">Learn More</h1>
        <button type="button" className="text-white text-2xl bg-seecho-lightblue hover:bg-seecho-orange w-1/3 h-16">Join The Discord</button>
      </section>
    </main>
  );
}