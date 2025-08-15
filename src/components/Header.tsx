"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavData } from "../constants";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {}, [toggle]);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="globalContainer">
        <div className="flex flex-col sm:flex-row sm:gap-0 justify-between items-center py-4">
          <div className="flex justify-between items-center sm:w-auto w-full">
            {/* Logo */}
            <Link
              href="/"
              className="relative sm:h-[52px] h-[32px] sm:w-[138px] w-[90px]"
            >
              <Image src={"/logo.png"} alt="logo" fill />
            </Link>
            <div className="flex sm:hidden">
              <HiOutlineBars3
                className="text-3xl"
                onClick={() => setToggle(!toggle)}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex">
            <nav className="hidden md:flex items-center gap-6">
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
          </div>

          {/* Action Buttons */}
          <div className=" items-center gap-4 hidden sm:flex">
            <Link
              href="/patient-portal"
              className="border-3 border-farm-green text-farm-green sm:px-4 px-6 sm:py-2 py-1 rounded-full md:text-[25px] sm:text-[20px] text-[18px] transition-all duration-300 hover:scale-105"
            >
              <p className="mt-1">Patient Portal</p>
            </Link>
            <Link
              href="/assessment"
              className="border-3 border-lemon text-farm-green bg-lemon sm:px-4 px-6 sm:py-2 py-1 rounded-full md:text-[25px] sm:text-[20px] text-[18px] transition-all duration-300 hover:scale-105"
            >
              <p className="mt-1">Get Started</p>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle ? "w-[100vw]" : "w-[0]"
        } fixed top-0 right-0 h-[100vh] w-0 z-40 transition-all duration-300 `}
      >
        <div className="h-full w-full relative text-primary-white">
          <div className="h-full w-full absolute bg-black opacity-50 z-30"></div>
          <div className="h-full w-full absolute z-30">
            <div className="bg-black h-full w-full">
              <div className="flex flex-col z-50 ">
                <div className="flex justify-end pt-4 pr-5">
                  <RxCross2
                    className="text-3xl"
                    onClick={() => setToggle(!toggle)}
                  />
                </div>
                <nav className="flex flex-col px-5 pt-10 ">
                  <Link
                    href="/"
                    className="text-primary-white text-[18px] mb-5 py-2 text-center"
                    onClick={() => setToggle(!toggle)}
                  >
                    Home
                  </Link>
                  {NavData.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.url}
                      className="text-primary-white text-[18px] mb-5 py-2 text-center"
                      onClick={() => setToggle(!toggle)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/patient-portal"
                    className="text-primary-white text-[18px] mb-5 py-2 text-center"
                    onClick={() => setToggle(!toggle)}
                  >
                    Patient Portal
                  </Link>
                  <Link
                    href="/assessment"
                    className="text-primary-white text-[18px] mb-5 py-2 text-center"
                    onClick={() => setToggle(!toggle)}
                  >
                    Get Started
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
