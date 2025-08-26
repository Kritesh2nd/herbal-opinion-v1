import axiosInstance from "@/src/lib/axios.utils";

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
