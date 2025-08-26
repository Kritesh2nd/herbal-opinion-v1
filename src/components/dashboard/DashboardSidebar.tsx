"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaHome } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";
import { BiTransfer } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaInbox, FaTachometerAlt, FaTags } from "react-icons/fa";

const sidebarItems = [
  { icon: FaHome, label: "Home", url: "/" },
  { icon: FaTachometerAlt, label: "Dashboard", url: "/dashboard" },
  { icon: FaTags, label: "Pricing Manager", url: "/dashboard/pricing" },
  { icon: FaCircleQuestion, label: "FAQs Editor", url: "/dashboard/faq" },
  { icon: FaInbox, label: "Contact Forms", url: "/dashboard/contact" },
  {
    icon: BiTransfer,
    label: "Switch Clinic Forms",
    url: "/dashboard/clinic",
  },
  {
    icon: IoShareSocialOutline,
    label: "Profile Manager",
    url: "/dashboard/profile",
  },
  { icon: LuLogOut, label: "Log Out" },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  const handelLogout = () => {
    signOut();
  };

  return (
    <div className="flex flex-col h-full border-r-1">
      <div className="p-6 ">
        <Image src="/logo.png" alt="logo" height={52} width={137} />
      </div>
      <div className="flex flex-col gap-2 px-6">
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className={`flex rounded-sm ${
              pathname == item.url ? "text-farm-green bg-light-green" : ""
            } hover:text-farm-green hover:bg-light-green transition-all duration-300`}
          >
            {item.url && (
              <Link href={item.url} className="flex gap-3 p-4 w-full">
                <div className="text-xl">
                  <item.icon />
                </div>
                {item.label}
              </Link>
            )}
            {!item.url && (
              <button
                className="flex gap-3 p-4 w-full cursor-pointer"
                onClick={handelLogout}
              >
                <div className="text-xl">
                  <item.icon />
                </div>
                {item.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
