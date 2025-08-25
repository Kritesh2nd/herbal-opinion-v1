// get /dashboard/total-submission
// get /dashboard/recent-activities

import axiosInstance from "@/src/lib/axios.utils";

// Dashboard
export const getDashboardTotalSubmission = async () => {
  const response = await axiosInstance.get("dashboard/total-submission");
  return response.data;
};
export const getDashboardRecentActivities = async () => {
  const response = await axiosInstance.get("dashboard/recent-activities");
  return response.data;
};

// Contact
export const getContactWeeklyStats = async () => {
  const response = await axiosInstance.get("contacts/weekly-stats");
  return response.data;
};

// Clinic
export const getClinicWeeklyStats = async () => {
  const response = await axiosInstance.get("clinics/weekly-stats");
  return response.data;
};

/*



clinet side

# clinet
post /clients

# contact
post /contacts

# dashboard

# faq
get /faq

# pricing
get /pricing



dashboard

# clinet
get /clients/weekly-stats
get /clients/paginated
get /clients/search?attribute=name&search=br
get /clients
get /clients/19
get /clients/weekly-stats
get /clinics/download-csv
delete /client/19

# contact
get /contacts/weekly-stats
get /contacts/paginated
get /contacts/search?attribute=name&search=br
get /contacts
get /contacts/19
get /contacts/weekly-stats
get /contacts/download-csv
delete /contact/19

# dashboard
get /dashboard/total-submission
get /dashboard/recent-activities

faq
post /faq
get /faq
get /faq/1
pacth /faq/1
delete /faq/1

pricing
post /pricing
get /pricing
get /pricing/1
pacth /pricing/1
delete /pricing/1


*/
