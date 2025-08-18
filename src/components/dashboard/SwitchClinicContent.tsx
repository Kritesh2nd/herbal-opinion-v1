import React from "react";
import DashboardSubTitle from "./DashboardSubTitle";

const SwitchClinicContent = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto p-6">
      <div className="pb-6">
        <DashboardSubTitle
          displaySearch={true}
          displayButton={false}
          url="/dashboard"
          title="Manage Switch Clinic Forms"
          subTitle="Manage switch clinic forms for your healthcare website"
        />
      </div>
      <div>SwitchClinicContent</div>
    </div>
  );
};

export default SwitchClinicContent;
