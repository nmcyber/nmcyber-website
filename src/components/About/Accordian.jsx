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
        <button className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800">
          <span>WHY NMCYBER</span>
        </button>

        <div className="mt-4">
          <h1 className="text-2xl font-bold">DISCOVER. TRANSFORM. THRIVE</h1>
          <p className="mt-2 text-gray-600">
            Our innovative approach to cybersecurity awareness and training
            doesn't just protect your data, it transforms your entire
            organisation.
          </p>
        </div>
      </div>

      <div className="py-4">
        <button
          onClick={() => toggleSection("1")}
          className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
        >
          <span>DISCOVER</span>
        </button>
        {openSection === "1" && (
          <div className="mt-4 text-gray-600">
            <p>
              We start it off by conducting thorough assessments to discover
              gaps in the organisation’s cybersecurity defences.
            </p>
            <p className="mt-2">
              This includes identifying weak points in systems, understanding
              employee awareness levels, and recognising the types of threats
              most likely to target your organisation.
            </p>
            <p className="mt-2">
              This proactive approach helps in anticipating potential threats
              and preparing accordingly, thus reducing the risk of breaches.
            </p>
          </div>
        )}
      </div>

      <div className=" py-4">
        <button
          onClick={() => toggleSection("2")}
          className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
        >
          <span>TRANSFORM</span>
        </button>
        {openSection === "2" && (
          <div className="mt-4 text-gray-600">
            <p>
              Building on the insights gained from the discovery phase, we move
              on to transform your organisation's cybersecurity posture by:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Providing targeted employee training on cybersecurity best
                practices, such as phishing awareness and social engineering
                prevention.
              </li>
              <li>
                Implementing advanced security technologies and solutions
                including endpoint and email security.
              </li>
              <li>
                Adopting a holistic approach to cybersecurity that integrates
                various security products and services to create a multi-layered
                defense system.
              </li>
            </ul>
            <p className="mt-2">
              This process leads to a more secure and resilient digital
              environment for your organisation, reducing the likelihood of
              successful cyber attacks.
            </p>
          </div>
        )}
      </div>

      <div className=" py-4">
        <button
          onClick={() => toggleSection("3")}
          className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
        >
          <span>THRIVE</span>
        </button>
        {openSection === "3" && (
          <div className="mt-4 text-gray-600">
            <p>
              With a comprehensive discovery and Transformation, your business
              organisation is set to thrive. We are here to help you
              continuously update your cybersecurity measures, staying ahead of
              emerging threats, and promote a culture of security awareness.
            </p>
            <p className="mt-2">
              We are your trusted partner when it comes to:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Regularly updating training programs to keep pace with new types
                of cyber threats.
              </li>
              <li>
                Leveraging managed cybersecurity services to provide
                round-the-clock protection and rapid incident response.
              </li>
              <li>
                Encouraging a proactive cybersecurity mindset among your
                employees, ensuring that security practices are ingrained in the
                organisational culture.
              </li>
            </ul>
            <p className="mt-2">
              When your organisations thrive in cybersecurity, you build trust
              with customers, stakeholders, and partners.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
