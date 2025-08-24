"use client";

import Image from "next/image";
import { BiTransfer } from "react-icons/bi";
import { FaInbox, FaTachometerAlt, FaTags } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { signOut } from "next-auth/react";

const sidebarItems = [
  { icon: FaHome, label: "Home", url: "/" },
  { icon: FaTachometerAlt, label: "Dashboard" },
  { icon: FaTags, label: "Pricing Manager" },
  { icon: FaCircleQuestion, label: "FAQs Editor" },
  { icon: FaInbox, label: "Contact Forms" },
  { icon: BiTransfer, label: "Switch Clinic Forms" },
  { icon: LuLogOut, label: "Log Out" },
];

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const handelLogout = () => {
    signOut();
  };

  return (
    <div className="flex flex-col w-full bg-white shadow-lg sticky top-0 h-screen">
      <div className="p-6">
        <div className="relative h-full w-[137px]">
          <Image
            src="/logo.png"
            alt="logo"
            width={500}
            height={500}
            className="object-cover object-bottom w-full h-auto"
          />
        </div>
      </div>

      <nav className="flex flex-col px-6 space-y-1 border flex-1">
        {sidebarItems.map((item, index) => (
          <div key={index + item.label} className="">
            {!item.url && (
              <button
                key={index + item.label}
                onClick={() =>
                  item.label == "Log Out"
                    ? handelLogout()
                    : onItemClick(item.label)
                }
                className={`w-full flex items-center justify-start gap-3 h-12 px-4 rounded-md text-left text-base cursor-pointer transition-all duration-200 ${
                  activeItem === item.label
                    ? "bg-[#E5EA98] text-primary hover:bg-[#E5EA98] font-bold"
                    : "text-primary-dgray hover:bg-[#E5EA98]"
                }`}
              >
                <item.icon className="w-4 h-4 -mt-1 text-primary-black" />
                {item.label}
              </button>
            )}
            {item.url && (
              <Link
                key={index + item.label}
                href={item.url}
                className={`w-full flex items-center justify-start gap-3 h-12 px-4 rounded-md text-left text-base cursor-pointer transition-all duration-200 ${
                  activeItem === item.label
                    ? "bg-[#E5EA98] text-primary hover:bg-[#E5EA98] font-bold"
                    : "text-primary-dgray hover:bg-[#E5EA98]"
                }`}
              >
                <item.icon className="w-4 h-4 -mt-1 text-primary-black" />
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
