"use client";

import React, { ReactNode, useEffect, useState } from "react";

import { IoMail } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavData } from "../constants";
import { ContactDetailType, UpdateProfileProps } from "../types";
import Link from "next/link";
import Image from "next/image";
import { getAllProfile } from "../app/(HOME_ROUTE)/action";

export interface SocialMediaDetailType {
  id: number;
  icon: ReactNode;
  display: boolean;
  link: string;
}

const Footer = () => {
  const [profiles, setProfiles] = useState<UpdateProfileProps[]>([]);
  const [socialMedia, setSocialMedia] = useState<SocialMediaDetailType[]>([
    { id: 1, display: true, icon: <FaFacebookF />, link: "/" },
    { id: 2, display: true, icon: <FaInstagram />, link: "/" },
  ]);

  const [contactDetails, setContactDetails] = useState<ContactDetailType[]>([
    {
      id: 1,
      icon: <IoMail />,
      title: "Email",
      description: "support@herbalopinion.com.au ",
    },
    {
      id: 2,
      icon: <FaClock />,
      title: "Hours",
      description: "Mon-Fri, 9am-5pm AEST",
    },
  ]);

  const loadSocialMedia = () => {
    const emailData = profiles.find((item) => item.name === "email");
    const hoursData = profiles.find((item) => item.name === "hours");
    const facebookData = profiles.find((item) => item.name === "facebook");
    const instagramData = profiles.find((item) => item.name === "instagram");
    const email = {
      ...contactDetails[0],
      description: emailData?.value ?? contactDetails[0].description,
    };
    const hours = {
      ...contactDetails[1],
      description: hoursData?.value ?? contactDetails[1].description,
    };
    setContactDetails([email, hours]);

    const facebook = {
      ...socialMedia[0],
      link: facebookData?.value ?? socialMedia[0].link,
    };
    const instagram = {
      ...socialMedia[1],
      link: instagramData?.value ?? socialMedia[1].link,
    };
    setSocialMedia([facebook, instagram]);
  };

  const fecthAllProfile = async () => {
    const data = await getAllProfile();
    setProfiles(data);
  };

  useEffect(() => {
    fecthAllProfile();
  }, []);

  useEffect(() => {
    loadSocialMedia();
  }, [profiles]);

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
              {socialMedia &&
                socialMedia.map(
                  (item) =>
                    item.display && (
                      <Link key={item.id} href={item.link} target="_blank">
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
            {contactDetails &&
              contactDetails.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="text-light pt-[3px] text-lemon">
                    {item.icon}
                  </div>
                  <div>{item.description}</div>
                </div>
              ))}
          </div>
        </div>
        <div className="text-sm pb-[54px] text-justify ">
          Disclaimer: The information provided on this website is for general
          informational purposes only and does not constitute medical advice,
          diagnosis, or treatment. It is not intended to be a substitute for
          consultation with a qualified healthcare professional. By using this
          site or submitting a booking request, you acknowledge that medical
          decisions, including the suitability and approval of any treatment,
          will be made solely at the discretion of a registered healthcare
          professional, based.
        </div>
        <div className="flex sm:flex-row flex-col gap-2 justify-between text-[14px] text-light-green">
          <div className="text-center sm:text-right">
            © 2023 Herbal Opinion. All rights reserved.
          </div>
          <div className="flex sm:justify-end justify-center gap-6 ">
            <Link href="privacy-policy">Privacy Policy</Link>
            <Link href="terms-and-conditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
