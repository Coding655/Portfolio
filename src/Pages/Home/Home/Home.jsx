import About from "../About/About";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";

export default function Home() {
  return (
    <section className="flex flex-col gap-16">
      <Banner />
      <About/>
      <Skills/>
    </section>
  )
}
