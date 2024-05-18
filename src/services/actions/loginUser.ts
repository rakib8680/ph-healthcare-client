
import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";


// login user
export const loginUser = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // cache: "no-store",
      credentials:'include'
    }
  );

  const loginInfo = await res.json();

  if(loginInfo.data.accessToken){
    setAccessToken(loginInfo.data.accessToken, {
      redirect: "/dashboard"
    })
  }

  return loginInfo;
};
