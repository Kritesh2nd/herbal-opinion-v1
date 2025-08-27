"use client";

import React, { useEffect, useState } from "react";
import DashboardSubTitle from "@/src/components/dashboard/DashboardSubTitle";
import {
  CreateProfileProps,
  UpdateManyProfileProps,
  UpdateProfileProps,
} from "@/src/types";
import { getProfileById, getAllProfile, updateProfiles } from "../action";
import toast from "react-hot-toast";

export interface profileProp {
  email: string;
  hours: string;
  facebook: string;
  instagram: string;
}

const profileData = [
  {
    id: 1,
    name: "email",
    title: "Bussiness email",
    placeholder: "e.g., support@herbalopinion.com.au",
  },
  {
    id: 2,
    name: "hours",
    title: "Open hours",
    placeholder: "e.g., Mon-Fri, 9am-5pm AEST",
  },
  {
    id: 3,
    name: "facebook",
    title: "Bussiness Facebook Page Link",
    placeholder: "e.g., https://facebook.com",
  },
  {
    id: 4,
    name: "instagram",
    title: "Bussiness Instagram Page Link",
    placeholder: "e.g., https://instagram.com",
  },
];

const page = () => {
  const [formData, setFormData] = useState<UpdateProfileProps[]>([
    {
      id: 1,
      name: "email",
      value: "",
    },
    {
      id: 2,
      name: "hours",
      value: "",
    },
    {
      id: 3,
      name: "facebook",
      value: "",
    },
    {
      id: 4,
      name: "instagram",
      value: "",
    },
  ]);

  const loadProfile = async () => {
    const response: UpdateProfileProps[] = await getAllProfile();

    const emailData = response.find((item) => item.name === "email");
    const hoursData = response.find((item) => item.name === "hours");
    const facebookData = response.find((item) => item.name === "facebook");
    const instagramData = response.find((item) => item.name === "instagram");

    const updatedFormData: UpdateProfileProps[] = [
      { id: 1, name: "email", value: emailData?.value ?? formData[0].name },
      { id: 2, name: "hours", value: hoursData?.value ?? formData[1].name },
      {
        id: 3,
        name: "facebook",
        value: facebookData?.value ?? formData[2].name,
      },
      {
        id: 4,
        name: "instagram",
        value: response[3].value ?? instagramData?.name,
      },
    ];

    setFormData(updatedFormData);
  };

  const handelUpdateProfile = async () => {
    const final: UpdateManyProfileProps = {
      title: "update",
      profiles: formData,
    };
    const response = await updateProfiles(final);
    if (response.status >= 400) {
      toast.error("Failed to Update Profile");
    } else {
      toast.success("Successfully Updated Profile");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) =>
      prev.map((field) => (field.name === id ? { ...field, value } : field))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handelUpdateProfile();
  };

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto p-6">
      <div className="pb-6">
        <DashboardSubTitle
          displayButton={false}
          displaySearch={false}
          title="Manage Profile"
          subTitle="Manage social media links and working hours for your healthcare website"
        />
      </div>
      <div className="flex flex-col  ">
        <form className="w-full flex flex-col gap-6 p-5 pt-4 max-w-[700px] border border-primary-lgray shadow-xs rounded-lg">
          {profileData.map((item) => {
            const field = formData.find((f) => f.name === item.name);
            return (
              <div key={item.id}>
                <label htmlFor={item.name} className="text-primary-black pb-1">
                  {item.title}
                </label>
                <input
                  type="text"
                  id={item.name}
                  className="dashdoardInputStyle"
                  placeholder={item.placeholder}
                  required
                  onChange={handleChange}
                  value={field?.value || ""}
                />
              </div>
            );
          })}

          <div className="flex justify-start gap-4 pt-2">
            <button
              type="submit"
              className="py-3 px-7 border-1 border-farm-green bg-farm-green text-primary-white rounded-md cursor-pointer"
              onClick={handleSubmit}
            >
              <div className="-mb-1 ">Save Profile</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
