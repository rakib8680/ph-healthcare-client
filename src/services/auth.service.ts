import { authKey } from "@/app/constants/authkey";
import { setToLocalStorage } from "@/utils/local-storage";

// store user info in local storage
export const storeUserInfo = (accessToken: string) => {
//   console.log(accessToken);

  return setToLocalStorage(authKey, accessToken);
};
