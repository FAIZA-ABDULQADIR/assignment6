import Hero from "./components/hero";
import About from "./components/about";
import MainFocus from "./components/mainfocus"
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <MainFocus/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}