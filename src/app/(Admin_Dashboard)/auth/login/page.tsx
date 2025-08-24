"use client";
import Image from "next/image";
import { useState } from "react";
import { FaLeaf, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex ">
      {/* Left side - Login Form */}
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

          {/* Login Form */}
          <div className="space-y-4">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#374151]">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#374151]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#E5E7EB] hover:text-gray-600"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4" />
                  ) : (
                    <FaEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full bg-primary hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
              Login
            </button>
          </div>
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
