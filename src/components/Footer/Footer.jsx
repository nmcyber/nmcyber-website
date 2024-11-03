import { logo } from "@/assets";
import { GradientButton } from "../shared/GradientButton";
import { contactInfo, navigation, socialMedia } from "@/Constants";

const Footer = () => {
  return (
    <footer className=" container flex w-full max-md:flex-col mt-2  ">
      <div className=" flex w-full lg:w-[33%] flex-wrap">
        <div className="flex w-full mt-2 -ml-12  ">
          <img className=" " src={logo} alt="logo" width={220} />
          <div className=" -ml-12 w-full mt-2 ">
            <b className="text-[27px]">
              NM<span className=" text-tertiary">CYBER</span>
            </b>
            <p className="text-[18px]">
              Turning Cyber Security Pains Into Gains
            </p>
          </div>
        </div>
        <div className="w-full mx-6 -mt-16 space-x-2 lg:space-x-4  flex items-center">
          <input
            type="email"
            name="email "
            placeholder="Your Email Address"
            className="w-2/3 p-3 border-gray-300 rounded-full mb-4"
          />
          <button className=" font-semibold ">
            <GradientButton children={"Subscibe"} />
          </button>
        </div>
        <div className="flex w-full space-x-10 lg:space-x-12 m-5 ">
          {socialMedia.map((item, index) => (
            <div key={index} className="  ">
              <img
                className="rounded-full p-2 m-2  cursor-pointer bg-white transform ease-in-out duration-500 hover:-translate-y-1   hover:transition-colors hover:bg-tertiary "
                src={item.img}
                alt="logo"
                width={45}
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full lg:w-[33%] mx-6 flex flex-col lg:justify-center lg:items-center space-y-5">
        <h1 className="text-tertiary font-semibold text-[24px] lg:-mt-4 lg:mb-2 ">
          Quick Links
        </h1>
        <div className="flex flex-col space-y-3 text-[21px] font-semibold mx-2    ">
          {navigation.map((item, index) => (
            <a
              className=" hover:translate-x-2 hover:transition-colors hover:text-tertiary transform ease-in-out duration-500  "
              key={index}
              href={item.url}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[33%] mx-6  flex flex-col space-y-5">
        <h1 className="text-tertiary font-semibold text-[24px] lg:text-start lg:mb-2 ">
          Contact Info
        </h1>
        <ul className="flex flex-col space-y-3 text-[21px] font-semibold mx-2 ">
            {
                contactInfo.map((item,index)=>(
                    <li key={index}>
                        <div className="hover:translate-x-2 hover:transition-colors hover:text-tertiary transform ease-in-out duration-500 ">
                            <img src={item.icon} alt="" />
                            <h1>{item.desc}</h1>
                        </div>
                    </li>
                ))
            }
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
