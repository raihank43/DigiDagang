"use server";

import { redirect } from "next/navigation";
import { LoginInput, MyResponse } from "./type";
import { toast } from "react-toastify";
import { cookies } from "next/headers";

export async function loginServerAction(formData: LoginInput) {
  const response = await fetch("http://localhost:3000/api/login", {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = (await response.json()) as MyResponse<{ accessToken: string }>;

  if (!response.ok) {
    redirect("/login?error=" + result.message);
  }

  if (result.data) {
    cookies().set("Authorization", "Bearer " + result.data.accessToken);
  }
  return redirect("/");
}
