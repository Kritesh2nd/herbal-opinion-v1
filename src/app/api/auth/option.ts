import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "../../(ADMIN_ROUTE)/(AUTH)/action";
import { refreshAccessToken } from "@/src/lib/refreshToken";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        try {
          const res = await loginUser({
            email: credentials.email,
            password: credentials.password,
          });

          const { tokens, user } = res;
          if (!tokens || !user) return null;

          return {
            id: user.id,
            email: user.email,
            fullname: user.fullname,
            roles: user.roles,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
          };
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },

  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.fullname = user.fullname;
        token.roles = user.roles;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = Date.now() + 60 * 60 * 1000;
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }
      const refreshedToken = await refreshAccessToken(token);
      return {
        ...token,
        ...refreshedToken,
      };
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          fullname: token.fullname,
          roles: token.roles,
        };
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
