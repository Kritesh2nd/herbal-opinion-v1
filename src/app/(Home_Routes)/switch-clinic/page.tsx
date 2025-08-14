"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

import TestimonialCard from "@/src/components/TestimonialCard";
import PrimaryButton from "@/src/components/PrimaryButton";
import MeetHerbal from "@/src/components/MeetHerbal";
import LeafComponent from "@/src/components/LeafComponent";

const SwitchClinic = () => {
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
            <div className="gooper titleLevel1 text-left pb-12">
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
              <PrimaryButton
                title="Start Your Assessment"
                url="/assessment"
                background="farm-green"
                text="white"
              />
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
      <section className="py-[74px] relative">
        <div className="relative">
          <LeafComponent
            mainStyle="h-105 w-40 hidden sm:block"
            direction="left"
            subStyle="-left-38  rotate-[260deg] top-6"
          />
          <LeafComponent
            mainStyle="h-35 w-21 sm:hidden block"
            direction="left"
            subSize="h-45 w-45"
            subStyle="-left-18  rotate-[258deg] -top-3"
          />
        </div>
        <div className="globalContainer">
          <div className="lg:px-[220px] md:px-[160px] sm:px-[80px] px-0">
            <div className="gooper text-lettuce  titleLevel2 pb-2">
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
                  <PrimaryButton
                    title="Submit & Start Transfer"
                    isButton={true}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="bg-light-green py-[70px]">
        <div className="globalContainer flex flex-col gooper ">
          <h2 className="gooper text-farm-green titleLevel2 mb-12">
            What Our Members Say
          </h2>
          <TestimonialCard bgwhite={true} />
        </div>
      </section>

      {/* section 4 */}
      <section>
        <MeetHerbal />
      </section>
    </div>
  );
};

export default SwitchClinic;
