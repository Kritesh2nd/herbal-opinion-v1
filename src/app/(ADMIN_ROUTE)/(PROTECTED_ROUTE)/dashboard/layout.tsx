"use client";

import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/src/components/dashboard/DashboardSidebar";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-[100vh] w-full">
      <div className="flex flex-col w-[340px]">
        <DashboardSidebar />
      </div>
      <div className="flex flex-col flex-1">
        <div className="w-full h-[7%]">
          <DashboardHeader />
        </div>

        <div className="h-[93%] overflow-y-auto">
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
