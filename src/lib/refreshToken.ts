import axios from "axios";

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
  console.log("requesting refrwsh token from frontend");
  try {
    const response = await axiosInstance.get("/auth/refresh-tokens", {
      params: { "refresh-token": token.refreshToken },
    });

    const refreshedTokens = response.data.tokens;

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      refreshToken: refreshedTokens.refreshToken,
      accessTokenExpires: Date.now() + 60 * 60 * 1000,
    };
  } catch (error) {
    console.error("RefreshAccessToken error:", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
