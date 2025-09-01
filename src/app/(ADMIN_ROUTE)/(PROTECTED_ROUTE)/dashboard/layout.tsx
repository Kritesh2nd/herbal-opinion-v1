"use client";

import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/src/components/dashboard/DashboardSidebar";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  useEffect(() => {
    if (
      session?.refreshTokenExipreCount &&
      session?.refreshTokenExipreCount >= 5
    ) {
      signOut({ callbackUrl: "/login" });
    }
  }, [session]);
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
