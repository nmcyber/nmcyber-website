import React from "react";

const SectionWrapper = ({ children, className = "", ...props }) => {
  return (
    <section className={`relative overflow-hidden ${className}`} {...props}>
      {children}
    </section>
  );
};

export default SectionWrapper;
