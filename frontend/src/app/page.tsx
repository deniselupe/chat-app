import Header from "@/components/header";
import Footer from "@/components/footer";
import HomepageBunnies from "@/public/svgs/homepage-bunnies.svg";

export default function HomePage() {
  return (
    <main className="w-5/6 md:w-3/4 mx-auto flex-1">
      <section className="md:pt-14 mb-4">
        <div className="w-full h-full flex flex-col md:flex-row md:justify-between md:items-start lg:items-center animate-fade">
          <div id="left" className="pb-10 md:mr-4 max-w-[400px] text-custom-tan drop-shadow-text">
            <h1 className="mb-6 text-6xl font-bold">
              Chat from 
              <br />
              anywhere, 
              <br />
              anytime.
            </h1>
            <p className="mb-8 text-xl font-light">Fast, easy, free.</p>
            <div className="text-sm">
              <button 
                type="button"
                className="py-2.5 px-4 mr-4 text-black bg-custom-tan border border-custom-tan rounded-full hover:text-custom-tan hover:bg-transparent"
              >
                Try it Free
              </button>
              <button
                type="button"
                className="py-2.5 px-4 border border-custom-tan rounded-full hover:text-black hover:bg-custom-tan"
              >
                Learn More
              </button>
            </div>
          </div>
          <div id="right" className="md:w-1/2 animate-fade">
            <HomepageBunnies className="w-11/12" />
          </div>
        </div>
      </section>
    </main>
  );
}
