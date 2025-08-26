import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/src/app/api/auth/option";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return <>{children}</>;
}
