import { circuit, largeEllipse, smallEllipse } from "@/assets";

export default function BackgroundArtwork() {
  return (
    <>
      {/* SVG Electrical Circuit Artwork */}
     <div className="absolute top-[5%] left-[50%] z-20 opacity-90 aspect-square w-[300px] h-[300px] p-0 rounded-full overflow-hidden outline-0 outline-green-600">
        <img src={circuit} width={300} height={300} alt="Small Ellipse" style={{ objectFit: 'cover', height: '300px', width: '300px'}} className="  " />
    </div>
      {/* Solid SVG Ellipse */}
    <div className="absolute top-[5%] left-[43%] z-10 ">
      <img src={smallEllipse} loading="lazy" width={282} height={282} alt="Small Ellipse" />
    </div>
    {/* Solid Larger Ellipse */}
    <div className="absolute top-[10%] left-[80%] z-10 ">
      <img src={largeEllipse} loading="lazy" width={500} height={500} alt="Large Ellipse" />
    </div>
    {/* Transparent Overlay */}
    <div className="absolute z-10 inset-0 bg-[rgba(0,21,48,0.51)] outline-0 outline-orange-400 " />
    {/* <!-- Blurry Overlay --> */}
    <div className="absolute z-10 inset-0 backdrop-blur-[80.5px] " />
    {/* -- CYBER-NET ARTWORK -- */}
    <div className=" absolute z-10 inset-0 ">  </div>
    </>
  )
}
