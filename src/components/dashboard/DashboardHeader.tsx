"use client";

import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";

const DashboardHeader = () => {
  const { data, status } = useSession();

  return (
    <header className=" bg-white shadow-bottom px-7 py-3 z-20 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1F2937]">Dashboard</h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#7B7B7B] rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">
              <FaUserAlt color="white" />
            </span>
          </div>
          <div className="text-left">
            <div className="text-base  text-gray-900">
              Mr. {data?.user?.fullname}
            </div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
