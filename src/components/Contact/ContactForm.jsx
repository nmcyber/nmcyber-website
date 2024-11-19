import React, { useState } from "react";
import TurnstileWidget from "./CloudflareTurnstileWidget";

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
  "Other",
];

export default function ContactForm() {
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
    if (validate()) {
      setIsSending(true);
      emailjs
        .send("SERVICE_ID", "TEMPLATE_ID", formData, "USER_ID")
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
    <>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <input
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4'
              placeholder='Full Name'
            />
            {errors.fullName && (
              <p className='text-red-400 text-xs mt-1'>{errors.fullName}</p>
            )}
          </div>
          <div>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4'
              placeholder='Email'
            />
            {errors.email && (
              <p className='text-red-400 text-xs mt-1'>{errors.email}</p>
            )}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <input
              type='text'
              name='organisation'
              value={formData.organisation}
              onChange={handleChange}
              className='w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4'
              placeholder='Organisation'
            />
            {errors.organisation && (
              <p className='text-red-400 text-xs mt-1'>{errors.organisation}</p>
            )}
          </div>
          <div>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4'
              placeholder='Phone No.'
            />
            {errors.phone && (
              <p className='text-red-400 text-xs mt-1'>{errors.phone}</p>
            )}
          </div>
        </div>
        <div>
          <select
            name='industry'
            value={formData.industry}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-color-4'
          >
            <option value='' className='bg-gray-800'>
              Select Your Industry
            </option>
            {industries.map((industry) => (
              <option key={industry} value={industry} className='bg-gray-800'>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className='text-red-400 text-xs mt-1'>{errors.industry}</p>
          )}
        </div>
        <div>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded-2xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-color-4'
            placeholder='Enter Your message here...'
            rows='4'
          />
          {errors.message && (
            <p className='text-red-400 text-xs mt-1'>{errors.message}</p>
          )}
        </div>
        <TurnstileWidget />
        <button
          type='submit'
          className='w-full py-3 px-4 bg-gradient-to-r from-color-3 to-color-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-color-4 focus:ring-opacity-50'
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  );
}
