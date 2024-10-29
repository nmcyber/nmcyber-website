import { services } from "../../Constants";

const Solutions = () => {
  return (
    <section>
      <div className="w-full px-8 lg:px-16 xl:px-24 max-lg:py-4 font-jarkata">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-color-4 text-[18px]">-NMCYBER SOLUTIONS</h3>
          <h1 className="text-n-2 text-[50px] max-md:text-[40px] font-semibold">
            Our Cybersecurity Solutions
          </h1>
        </div>
        <div className="flex justify-between max-md:flex-wrap flex-shrink  ">
          {services.map((item, i) => (
            <div key={i} className="w-full m-2 ">
              <div className="h-96 p-4 text-[21px] text-n-2 font-semibold flex flex-col max-md:justify-center max-md:items-center ">
                <img className="py-4 h-44" src={item.img} alt="" />
                <h2 className="py-4  my-4  h-24  ">{item.service}</h2>
                <div className="m-4">
                  <button className="  bg-gradient-to-r from-color-3 to-color-4 px-4 py-2 lg:px-8 lg:py-4 rounded-full ">
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
