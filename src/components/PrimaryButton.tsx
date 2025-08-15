"use client";

import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const PrimaryButton = ({
  title,
  displayArrow = true,
  background = "lemon",
  text = "farm-green",
  url = "#",
  isButton = false,
  py = "py-[5px]",
}: {
  title: string;
  displayArrow?: boolean;
  background?: string;
  text?: string;
  url?: string;
  isButton?: boolean;
  py?: string;
}) => {
  return (
    <div className="flex">
      {!isButton && (
        <Link
          href={url}
          className={`${background ? "bg-" + background : "bg-lemon"} 
        ${text ? "text-" + text : "text-farm-green"}
          flex items-center gap-3  text-farm-green px-7 ${py} rounded-full sm:text-[25px] text-[20px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}
        >
          <div className="flex items-center gap-3 pt-[3px] md:pt-[6px] ">
            {title}
            {displayArrow && (
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            )}
          </div>
        </Link>
      )}

      {isButton && (
        <button
          type="submit"
          className={`${background ? "bg-" + background : "bg-lemon"} 
        ${text ? "text-" + text : "text-farm-green"}
          flex items-center gap-3  text-farm-green px-7 py-[5px] rounded-full sm:text-[25px] text-[20px] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}
        >
          <div className="flex items-center gap-3 pt-[3px] md:pt-[6px] ">
            {title}
            {displayArrow && (
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default PrimaryButton;
