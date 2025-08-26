import axiosInstance from "@/src/lib/axios.utils";
import { CreateClinicDto, CreateContactDto } from "@/src/types";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";

// Pricing
export const getAllPricning = async () => {
  const response = await axiosInstance.get("pricing");
  return response.data;
};

// Faq
export const getAllFaqs = async () => {
  const response = await axiosInstance.get("faqs");
  return response.data;
};

// Contact
export const createNewContact = async (formData: CreateContactDto) => {
  const response = await axiosInstance.post("contacts", formData);
  return response;
};

// Clinic
export const createNewSwitchClinic = async (formData: CreateClinicDto) => {
  const response = await axiosInstance.post("clinics", formData);
  return response;
};
