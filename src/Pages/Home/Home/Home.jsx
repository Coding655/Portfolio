import { Helmet } from "react-helmet";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";

export default function Home() {
  return (
    <section className="flex flex-col gap-16">
      <Banner />
      <About />
      <Skills />
      <Categories />
      <Contact />
    </section>
  )
}
