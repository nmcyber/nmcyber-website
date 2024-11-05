
import { logo } from "@/assets";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[44.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-[0.25]">
      <div className="absolute top-1/2 left-1/2 w-[34.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-[0.25]" ></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-[0.25]"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-white"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[6.4rem] left-16 size-5 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full "></div>
      <div className="absolute top-[12.6rem] right-16 size-7 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full "></div>
      <div className="absolute top-[26.8rem] left-12 size-9 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

export const Background = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden bg-secondary-foreground  ">
      <div className="absolute inset-0 opacity-[.15] ">
        <img
          className="w-full h-full object-cover  "
          src={logo}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings  />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};



