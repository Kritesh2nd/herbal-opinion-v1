import axiosInstance from "@/src/lib/axios.utils";

// Pricing
export const getAllPricning = async () => {
  const response = await axiosInstance.get("pricing");
  console.log("pricing data ", response.data);
  return response.data;
};

// Faq
export const getAllFaqs = async () => {
  const response = await axiosInstance.get("faqs");
  console.log("faq data ", response.data);
  return response.data;
};
