import axiosInstance from "@/src/libs/axios.utils";
import { Register } from "@/src/types";


export const SignUp = async (userData: Register) => {
  const response = await axiosInstance.post("auth/register", userData);
  return response.data;
};