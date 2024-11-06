import { copyright, logo } from "@/assets";
import { GradientButton } from "../shared/GradientButton";
import { FaArrowRight } from "react-icons/fa";
import { contactInfo, navigation, socialMedia } from "@/Constants";
import SectionWrapper from "../shared/SectionWrapper";

const Footer = () => {
  return (
    <SectionWrapper
    images={[
      {
        src: '',
        position: 'absolute top-[5%] left-[50%] z-20 opacity-90 aspect-square w-[300px] h-[300px] p-0 rounded-full overflow-hidden outline-0 outline-green-600',
        // style: { objectFit: 'cover', height: '300px', width: '300px' },
      },
      {
        src: '',
        position: 'absolute top-[5%] left-[43%] z-10',
      },
      {
        src: '',
        position: 'absolute top-[10%] left-[80%] z-10',
        
      },
    ]}
  >
    <footer className="relative z-30 container mt-2 lg:mt-6  ">
      <div className="flex w-full max-md:flex-col ">
        <div className=" flex w-full lg:w-[33%] flex-wrap">
          <div className="flex w-full mt-2 -ml-12  ">
            <img className=" " src={logo} alt="logo" width={220} />
            <div className=" -ml-12 w-full mt-2 ">
              <b className="text-[27px]">
                NM<span className=" text-tertiary">CYBER</span>
              </b>
              <p className="text-[18px]">
              Empowering You To Thrive
              </p>
            </div>
          </div>
          <div className="w-2/3 md:w-3/4 mx-6 -mt-12 flex ">
            <input
              type="email"
              name="email "
              placeholder="Subscribe to Newsletter"
              className="w-full p-3 border-gray-300 rounded-full mb-4"
            />
            <button className=" p-3 px-6 mb-4 -ml-14 bg-[#64cdf6] rounded-e-full">
              <FaArrowRight className=" text-white size-5" />
            </button>
          </div>
          <div className="flex w-full space-x-10 lg:space-x-12 m-5  ">
            {socialMedia.map((item, index) => (
              <div key={index} className="  ">
                <a href={item.url}>
                  <img
                    className="rounded-full p-2 m-2  cursor-pointer bg-white transform ease-in-out duration-500 hover:-translate-y-1  hover:transition-colors hover:bg-tertiary "
                    src={item.img}
                    alt="logo"
                    width={45}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full lg:w-[33%] mx-6 flex flex-col lg:items-center space-y-5 mb-4">
          <h1 className="text-tertiary font-semibold text-[24px]  lg:mb-2 ">
            Quick Links
          </h1>
          <div className="flex flex-col max-md:w-20 space-y-3 text-[21px] md:text-[24px] font-semibold mx-2    ">
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
        <div className="w-full lg:w-[33%] mx-6  flex flex-col md:items-center space-y-5">
          <h1 className="text-tertiary font-semibold text-[24px] lg:mr-24 lg:mb-2 ">
            Contact Info
          </h1>
          <ul className="flex flex-col md:items-start space-y-3 text-[21px] md:text-[24px] max-md:w-fit font-semibold mx-2 ">
            {contactInfo.map((item, index) => (
              <li key={index}>
                <div className="hover:translate-x-2 hover:transition-colors hover:text-tertiary transform ease-in-out duration-500 ">
                  <img src={item.icon} alt="" />
                  <h1>{item.desc}</h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="w-full m-4 mx-auto border-tertiary" />
      <div className="  flex items-center justify-self-center pb-4 text-[18px]  ">
        <img className="w-4" src={copyright} alt="" />
        <p>2024 NMCyber. All Rights Reserved</p>
      </div>
    </footer>
    </SectionWrapper>
  );
};

export default Footer;
