"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SignUp } from "../action";
import { Register } from "@/src/types";
import { useRouter } from "next/navigation";

interface signProp {
  email: string;
  name: string;
  password: string;
}

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const Router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signProp>({ mode: "onTouched" });

  // Handle form submit
  const onSubmit = async (data: signProp) => {
    setIsSubmitting(true);
    const UserData: Register = {
      email: data.email,
      password: data.password,
      fullname: data.name,
    };

    try {
      const response = await SignUp(UserData);
      if (response?.user) {
        toast.success("Signup successful! Please log in.");
        Router.push("/auth/login");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Signup Form */}
      <div className="flex items-center justify-center bg-white p-8 w-[45%]">
        <div className="w-full max-w-sm space-y-6 shadow-lg rounded-lg p-6 bg-white">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center my-6">
            <div className="relative h-full w-[137px]">
              <Image
                src="/logo.png"
                alt="logo"
                width={500}
                height={500}
                className="object-cover object-bottom w-full h-auto"
              />
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#374151]">
                Username
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                placeholder="Enter your username"
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#374151]">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#374151]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 pr-10 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] hover:text-gray-600"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4" />
                  ) : (
                    <FaEye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Background Image */}
      <div className="flex w-[55%] relative">
        <div className="relative h-full w-full">
          <Image
            src="/img/login-side.png"
            alt="login-side"
            fill
            className="object-cover object-bottom w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
