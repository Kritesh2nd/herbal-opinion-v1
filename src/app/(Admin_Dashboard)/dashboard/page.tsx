"use client";
import { useState } from "react";
import { Sidebar } from "@/src/components/dashboard/sidebar";
import DashboardContent from "@/src/components/dashboard/DashboardContent";
import PricingContent from "@/src/components/dashboard/PricingContent";
import FAQsContent from "@/src/components/dashboard/FAQsContent";
import ContactFormsContent from "@/src/components/dashboard/ContactFormsContent";
import SwitchClinicContent from "@/src/components/dashboard/SwitchClinicContent";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");

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
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <div>{renderContent()}</div>
    </div>
  );
}
