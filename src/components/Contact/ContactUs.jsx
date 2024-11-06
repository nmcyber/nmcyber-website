import { useState } from "react";
import { shield } from "@/assets";
import emailjs from "emailjs-com";
import SectionWrapper from "../shared/SectionWrapper";
import { circuit, largeEllipse, smallEllipse } from "@/assets";

const ContactUs = () => {
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

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Retail",
    "Other",
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.organisation)
      newErrors.organisation = "Organisation name is required.";
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
    console.table(e)
    if (validate()) {
      setIsSending(true);

      // login to EmailJs for getting id for the below
      emailjs
        .send(
          "SERVICE_ID", // Replace with your EmailJS service ID
          "TEMPLATE_ID", // Replace with your EmailJS template ID
          formData,
          "USER_ID" // Replace with your EmailJS user ID
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
        alt: 'Small Ellipse',
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
      <div className=" relative z-30 flex flex-wrap-reverse w-full px-8 lg:px-16 xl:px-24  font-jakarta h-max ~py-8/32 md:~py-6/36">
        <div className=" relative w-2/4 max-md:w-full mx-auto flex justify-end outline outline-orange-400 ">
        <img src={shield} alt="" className=" absolute z-40 inset-0 h-[35%]" />
          <div className=" w-3/4 p-10 m-2 shadow-md rounded-3xl border-4 border-color-4 mt-8 outline outline-fuchsia-600">
            <h2 className="text-[21px] lg:text-[32px] font-bold text-n-2 mb-2 text-center ">
              Contact Us
            </h2>
            <p className=" w-28 bg-color-4 h-0.5 m-6 mx-auto "></p>
            
            <form onSubmit={handleSubmit} className="space-y-2 p-2">
              <div className="md:flex  gap-x-2">
                <div className="max-md:my-2 w-full">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-full outline-none "
                    placeholder="Full Name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-full outline-none"
                    placeholder="Email "
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="md:flex gap-x-2 ">
                <div className="max-md:my-2 w-full">
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-full outline-none "
                    placeholder="Organisation"
                  />
                  {errors.organisation && (
                    <p className="text-red-500 text-sm">
                      {errors.organisation}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-full outline-none"
                    placeholder="Phone No."
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-full outline-none"
                >
                  <option value="">Select Your Industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="text-red-500 text-sm">{errors.industry}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-2xl outline-none"
                  placeholder="Enter Your message here..."
                  rows="4"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-color-3 to-color-4 text-white font-semibold rounded-full outline-none "
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
        <div className="w-2/4 max-md:w-full p-8 mb-5">
          <h3 className="text-color-4 text-[18px] mb-4">—NMCYBER PLATFORM</h3>
          <h1 className="text-n-2 text-[21px]">
            <b>NMCYBER</b> not only helps you to protect sensitive customer and
            business data but also helps you to enhance the company’s reputation
            and competitive edge in the market.
          </h1>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactUs;
