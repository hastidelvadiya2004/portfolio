import About from "@/components/About";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Home";
import Header from "@/components/Navbar";
import Gallery from "@/components/Projects";
import Team from "@/components/Skills";

export default function Home() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <Team></Team>
    <Gallery></Gallery>
    {/* <ContactForm></ContactForm> */}
    <Footer></Footer>
    </>
  );
}
