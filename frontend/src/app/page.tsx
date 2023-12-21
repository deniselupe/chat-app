import NavBar from "@/components/navbar";

export default function HomePage() {
  return (
    <main className="w-5/6 lg:w-3/4 h-dvh mx-auto flex flex-col overflow-hidden">
      <NavBar />
      <section className="flex-1 md:flex md:flex-row">
        <aside className="h-1/2 md:w-1/2 md:h-full flex items-center border">
          <div className="max-w-[400px] text-custom-tan drop-shadow-xl">
            <h1 className="text-6xl font-bold">Chat from anywhere, anytime.</h1>
            <h3 className="mt-4 text-xl font-light">Fast, easy, free.</h3>
            <div className="mt-8 text-sm">
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
        </aside>
        <aside className="h-1/2 md:w-1/2 md:h-full border">
          right
        </aside>
      </section>
    </main>
  );
}
