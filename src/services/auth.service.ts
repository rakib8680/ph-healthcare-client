import { authKey } from "@/app/constants/authkey";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";





// store user info in local storage
export const storeUserInfo = (accessToken: string) => {
  //   console.log(accessToken);

  return setToLocalStorage(authKey, accessToken);
};



// remove user info from local storage
export const removeUserInfo = () => {
  return removeFromLocalStorage(authKey);
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



// check if user logged in
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};
