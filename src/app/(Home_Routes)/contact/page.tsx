"use client";

import { ContactDetailType } from "@/src/types";
import React, { ChangeEvent, useState } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
const Contact = () => {
  const contactDetails: ContactDetailType[] = [
    {
      id: 1,
      icon: <IoMail />,
      title: "Email",
      description: "support@herbalopinion.com",
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "1-800-54444-877",
    },
    {
      id: 3,
      icon: <FaClock />,
      title: "Hours",
      description: "Mon-Fri, 9am-5pm AEST",
    },
  ];

  const followUs = [
    { id: 1, display: true, icon: <FaFacebookF />, link: "/facebook" },
    { id: 2, display: true, icon: <FaInstagram />, link: "/instagram" },
    { id: 3, display: true, icon: <FaSquareXTwitter />, link: "/twitter" },
    { id: 4, display: false, icon: <FaTwitter />, link: "/twitter" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const setChecked = () => {
    setFormData({ ...formData, agree: !formData.agree });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage("");
    setError("");
    setLoading(true);
    console.log("formData", formData);
  };

  return (
    <div className="bg-light-green">
      <div className="globalContainer flex flex-col">
        {/* section 1 */}
        <section className="flex flex-col gap-2 pt-[70px] pb-[64px] text-center">
          <div className="md:text-[39px] text-[25px] gooper text-farm-green">
            Get in Touch
          </div>
          <div className="md:text-[25px] text-[18px] text-primary-dgray">
            We're here to answer, assist, or just chat
          </div>
        </section>
        {/* section 2 */}
        <section className="flex gap-4 sm:flex-row flex-col pb-[130px]">
          <div className="flex flex-col bg-white rounded-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.10)] flex-1 md:py-[32px] sm:py-[26px] py-[20px] md:px-[45px] sm:px-[35px] px-[25px] ">
            <div className="flex flex-col gap-4 pb-9 ">
              <div className="gooper text-lettuce text-[31px] sm:text-[25px]">
                Get in Touch
              </div>
              <div className="text-primary-dgray text-[20px] sm:text-[18px]">
                We're here to support your journey. Reach out with any questions
                or concerns.
              </div>
            </div>
            <div>
              <form className="flex flex-col">
                <div>
                  <label htmlFor="name" className="text-primary-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inputStyle"
                    placeholder="Your name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-primary-black">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="inputStyle"
                    placeholder="your@email.com"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-primary-black">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="inputStyle"
                    placeholder="Your phone number"
                    required
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-primary-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="inputStyle h-32 resize-none"
                    placeholder="Enter your message"
                    required
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                </div>
                <div className="flex items-start gap-2 pb-6">
                  <div className="flex items-start">
                    <input
                      id="agree"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.agree}
                      onChange={setChecked}
                    />
                  </div>
                  <label htmlFor="agree" className="">
                    I agree to be contacted by Herbal Opinion.
                  </label>
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-lemon text-farm-green rounded-2xl py-3 px-4 w-full md:text-[20px] text-[18px] transition-all duration-300 hover:shadow-sm hover:scale-102 cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-farm-green text-white rounded-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.10)] flex-1 border border-black md:py-[32px] sm:py-[26px] py-[20px] md:px-[45px] sm:px-[35px] px-[25px]">
            <div className="text-[25px] sm:text-[31px] pb-[26px] gooper">
              Contact Details
            </div>
            <div className="flex flex-col gap-8 pb-8 relative">
              {contactDetails.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="flex justify-center items-center h-[50px] w-[50px] text-2xl rounded-full overflow-hidden relative ">
                    <span className="h-full w-full bg-white absolute opacity-20 top-0 left-0"></span>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="sm:text-xl text-lg">{item.title}</div>
                    <div>{item.description}</div>
                  </div>
                </div>
              ))}
              <span className="bg-white absolute opacity-30 bottom-0 left-0 h-[1px] w-full"></span>
            </div>
            <div className="pt-4 pb-14">
              Need help fast? We usually reply within 1-2 business day.
            </div>
            <div className="text-[20px] pb-4">Follow Us</div>
            <div className="flex gap-[18px] pb-[100px]">
              {followUs.map(
                (item) =>
                  item.display && (
                    <Link key={item.id} href={item.link}>
                      <div className="flex justify-center items-center h-[40px] w-[40px] text-lg rounded-full overflow-hidden relative ">
                        <span className="h-full w-full bg-white absolute opacity-20 top-0 left-0"></span>
                        {item.icon}
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
