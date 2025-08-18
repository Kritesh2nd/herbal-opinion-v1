import React from "react";
import DashboardSubTitle from "./DashboardSubTitle";

const FormContainer = () => {
  return (
    <div className="absolute h-full w-full top-0 left-0">
      <div className="h-full w-full relative">
        <div className="absolute h-full w-full"></div>
        <div className="absolute h-full w-full">
          <div className="h-full w-full flex justify-center items-center">
            <div className="w-[580px] p-6 bg-white rounded-lg  shadow-[0_2px_4px_rgba(0,0,0,0.30)]">
              Center
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQsContent = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto p-6">
      <div className="pb-6">
        <DashboardSubTitle
          name="Add New FAQ"
          title="Manage FAQs"
          subTitle="Manage frequently asked questions for your healthcare website"
        />
      </div>
      <div>FAQsContent</div>
    </div>
  );
};

export default FAQsContent;
