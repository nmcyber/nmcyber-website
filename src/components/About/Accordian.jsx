import { accordion } from "@/Constants";
import { useState } from "react";

const Accordian = () => {
  // State to manage which section is open
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className=" py-4">
        <button className="flex justify-between items-center w-full text-left ~text-md/xl font-medium text-tertiary">
          <span>&ndash;WHY NMCYBER</span>
        </button>

        <div className="mt-4">
          <h1 className=" text-white capitalize font-bold font-jarkata ~text-4xl/6xl">discover&#46;&nbsp;transform&#46;&nbsp;thrive&#46;</h1>
          <p className="mt-2  font-poppins ~text-lg/xl">
            Our innovative approach to cybersecurity awareness and training
            doesn't just protect your data, it transforms your entire
            organisation.
          </p>
        </div>
      </div>

      {accordion.map((pillar, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggleSection(index + 1)}
            className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
          >
            <span>{pillar.title}</span>
          </button>
          {openSection === index + 1 && (
            <div className="mt-4 text-gray-600">
              {pillar.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      ))}

    </div>
  );
};

export default Accordian;
