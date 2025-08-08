import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavData } from "../constants";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="globalContainer">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="relative w-fit h-[52px]">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 ">
            {NavData.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className="text-primary text-[20px]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/patient-portal"
              className="px-[30px] py-[10px] border border-primary rounded-full text-primary text-[25px]"
            >
              <p className="mt-1">Patient Portal</p>
            </Link>
            <Link
              href="/get-started"
              className="px-[30px] py-[10px] border border-secondary bg-secondary rounded-full text-primary text-[25px]"
            >
              <p className="mt-1">Get Started</p>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
