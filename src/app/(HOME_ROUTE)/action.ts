import axiosInstance from "@/src/lib/axios.utils";

// Pricing
export const getAllPricning = async () => {
  const response = await axiosInstance.get("pricing");
  console.log("pricing data ", response.data);
  return response.data;
};
