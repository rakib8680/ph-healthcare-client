import { authKey } from "@/constants/authkey";
import { removeUserInfo } from "../auth.service";
import deleteCookies from "./deleteCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";



export const logOutUser = (router: AppRouterInstance) => {
    removeUserInfo();
    deleteCookies([authKey,'refreshToken'])
    router.push('/')
    router.refresh();
  };