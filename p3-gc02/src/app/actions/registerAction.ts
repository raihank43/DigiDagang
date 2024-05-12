"use server";


import { redirect } from "next/navigation";
import { MyResponse, RegisterInput } from "../type";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export async function RegisterAction(formData: RegisterInput) {
  const response = await fetch(baseURL + "register", {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = (await response.json()) as MyResponse<{ data: {} }>;

  if (!response.ok) {
    console.log(result.error);
    redirect("/register?error= " + result.error )
  }

  if (result.message) {
    redirect("/login")
  }
}
