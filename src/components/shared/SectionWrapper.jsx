
const SectionWrapper = ({ children, className = "", images = [] }) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {children}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute ${image.position} ${image.className}`}
        >
          <img src={image.src} alt={image.alt} style={image.style} />
        </div>
      ))}

      {/* Transparent Overlay */}
    <div className="absolute z-10 inset-0 bg-[rgba(0,21,48,0.51)] outline-0 outline-orange-400 "></div>
    {/* <!-- Blurry Overlay --> */}
    <div className="absolute z-10 inset-0 backdrop-blur-[80.5px] "></div>
    
      {/* {overlay && (
        <div className={`absolute inset-0 ${overlay.className}`}>
          {overlay.content}
        </div>
      )} */}
    </section>
  );
};

export default SectionWrapper;
