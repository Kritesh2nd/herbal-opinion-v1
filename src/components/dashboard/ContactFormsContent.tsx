import React from "react";
import DashboardSubTitle from "./DashboardSubTitle";

const ContactFormsContent = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto p-6">
      <div className="pb-6">
        <DashboardSubTitle
          displaySearch={true}
          displayButton={false}
          url="/dashboard"
          title="Manage Contact Forms"
          subTitle="Manage contact submissions for your healthcare website"
        />
      </div>
      <div>ContactFormsContent</div>
    </div>
  );
};

export default ContactFormsContent;
