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
import MessageReceived from "@/src/components/MessageReceived";
import { CreateClinicDto } from "@/src/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createNewSwitchClinic } from "../action";

const SwitchClinic = () => {
  const router = useRouter();
  const [showMessageSent, setShowMessageSent] = useState<boolean>(false);
  const [formData, setFormData] = useState<CreateClinicDto>({
    name: "",
    email: "",
    phone: "",
    clinicName: "",
    note: "",
    contactConcent: false,
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const meetHerbalText = [
    "Herbal Opinion is a Telehealth consultation clinic dedicated to helping everyday Australians explore alternate medications and treatment through expert clinical opinions. Our qualified practitioners guide each patient on a personalised journey to healing, offering tailored care plans that prioritise safety, efficacy, and individual needs.",
    " We believe in the power of nature to support wellness and provide relief. Our team of healthcare professionals carefully evaluates each person's needs to recommend the most appropriate natural solutions.",
  ];

  const handelCreateContact = async (formData: CreateClinicDto) => {
    const response = await createNewSwitchClinic(formData);

    if (response.status >= 400) {
      toast.error("Failed to Switch Clinic");
    } else {
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          clinicName: "",
          note: "",
          contactConcent: false,
        });
        setShowMessageSent(true);
      }, 500);
    }
  };

  const handleScroll = () => {
    const element = document.getElementById("read-to-switch");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const setChecked = () => {
    setFormData({ ...formData, contactConcent: !formData.contactConcent });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage("");
    setError("");
    setLoading(true);
    console.log("formData", formData);
    handelCreateContact(formData);
  };

  const toggleActive = () => {
    setShowMessageSent(false);
    router.push("/");
  };
  return (
    <div>
      <MessageReceived active={showMessageSent} toggleActive={toggleActive} />
      {/* section 1 */}
      <section className="bg-light-green">
        <div className="globalContainer flex flex-col-reverse md:flex-row pt-[86px] pb-[64px] ">
          <div className="flex flex-col sm:py-30 py-15  md:w-1/2 md:pb-0 w-full  pr-10">
            <div className="gooper titleLevel1 text-left pb-12 text-primary-black">
              Switch for <span className="text-farm-green">$20</span>{" "}
              <span className="sm:inline hidden">
                <br />
              </span>
              Your care, your terms.
            </div>
            <div className="text-[20px] sm:text-[25px] pb-10 text-primary-black">
              We're here to make your switch simple, secure, and supported every
              step of the way.
            </div>
            <div className="flex">
              <PrimaryButton
                title="Switch to Herbal Opinion"
                background="farm-green"
                text="white"
                py="py-2"
                isButton={true}
                btnFunc={handleScroll}
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
      <section className="py-[74px] relative" id="read-to-switch">
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
                  <label htmlFor="note" className="text-primary-black">
                    Any Notes (Optional)
                  </label>
                  <textarea
                    id="note"
                    className="inputStyle h-32 resize-none"
                    placeholder="Additional Notes"
                    required
                    onChange={handleChange}
                    value={formData.note}
                  ></textarea>
                </div>
                <div className="flex items-start gap-2 pb-6">
                  <div className="flex items-start">
                    <input
                      id="contactConcent"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.contactConcent}
                      onChange={setChecked}
                    />
                  </div>
                  <label htmlFor="contactConcent" className="">
                    I consent to Herbal Opinion contacting my previous provider
                    to arrange the transfer.
                  </label>
                </div>
                <div className="flex justify-center">
                  <div className="flex justify-center" onClick={handleSubmit}>
                    <PrimaryButton
                      title="Submit & Start Transfer"
                      isButton={true}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="bg-light-green">
        <TestimonialCard bgwhite={true} />
      </section>

      {/* section 4 */}
      <section>
        <MeetHerbal text={meetHerbalText} />
      </section>
    </div>
  );
};

export default SwitchClinic;
