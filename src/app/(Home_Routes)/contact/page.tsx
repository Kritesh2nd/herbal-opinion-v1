"use client";

import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import { contactDetails, followUs } from "@/src/constants";
import MessageReceived from "@/src/components/MessageReceived";
import Image from "next/image";
const Contact = () => {
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
      <MessageReceived active={false} />
      <div className="globalContainer flex flex-col">
        {/* section 1 */}
        <section className="flex flex-col gap-2 sm:py-16 py-10 text-center">
          <h2 className="gooper text-farm-green titleLevel2">Get in Touch</h2>
          <div className="md:text-[25px] text-[18px] text-primary-dgray">
            We're here to answer, assist, or just chat
          </div>
        </section>

        {/* section 2 */}
        <section className="flex sm:gap-4 gap-6 sm:flex-row flex-col pb-[130px]">
          <div className="flex flex-col bg-white rounded-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.10)] flex-1 md:py-[32px] sm:py-[26px] py-[20px] md:px-[45px] sm:px-[35px] px-[25px] ">
            <div className="flex flex-col gap-4 pb-9 ">
              <div className="gooper text-lettuce sm:text-[31px] text-[25px]">
                Get in Touch
              </div>
              <div className="text-primary-dgray sm:text-[20px] text-[18px]">
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
            <div className="relative flex flex-col sm:pb-[330px] pb-[340px]">
              <div className="text-[20px] pb-4">Follow Us</div>
              <div className="flex gap-[18px] z-20">
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

              <div className="flex justify-center w-full absolute h-[495px]">
                <div className="relative h-[495px] w-[495px] z-10 ">
                  <Image
                    src="/img/contact/girl.png"
                    fill
                    alt="yoga girl"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
