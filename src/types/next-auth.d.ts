import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      fullname: string;
      roles: string;
    } & DefaultSession["user"];
    accessToken?: string;
    refreshToken?: string;
    error?: string;
    refreshTokenExpired: boolean;
  }

  interface User extends DefaultUser {
    id: string;
    email: string;
    fullname: string;
    roles: string;
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    fullname: string;
    roles: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
    refreshTokenExpires: number;
    error?: string;
    refreshTokenExpired: boolean;
  }
}

export interface JWTToken extends DefaultJWT {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  id: string;
  email: string;
  fullname: string;
  roles: string | string[];
  error?: string;
}
