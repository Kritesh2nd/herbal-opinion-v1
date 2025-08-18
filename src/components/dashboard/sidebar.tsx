"use client";

import Image from "next/image";
import { BiTransfer } from "react-icons/bi";
import { FaInbox, FaTachometerAlt, FaTags } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";

const sidebarItems = [
  { icon: FaTachometerAlt, label: "Dashboard" },
  { icon: FaTags, label: "Pricing Manager" },
  { icon: FaCircleQuestion, label: "FAQs Editor" },
  { icon: FaInbox, label: "Contact Forms" },
  { icon: BiTransfer, label: "Switch Clinic Forms" },
];

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <div className="w-[300px] bg-white shadow-lg sticky top-0 h-screen">
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

      <nav className="px-6 space-y-1">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onItemClick(item.label)}
            className={`w-full flex items-center justify-start gap-3 h-12 px-4 rounded-md text-left text-base  ${
              activeItem === item.label
                ? "bg-[#E5EA98] text-primary hover:bg-[#E5EA98] font-bold"
                : "text-[#625B5F] hover:bg-[#E5EA98]"
            }`}
          >
            <item.icon className="w-4 h-4 -mt-1" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
