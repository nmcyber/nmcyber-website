import React, { useState } from "react";
import emailjs from "emailjs-com";
import SectionWrapper from "../shared/SectionWrapper";
import { circuit, largeEllipse, smallEllipse, shield } from "@/assets";
import TurnstileWidget from "./CloudflareTurnstileWidget";

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
  "Other",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    phone: "",
    industry: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.organisation) newErrors.organisation = "Organisation name is required.";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.industry) newErrors.industry = "Please select an industry.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);
      emailjs
        .send(
          "SERVICE_ID",
          "TEMPLATE_ID",
          formData,
          "USER_ID"
        )
        .then(
          () => {
            alert("Message sent successfully!");
            setFormData({
              fullName: "",
              email: "",
              organisation: "",
              phone: "",
              industry: "",
              message: "",
            });
          },
          (error) => {
            console.error("Failed to send message:", error);
            alert("Failed to send message. Please try again later.");
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <SectionWrapper
      images={[
        {
          src: circuit,
          position: 'absolute top-[5%] left-[50%] z-20 opacity-90 aspect-square w-[300px] h-[300px] p-0 rounded-full overflow-hidden outline-0 outline-green-600',
          style: { objectFit: 'cover', height: '300px', width: '300px' },
          alt: 'Circuit Background',
        },
        {
          src: smallEllipse,
          position: 'absolute top-[5%] left-[43%] z-10',
          alt: 'Small Ellipse',
        },
        {
          src: largeEllipse,
          position: 'absolute top-[10%] left-[80%] z-10',
          alt: 'Large Ellipse',
        },
      ]}
    >
      <div className="relative z-30 flex flex-wrap-reverse w-full px-8 lg:px-16 xl:px-24 font-jakarta h-max py-16 md:py-24">
        <div className="relative w-full md:w-1/2 mx-auto flex justify-end">
          <img src={shield} alt="Shield" className="absolute z-40 top-[-5%] aspect-auto hidden md:flex left-0 h-[25%] md:w-auto md:left-[10%] md:h-[25%]" />
          <div className="w-full md:w-5/6 p-8 m-2 rounded-3xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-color-4 mx-auto mb-8"></div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4"
                    placeholder="Full Name"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4"
                    placeholder="Organisation"
                  />
                  {errors.organisation && (
                    <p className="text-red-400 text-xs mt-1">{errors.organisation}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4"
                    placeholder="Phone No."
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-color-4"
                >
                  <option value="" className="bg-gray-800">Select Your Industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry} className="bg-gray-800">
                      {industry}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="text-red-400 text-xs mt-1">{errors.industry}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-2xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4"
                  placeholder="Enter Your message here..."
                  rows="4"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <TurnstileWidget />
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-color-3 to-color-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-color-4 focus:ring-opacity-50"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 mb-8 md:mb-0">
          <h3 className="text-tertiary ~text-xs/md mb-4 font-semibold">—NMCYBER PLATFORM</h3>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64CDF6] to-color-[#1a3f4e]">NMCYBER</span> protects your data and enhances your competitive edge.
          </h1>
          <p className="text-white text-opacity-80 text-lg">
            We not only help you safeguard sensitive customer and business information but also boost your company's reputation in the market.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}