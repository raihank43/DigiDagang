"use server";

import { redirect } from "next/navigation";
import { LoginInput, MyResponse } from "../type";
import { toast } from "react-toastify";
import { cookies } from "next/headers";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export async function loginServerAction(formData: LoginInput) {
  const response = await fetch(baseURL + "login", {
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
