import { authKey } from "@/app/constants/authkey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { JwtPayload } from "jwt-decode";



// store user info in local storage
export const storeUserInfo = (accessToken: string) => {
  //   console.log(accessToken);

  return setToLocalStorage(authKey, accessToken);
};



// get user
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    // console.log(decodedData);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};
