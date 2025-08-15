"use client";

import React from "react";

import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { NavData } from "../constants";
import { ContactDetailType } from "../types";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const socialMedia = [
    { id: 1, display: true, icon: <FaFacebookF />, link: "/facebook" },
    { id: 2, display: true, icon: <FaInstagram />, link: "/instagram" },
    { id: 3, display: true, icon: <FaSquareXTwitter />, link: "/twitter" },
    { id: 4, display: false, icon: <FaTwitter />, link: "/twitter" },
  ];

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

  return (
    <div className="bg-farm-green">
      <div className="globalContainer flex flex-col py-12  text-primary-lgray">
        <div className="flex sm:flex-row flex-col pb-[78px]">
          <div className="flex flex-col sm:w-1/2 sm:p-0 pb-10">
            <div className="pb-8">
              <Image
                src={"/white-logo.png"}
                alt="logo"
                width={138}
                height={60}
              />
            </div>
            <div className="text-light-green sm:text-[20px] text-[18px] pb-4">
              Your trusted source for alternative, prescription-based relief
              options that support your well-being.
            </div>
            <div className="flex flex-row gap-2">
              {socialMedia.map(
                (item) =>
                  item.display && (
                    <Link key={item.id} href={item.link}>
                      <div className="flex justify-center items-center h-[40px] w-[40px] text-2xl rounded-full overflow-hidden relative text-white hover:text-light-green">
                        {item.icon}
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:w-1/4 sm:text-[20px] text-[18px] sm:p-0 pb-10">
            <div className="sm:pb-6 pb-2">Contact Us</div>
            {NavData.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="flex gap-3 text-light-green hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:w-1/4 sm:text-[20px] text-[18px]">
            <div className="sm:pb-6 pb-2">Contact Us</div>
            {contactDetails.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="text-light pt-[3px]">{item.icon}</div>
                <div>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm pb-[54px] ">
          Disclaimer: The information provided on this website is for general
          informational purposes only and does not constitute medical advice,
          diagnosis, or treatment. It is not intended to be a substitute for
          consultation with a qualified healthcare professional. By using this
          site or submitting a booking request, you acknowledge that medical
          decisions, including the suitability and approval of any treatment,
          will be made solely at the discretion of a registered healthcare
          professional, based.
        </div>
        <div className="flex sm:flex-row flex-col gap-2 justify-between text-[13px] text-light-green">
          <div className="text-center sm:text-right">
            © 2023 Herbal Opinion. All rights reserved.
          </div>
          <div className="flex sm:justify-end justify-center gap-6 ">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Accessibility</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
