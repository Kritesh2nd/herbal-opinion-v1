import axios from "axios";
import { signOut } from "next-auth/react";
import Router from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface JWTToken {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  //eslint-disable-next-line
  [key: string]: any;
}

export async function refreshAccessToken(token: JWTToken): Promise<JWTToken> {
  console.log("requesting refrwsh token from frontend", token);

  try {
    console.log("shiterrorr1");
    console.log("shiterror1");
    // if (!(await validateRefreshToken(token.refreshToken))) {
    //   console.log("shiterror2");
    //   return { ...token, error: "RefreshTokenInvalid" };
    // }
    console.log("shiterror3");
    const response = await axiosInstance.get("/auth/refresh-tokens", {
      params: { refreshToken: token.refreshToken },
    });
    console.log("shiterror4");

    console.log("refresh token called", response);
    const tokenPairs = response.data.tokens;
    console.log("shiterror5");
    return {
      ...token,
      accessToken: tokenPairs.accessToken,
      refreshToken: tokenPairs.refreshToken,
      accessTokenExpires: Date.now() + 1 * 20 * 1000,
    };
  } catch (error) {
    console.error("RefreshAccessToken error:", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export async function validateRefreshToken(token: string): Promise<boolean> {
  try {
    const response = await axiosInstance.get("/auth/is-refresh-token-valid", {
      params: { refreshToken: token },
    });
    console.log("response.data.isValid1", response);
    console.log("response.data.isValid2", response.data);

    return response.data.isValid;
  } catch (error) {
    return false;
  }
}

export const getTokenExpiration = (token: string): number | null => {
  try {
    const payloadBase64 = token.split(".")[1]; // get payload
    const payloadJson = atob(
      payloadBase64.replace(/-/g, "+").replace(/_/g, "/")
    );
    const payload = JSON.parse(payloadJson);

    if (!payload.exp) return null;

    // exp is in seconds since epoch → convert to ms
    return payload.exp * 1000;
  } catch (err) {
    console.error("Failed to decode token", err);
    return null;
  }
};
