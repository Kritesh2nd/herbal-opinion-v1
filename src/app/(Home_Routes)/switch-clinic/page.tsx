"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const SwitchClinic = () => {
  const meetHerbal = [
    { id: 1, text: "Certified Practitioners" },
    { id: 2, text: "Personalized Care" },
    { id: 3, text: "Evidence-Based Approach" },
    { id: 4, text: "Ongoing Support" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinicName: "",
    notes: "",
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
    <div>
      {/* section 1 */}
      <section className="bg-light-green">
        <div className="globalContainer flex flex-col md:flex-row pt-[86px] pb-[64px] ">
          <div className="flex flex-col pt-[120px] md:w-1/2 pb-[120px] md:pb-0 w-full  pr-10">
            <div className="text-4xl md:text-5xl lg:text-[61px] gooper pb-12">
              Switch for <span className="text-farm-green">$20</span>{" "}
              <span className="sm:inline hidden">
                <br />
              </span>
              Your care, your terms.
            </div>
            <div className="text-[20px] sm:text-[25px] pb-10">
              We're here to make your switch simple, secure, and supported every
              step of the way.
            </div>
            <div className="flex">
              <Link
                href=""
                className="flex items-center gap-3 bg-farm-green text-white px-7 py-[5px] rounded-full sm:text-[25px] text-[20px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center gap-3 pt-[3px] md:pt-[6px] ">
                  Start Your Assessment
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex md:justify-end justify-center md:w-1/2 w-full ">
            <Image
              src="/img/switch-clinic/yoga.png"
              height={650}
              width={450}
              alt="yoga girl"
            />
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="py-[74px]">
        <div className="globalContainer">
          <div className="lg:px-[220px] md:px-[160px] sm:px-[80px] px-0">
            <div className="md:text-[39px] sm:text-[31px] text-[25px] text-lettuce gooper text-center pb-2">
              Ready to Switch?
            </div>
            <div className="sm:text-[20px] text-[18px] text-primary-dgray text-center pb-[64px]">
              We just need a few quick details to begin the transfer.
            </div>
            <div className="flex flex-col sm:px-12 sm:py-12 px-5 py-5 shadow-[0_4px_6px_rgba(0,0,0,0.10)] border-2  border-lemon-green rounded-xl ">
              <form action="">
                <div className="flex flex-col sm:flex-row justify-between sm:gap-5">
                  <div className="sm:flex-1">
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
                  <div className="flex-1">
                    <label htmlFor="email" className="text-primary-black">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="inputStyle"
                      placeholder="your.email@email.com"
                      required
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:gap-5">
                  <div className="flex-1">
                    <label htmlFor="phone" className="text-primary-black">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="inputStyle"
                      placeholder="Your Phone Number"
                      required
                      onChange={handleChange}
                      value={formData.phone}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="clinicName" className="text-primary-black">
                      Current Clinic Name
                    </label>
                    <input
                      type="text"
                      id="clinicName"
                      className="inputStyle"
                      placeholder="Your Existing Clinic Name"
                      required
                      onChange={handleChange}
                      value={formData.clinicName}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="notes" className="text-primary-black">
                    Any Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    className="inputStyle h-32 resize-none"
                    placeholder="Additional Notes"
                    required
                    onChange={handleChange}
                    value={formData.notes}
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
                    I consent to Herbal Opinion contacting my previous provider
                    to arrange the transfer.
                  </label>
                </div>
                <div className="flex justify-center">
                  <button className="flex items-center gap-3 bg-lemon text-farm-green px-7 py-[5px] rounded-full sm:text-[25px] text-[20px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                    <div className="flex items-center gap-3 pt-[3px] md:pt-[6px] ">
                      Submit & Start Transfer
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="py-40 border border-stone-300">
        <div className="globalContainer">What Our Members Says</div>
      </section>
      {/* section 4 */}
      <section className="">
        <div className="globalContainer py-[70px]">
          <div className="gooper text-center text-farm-green md:text-[39px] sm:text-[31px] text-[25px] pb-[64px]">
            Meed Herbal Opinion
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-1 justify-center sm:pb-0 pb-8">
              <div className="lg:h-[650px] md:h-[520px] sm:h-[420px] h-[100vw] lg:w-[650px] md:w-[520px] sm:w-[420px] w-[100vw] relative">
                <Image
                  src="/img/switch-clinic/meetup.png"
                  fill
                  alt="yoga girl"
                />
              </div>
            </div>
            <div className="flex justify-end items-center flex-1">
              <div className="sm:pl-[105px]">
                <p className="text-primary-dgray text-[18px] sm:text-[20px]">
                  Founded by an Australian citizen with a mission to make
                  natural health support accessible to everyone, Herbal Opinion
                  is committed to compassionate care through personalized
                  solutions.
                </p>
                <br />
                <p className="text-primary-dgray text-[18px] sm:text-[20px]">
                  We believe in the power of nature to support wellness and
                  provide relief. Our team of healthcare professionals carefully
                  evaluates each person's needs to recommend the most
                  appropriate natural solutions.
                </p>
                <br />
                <div className="grid grid-cols-2 sm:pb-9 pb-5">
                  {meetHerbal.map((item) => (
                    <div
                      className="flex gap-2 text-primary-dgray text-[18px] sm:text-[20px]  pb-3"
                      key={item.id}
                    >
                      <div className="flex justify-center items-center text-white text-[12px] h-4 w-4 bg-farm-green rounded-full mt-[2px]">
                        <FaCheck />
                      </div>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="flex ">
                  <Link
                    href="/"
                    className="flex items-center gap-3 bg-lemon text-farm-green px-7 py-[5px] rounded-full sm:text-[25px] text-[20px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 pt-[3px] md:pt-[6px] ">
                      Start Your Journey
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwitchClinic;
