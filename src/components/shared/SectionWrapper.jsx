const SectionWrapper = ({ children, className = "", images = [] }) => {
  return (
    <section className={`relative z-0 overflow-hiddenn ${className}`}>
      {children}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute ${image.position} ${image.className} `}
        >
          <img src={image.src} alt={image.alt} style={image.style} />
        </div>
      ))}
      <div className="absolute z-20 inset-0 bg-[rgba(0,21,48,0.51)] "></div>
      <div className="absolute z-10 inset-0 backdrop-blur-[80.5px] "></div>
    </section>
  );
};

export default SectionWrapper;