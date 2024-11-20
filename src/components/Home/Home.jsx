import About from "../About/About";
import Counter from "../About/Counter";
import WorldMap from "../About/WorldMap";
import ContactUs from "../Contact/ContactUs";
import Solutions from "../Solutions/Solutions";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Counter /> */}
      <About />
      <Solutions />
      <WorldMap />
      <ContactUs />
    </>
  );
};

export default Home;
