import About from "../About/About"
import Counter from "../About/Counter"
import ContactUs from "../Contact/ContactUs"
import Solutions from "../Solutions/Solutions"
import WorldMap from "../Worldmap/Worldmap"
import Hero from "./Hero"


const Home = () => {
  return (
    <>
    <Hero />
    <Counter />
    <About />
    <Solutions/>
    <WorldMap />
    <ContactUs/>
    </>
  )
}

export default Home