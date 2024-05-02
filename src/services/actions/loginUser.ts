"use server";

import { FormValues } from "@/app/login/page";

// login user
export const loginUser = async (data: FormValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const loginInfo = await res.json();

  return loginInfo;
};
