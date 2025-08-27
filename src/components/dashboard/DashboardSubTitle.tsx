"use client";

import Link from "next/link";
import React, { ChangeEvent } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const DashboardSubTitle = ({
  title = "Manage Pricing Plans",
  subTitle = "Configure and update the pricing plans for Herbal Opinion services",
  name = "Add New Pricing Plan",
  url = "/dashboard",
  displayButton = true,
  displaySearch = false,
  displayIcon = true,
  searchValue = "",
  funcBtn = () => {},
  funcSearch = () => {},
}: {
  title?: string;
  subTitle?: string;
  name?: string;
  url?: string;
  displayButton?: boolean;
  displaySearch?: boolean;
  displayIcon?: boolean;
  searchValue?: string;
  funcBtn?: () => void;
  funcSearch?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="flex flex-row  gap-4">
      <div className="flex flex-col flex-1">
        <h2 className="text-[25px] text-primary-black pb-[2px]">{title}</h2>
        <p className="text-primary-dgray">{subTitle}</p>
      </div>

      {displaySearch && (
        <div className="flex items-center">
          <div className="flex flex-row">
            <label
              htmlFor="submission"
              className="flex items-center border border-r-0 rounded-l-md  p-2 pr-0"
            >
              <IoSearch className="text-2xl text-primary-dgray" />
            </label>
            <input
              type="text"
              id="submission"
              className="border border-l-0 rounded-r-md pt-[12px] pb-2 pr-5 pl-2 focus:outline-none "
              placeholder="Search submissions..."
              required
              onChange={funcSearch}
              value={searchValue}
            />
          </div>
        </div>
      )}
      {displayButton && (
        <div className="flex items-center">
          <button
            onClick={funcBtn}
            className="flex items-center flex-row gap-4 py-2 px-5 border border-farm-green text-white bg-farm-green rounded-md cursor-pointer"
          >
            {displayIcon && (
              <div className=" ">
                <FaPlus />
              </div>
            )}
            <div className=" pt-[3px]">{name}</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default DashboardSubTitle;
