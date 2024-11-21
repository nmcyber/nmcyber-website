import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

import { useToast } from "@/hooks/use-toast";
import TurnstileWidget from "./CloudflareTurnstileWidget";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ToastAction } from "../ui/toast";

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
  "Other",
];

export default function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    phone: "",
    industry: "",
    message: "",
    user_os: "",
    recipient: "",
    user_platform: "",
    user_browser: "",
    user_version: "",
    user_country: "",
    user_referrer: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      recipient: formData.email,
      user_os: window.navigator.platform,
      user_platform: window.navigator.userAgent,
      user_browser: window.navigator.appName,
      user_version: window.navigator.appVersion,
      user_country: "Unknown",
      user_referrer: document.referrer,
    }));
  }, []);

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
    if (!turnstileToken) newErrors.turnstile = "Please complete the verification.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTurnstileVerify = (token) => {
    setTurnstileToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);
      console.log("Sending message...", formData, turnstileToken);
      emailjs
        .send(
          import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
          { ...formData, recipient: formData.email, turnstileToken },
          import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (response) => {
            // console.log("SUCCESS!", response.status, response.text);
            // alert("Message sent successfully!");
            toast({
              title: "Message Sent",
              description: "Success! Check your mail box.",
              duration: 5000,
              // action: <ToastAction altText="Thank you!">Close</ToastAction>,
              className: " top-0 right-0 flex before:absolute z-10 before:inset-0 bg-[rgba(0,21,48,0.51)] backdrop-blur-[3.5px] border-none outline outline-1 outline-tertiary/80 "
            });
            setFormData({
              fullName: "",
              email: "",
              organisation: "",
              phone: "",
              industry: "",
              message: "",
              to_email: formData.email,
              recipient: formData.email,
              confirmation_link: "https://nmcyber.com.au/confirm?email=" + encodeURIComponent(formData.email),
              user_os: formData.user_os,
              user_platform: formData.user_platform,
              user_browser: formData.user_browser,
              user_version: formData.user_version,
              user_country: formData.user_country,
              user_referrer: formData.user_referrer,
            });
            setTurnstileToken(null);
          },
          (error) => {
            // console.error("FAILED...", error);
            toast({
              title: "Error",
              description: "Failed to send message. Please try again.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
              variant: "destructive",
              duration: 5000,
            });
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
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
            <p className="text-tertiary text-xs mt-1">{errors.fullName}</p>
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
            <p className="text-tertiary text-xs mt-1">{errors.email}</p>
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
            <p className="text-tertiary text-xs mt-1">{errors.organisation}</p>
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
            <p className="text-tertiary text-xs mt-1">{errors.phone}</p>
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
          <option value="" className="bg-gray-800">
            Select Your Industry
          </option>
          {industries.map((industry) => (
            <option key={industry} value={industry} className="bg-gray-800">
              {industry}
            </option>
          ))}
        </select>
        {errors.industry && (
          <p className="text-tertiary text-xs mt-1">{errors.industry}</p>
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
          <p className="text-tertiary text-xs mt-1">{errors.message}</p>
        )}
      </div>
      <TurnstileWidget onVerify={handleTurnstileVerify} disabled={isSending} />
      {errors.turnstile && (
        <p className="text-tertiary text-xs mt-1">{errors.turnstile}</p>
      )}
      <motion.button
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-color-3 to-color-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:outline hover:outline-1 hover:outline-tertiary/40 focus:outline-none focus:ring-1 focus:ring-tertiary/40 focus:ring-opacity-50"
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Send"}
      </motion.button>
    </form>
  );
}