import { useState } from "react";
import { navigation } from "../../Constants";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { FaBars, FaTimes } from "react-icons/fa";
import { logo } from "@/assets";
import { Background } from "../shared/Background";

const Header = () => {
  
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
 

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <header className={` fixed top-0 left-0  z-50 backdrop-blur-sm ${openNavigation ?"bg-color-1" :""} w-full h-24 lg:bg-transparent`}  >
      <div className=" flex justify-between items-center px-5 lg:px-7 xl:px-9 max-lg:py-4">
        <a className=" flex-shrink-0 w-[12rem] xl:mr-8 " href="/">
          <img
            className="w-full"
            src={logo}
            alt="logo"
            height={220}
            width={180}
          />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-24 left-0 right-0  bg-color-1 max-lg:h-screen lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className={`relative z-2 flex flex-col  mb-14 items-center justify-center h-full lg:h-auto m-auto lg:flex-row  ${openNavigation ?"-top-20" :""} `}>
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-sans text-[19px] text-color-4 hover:text-white hover:underline hover:shadow-lg  transition-colors duration-300 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-8 py-10 lg:-mr-0.25  font-semibold ${
                  item.url === pathname.hash ? "z-2 " : "lg:text-color-2"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <Background />
        </nav>
        <button
          className={` hidden lg:inline-block mb-14 lg:mr-10 text-white text-[21px] font-semibold bg-gradient-to-r from-color-3 to-color-4 px-8 p-1 rounded-full `}
        >
          Contact Us
        </button>
        <button
          className= {`lg:hidden z-2 size-10 text-color-4 rounded-md ${openNavigation ? "mr-12" : "mr-8"} mb-24`}
          onClick={toggleNavigation}
        >
          {openNavigation ? <FaTimes size={28}/> : <FaBars size={28}/>}
        </button>
      </div>
      
    </header>
  );
};

export default Header;
