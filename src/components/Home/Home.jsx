import Hero from "../Hero/Hero";
import About from "../About/About";
import WorldMap from "../About/WorldMap";
import ContactUs from "../Contact/ContactUs";
import Solutions from "../Solutions/Solutions";
import { Toaster } from "@/components/ui/toaster"

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Counter /> */}
      <About />
      <Solutions />
      <WorldMap />
      <ContactUs />
      <Toaster />
    </>
  );
};

export default Home;
