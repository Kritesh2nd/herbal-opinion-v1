"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import MessageReceived from "@/src/components/MessageReceived";
import Image from "next/image";
import { createNewContact, getAllProfile } from "../action";
import {
  ContactDetailType,
  CreateContactDto,
  UpdateProfileProps,
} from "@/src/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { IoMail } from "react-icons/io5";
import { FaClock, FaFacebookF, FaInstagram } from "react-icons/fa";
const Contact = () => {
  const router = useRouter();
  const [profiles, setProfiles] = useState<UpdateProfileProps[]>([]);
  const [showMessageSent, setShowMessageSent] = useState<boolean>(false);
  const [formData, setFormData] = useState<CreateContactDto>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
    contactAgree: false,
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const [socialMedia, setSocialMedia] = useState([
    { id: 1, display: true, icon: <FaFacebookF />, link: "/facebook" },
    { id: 2, display: true, icon: <FaInstagram />, link: "/instagram" },
  ]);
  const [contactDetails, setContactDetails] = useState<ContactDetailType[]>([
    {
      id: 1,
      icon: <IoMail />,
      title: "Email",
      description: "support@herbalopinion.com.au",
    },
    {
      id: 2,
      icon: <FaClock />,
      title: "Hours",
      description: "Mon-Fri, 9am-5pm AEST",
    },
  ]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const setChecked = () => {
    setFormData({ ...formData, contactAgree: !formData.contactAgree });
  };

  const handelCreateContact = async (formData: CreateContactDto) => {
    const response = await createNewContact(formData);
    if (response.status >= 400) {
      toast.error("Failed to Send Message");
    } else {
      setTimeout(() => {
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          message: "",
          contactAgree: false,
        });
        setShowMessageSent(true);
      }, 500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage("");
    setError("");
    setLoading(true);
    handelCreateContact(formData);
  };

  const toggleActive = () => {
    setShowMessageSent(false);
    router.push("/");
  };

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
    <div className="bg-light-green">
      <MessageReceived active={showMessageSent} toggleActive={toggleActive} />
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
                  <label htmlFor="fullname" className="text-primary-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    className="inputStyle"
                    placeholder="Your name"
                    required
                    onChange={handleChange}
                    value={formData.fullname}
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
                      id="contactAgree"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.contactAgree}
                      onChange={setChecked}
                    />
                  </div>
                  <label htmlFor="contactAgree" className="">
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
              {contactDetails &&
                contactDetails.map((item) => (
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
                {socialMedia &&
                  socialMedia.map(
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
