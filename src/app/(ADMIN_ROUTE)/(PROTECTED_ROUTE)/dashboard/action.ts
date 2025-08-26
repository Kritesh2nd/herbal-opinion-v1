import axiosInstance from "@/src/lib/axios.utils";
import { CreateFaqDto, CreatePricingDto } from "@/src/types";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";

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
  const response = await axiosInstance.get("contacts");
  return response.data;
};

export const getContactById = async (id: number) => {
  const response = await axiosInstance.get("contacts/" + id);
  return response.data;
};

export const getContactCsv = async () => {
  const response = await axiosInstance.get("contacts/download-csv", {
    responseType: "blob",
  });
  return response;
};

export const deleteContactById = async (id: number) => {
  const response = await axiosInstance.delete("contacts/" + id);
  handelToast(
    response,
    "Successfully Deleted Contact",
    "Failed to Delete Contact"
  );
  return response.data;
};

// Clinic
export const getClinicWeeklyStats = async () => {
  const response = await axiosInstance.get("clinics/weekly-stats");
  return response.data;
};

export const getClinicPaginated = async (page?: number, limit?: number) => {
  const response = await axiosInstance.get(
    `/clinics/paginated?page=${page}&limit=${limit}`
  );
  return response.data;
};

export const getClinicSearchResults = async (
  page?: number,
  limit?: number,
  attribute: string = "name",
  search: string = ""
) => {
  const response = await axiosInstance.get(
    `/clinics/search?page=${page}&limit=${limit}&attribute=${attribute}&search=${search}`
  );
  return response.data;
};

export const getAllClinic = async () => {
  const response = await axiosInstance.get("clinics");
  return response.data;
};

export const getClinicById = async (id: number) => {
  const response = await axiosInstance.get("clinics/" + id);
  return response.data;
};

export const getClinicCsv = async () => {
  const response = await axiosInstance.get("clinics/download-csv", {
    responseType: "blob",
  });
  return response;
};

export const deleteClinicById = async (id: number) => {
  const response = await axiosInstance.delete("clinics/" + id);
  handelToast(
    response,
    "Successfully deleted clinic",
    "Failed to delete clinic"
  );
  return response.data;
};

// Pricing
export const createPricing = async (formData: CreatePricingDto) => {
  const response = await axiosInstance.post("pricing", formData);
  handelToast(
    response,
    "Successfully Created Pricing",
    "Failed to Create Pricing"
  );
  return response.data;
};

export const getAllPricing = async () => {
  const response = await axiosInstance.get("pricing");
  return response.data;
};

export const getPricingById = async (id: number) => {
  const response = await axiosInstance.get("pricing/" + id);
  return response.data;
};

export const updatePricingById = async (formData: any, id: number) => {
  const response = await axiosInstance.patch("pricing/" + id, formData);
  handelToast(
    response,
    "Successfully Updated Pricing",
    "Failed to Update Pricing"
  );
  return response.data;
};

export const deletePricingById = async (id: number) => {
  const response = await axiosInstance.delete("pricing/" + id);
  handelToast(
    response,
    "Successfully Deleted Pricing",
    "Failed to Delete Pricing"
  );
  return response.data;
};

// Faq
export const createFaq = async (formData: CreateFaqDto) => {
  const response = await axiosInstance.post("faqs", formData);
  handelToast(response, "Successfully Created FAQ", "Failed to Create FAQ");
  return response.data;
};

export const getAllFaqs = async () => {
  const response = await axiosInstance.get("faqs");
  return response.data;
};

export const getFaqById = async (id: number) => {
  const response = await axiosInstance.get("faqs/" + id);
  return response.data;
};

export const updateFaqById = async (formData: any, id: number) => {
  const response = await axiosInstance.patch("faqs/" + id, formData);
  handelToast(response, "Successfully Update FAQ", "Failed to Update FAQ");
  return response.data;
};

export const deleteFaqById = async (id: number) => {
  const response = await axiosInstance.delete("faqs/" + id);
  handelToast(response, "Successfully Deleted FAQ", "Failed to Deleted FAQ");
  return response.data;
};

const handelToast = (
  response: AxiosResponse<any, any>,
  successMessage: string,
  failedMessage: string
) => {
  if (response.status >= 400) {
    toast.error(failedMessage);
  } else {
    toast.success(successMessage);
  }
};
