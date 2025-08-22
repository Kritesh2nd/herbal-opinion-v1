import axiosInstance from "@/src/lib/axios.utils";
import { LoginDto, UserRegisterDto } from "@/src/types";

export interface UserResponse {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: {
    id: number;
    email: string;
    fullname: string;
    roles: string;
    verified?: boolean;
    created_at: string;
    updated_at: string;
  };
}

export interface VerificationProps {
  email?: string;
  otp: string;
}

export const SignUpUser = async (userData: UserRegisterDto) => {
  const response = await axiosInstance.post("auth/register", userData);
  return response.data;
};

export const UserVerification = async (userData: VerificationProps) => {
  const response = await axiosInstance.patch(
    "auth/register/verification",
    userData
  );
  return response.data;
};

export const loginUser = async (userData: LoginDto) => {
  const response = await axiosInstance.post("auth/login", userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
