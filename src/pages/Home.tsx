import Menu from "../components/shared/Menu";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
function Home() {
  return (
    <main className="mb-[120px]">
      <section className="bg-black-300 lg:px-[165px]">
        <Hero />
      </section>
      <div className="px-6 lg:px-[165px]">
        <div className="mb-[120px] mt-[100px] flex flex-col items-center justify-center gap-[68px] md:flex-row md:gap-[10px] lg:justify-between">
          <Menu />
        </div>
        <Featured />
      </div>
    </main>
  );
}

export default Home;
