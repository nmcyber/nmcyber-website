import About from "../About/About"
import Counter from "../About/Counter"
import ContactUs from "../Contact/ContactUs"
import Solutions from "../Solutions/Solutions"
import Hero from "./Hero"


const Home = () => {
  return (
    <>
    <Hero />
    <Counter />
    <About />
    <Solutions/>
    <ContactUs/>
    </>
  )
}

export default Home