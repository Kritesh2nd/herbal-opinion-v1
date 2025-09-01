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
  try {
    const response = await axiosInstance.get("/auth/refresh-tokens", {
      params: { refreshToken: token.refreshToken },
    });
    let count = 0;
    if (response.status == 401) {
      count = 5;
    }
    const tokenPairs = response.data.tokens;
    return {
      ...token,
      refreshTokenExipreCount: count,
      accessToken: tokenPairs.accessToken,
      refreshToken: tokenPairs.refreshToken,
      accessTokenExpires: Date.now() + 1 * 20 * 1000,
    };
  } catch (error) {
    let count = 5;
    return {
      ...token,
      refreshTokenExipreCount: count,
      error: "RefreshAccessTokenError",
    };
  }
}

export async function validateRefreshToken(token: string): Promise<boolean> {
  try {
    const response = await axiosInstance.get("/auth/is-refresh-token-valid", {
      params: { refreshToken: token },
    });

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
