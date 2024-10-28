import poster from "../../assets/blue_planet.svg";
import BackgroundArtwork from "../../shared/BackgroundArtWork";

const Hero = () => {
  return (
    <section className=" w-full bg-color-1 h-max pt-32 pb-28 max-lg:pt-36 max-lg:pb-24 ">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className=" flex flex-wrap gap-x-5   h-[100%] relative z-20 mx-auto">
          <div className= "font-jarkata text-white bg-blend-exclusion text-center md:text-start pb-5 w-full md:w-2/4 ">
            <h1 className=" text-6xl lg:text-8xl  font-medium  pb-3 ">
              Empowering You To Thrive In And With Cybersecurity
            </h1>
            <p className=" text-lg md:text-xl ">
              At NMCYBER, we pride in turning your workforce into cyber
              warriors. Our innovative approach to cybersecurity awareness and
              training doesnt just protect your data, it transforms your entire
              organisation
            </p>
            <div className="flex gap-10 mx-5 items-center m-4">
              <button
                className={`text-white text-[21px] font-semibold bg-gradient-to-r from-color-3 to-color-4 px-8 p-2 flex-nowrap rounded-full `}
              >
                Ask for Demo
              </button>
              {/* <button
                className={`text-white text-[21px] font-semibold bg-gradient-to-r from-color-3 to-color-4 px-8 p-2 flex-nowrap rounded-full `}
              >
                Show More
              </button> */}
            </div>
          </div>
          <div className="flex justify-center items-center w-1/4  mx-auto">
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
