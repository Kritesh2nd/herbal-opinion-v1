"use client";
import { useState } from "react";
import { Sidebar } from "@/src/components/dashboard/sidebar";
import DashboardContent from "@/src/components/dashboard/DashboardContent";
import PricingContent from "@/src/components/dashboard/PricingContent";
import FAQsContent from "@/src/components/dashboard/FAQsContent";
import ContactFormsContent from "@/src/components/dashboard/ContactFormsContent";
import SwitchClinicContent from "@/src/components/dashboard/SwitchClinicContent";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Pricing Manager");

  const renderContent = () => {
    switch (activeItem) {
      case "Dashboard":
        return <DashboardContent />;
      case "Pricing Manager":
        return <PricingContent />;
      case "FAQs Editor":
        return <FAQsContent />;
      case "Contact Forms":
        return <ContactFormsContent />;
      case "Switch Clinic Forms":
        return <SwitchClinicContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex overflow-x-hidden h-screen">
      {/* left section: side bar */}
      <section className="w-[340px]">
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      </section>

      {/* right section: dashboard contents */}
      <section className="flex flex-col flex-1 h-[100vh]">
        {/* dashboard header */}
        <div className="h-[65px] overflow-hidden">
          <DashboardHeader />
        </div>
        {/* dashboard contents */}
        <div className="flex-1 h-[calc(100%-65px)] overflow-hidden">
          {renderContent()}
        </div>
      </section>
    </div>
  );
}
