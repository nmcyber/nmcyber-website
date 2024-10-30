
import { Button } from "../ui/button";
import { poster } from "@/assets";
import BackgroundArtwork from "@/components/shared/BackgroundArtwork";

const Hero = () => {
  return (
    <section className=" relative w-full bg-color-1 min-h-[98dvh] pt-32 max-lg:pt-36 outline outline-fuchsia-400 ">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className=" flex flex-wrap gap-x-5 h-[100%] relative z-20 mx-auto outline outline-lime-500">
                    {/* LEFT COLUMN */}
          <div className= "flex flex-col justify-between gap-4 bg-blend-exclusion text-center md:text-start pb-0 w-full md:w-2/4 outline outline-orange-400 ">
            <h1 className=" font-jarkata text-white text-4xl md:text-5xl lg:text-7xl xl:text-6xl 2xl:text-8xl lg:leading-tight xl:leading-tight 2xl:leading-snug font-medium pb-3 ">
              Empowering You To Thrive In And With Cybersecurity
            </h1>
            <p className=" font-poppins ~text-lg/xl ">
            At NMCYBER, we pride in turning your workforce into cyber
            &#13; warriors. Our innovative approach to cybersecurity awareness and
            &#13; training doesn&#39;t just protect your data, it transforms your entire
            &#13; organisation&#46;
            </p>
            <div className="flex gap-10 mx-5 items-center m-4">
              <Button className=' font-semibold ~px-6/8 ~py-4/8 ~text-lg/2xl rounded-full bg-gradient-to-l from-[#64cdf6] to-transparent backdrop-blur-md bg-white/0'>Secure Your Business</Button>
            </div>
          </div>
                    {/* RIGHT COLUMN */}
          <div className="flex justify-center items-center w-1/5 mx-auto">
            <img className=" " src={poster} alt="poster" width={850} />
          </div>
        </div>
        <BackgroundArtwork />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent "></div>
      </div>
    </section>
  );
};

export default Hero;
