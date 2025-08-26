// get /dashboard/total-submission
// get /dashboard/recent-activities

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

import axiosInstance from "@/src/lib/axios.utils";
import {
  CreateFaqDto,
  CreatePricingDto,
  PaginationDto,
  SearchDto,
} from "@/src/types";

export const funcc = async () => {
  const response = await axiosInstance.get("");
  return response.data;
};

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

export const getContactPaginated = async (page?: number, limit?: number) => {
  const response = await axiosInstance.get(
    `/contacts/paginated?page=${page}&limit=${limit}`
  );
  return response.data;
};

export const getContactSearchResults = async (
  page?: number,
  limit?: number,
  attribute: string = "fullname",
  search: string = ""
) => {
  const response = await axiosInstance.get(
    `/contacts/search?page=${page}&limit=${limit}&attribute=${attribute}&search=${search}`
  );
  return response.data;
};

export const getAllContact = async () => {
  const response = await axiosInstance.get("/contacts");
  return response.data;
};

export const getContactById = async (id: number) => {
  const response = await axiosInstance.get("/contacts/" + id);
  return response.data;
};

export const getContactCsv = async () => {
  const response = await axiosInstance.get("/contacts/download-csv", {
    responseType: "blob",
  });
  return response;
};

export const deleteContactById = async (id: number) => {
  const response = await axiosInstance.delete("/contacts/" + id);
  return response.data;
};

// Clinic
export const getClinicWeeklyStats = async () => {
  const response = await axiosInstance.get("clinics/weekly-stats");
  return response.data;
};

// Pricing
export const createPricing = async (formData: CreatePricingDto) => {
  const response = await axiosInstance.post("pricing", formData);
  return response.data;
};

export const getAllPricing = async () => {
  const response = await axiosInstance.get("pricing");
  console.log("pricing data ", response.data);
  return response.data;
};

export const getPricingById = async (id: number) => {
  const response = await axiosInstance.get("pricing/" + id);
  console.log("response for pricing", response.data);
  return response.data;
};

export const updatePricingById = async (formData: any, id: number) => {
  const response = await axiosInstance.patch("pricing/" + id, formData);
  return response.data;
};

export const deletePricingById = async (id: number) => {
  const response = await axiosInstance.delete("pricing/" + id);
  return response.data;
};

// Faq
export const createFaq = async (formData: CreateFaqDto) => {
  const response = await axiosInstance.post("faqs", formData);
  return response.data;
};

export const getAllFaqs = async () => {
  const response = await axiosInstance.get("faqs");
  console.log("faq data ", response.data);
  return response.data;
};

export const getFaqById = async (id: number) => {
  const response = await axiosInstance.get("faqs/" + id);
  console.log("response for faq", response.data);
  return response.data;
};

export const updateFaqById = async (formData: any, id: number) => {
  const response = await axiosInstance.patch("faqs/" + id, formData);
  return response.data;
};

export const deleteFaqById = async (id: number) => {
  const response = await axiosInstance.delete("faqs/" + id);
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
