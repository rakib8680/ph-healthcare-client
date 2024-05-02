import { authKey } from "@/app/constants/authkey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

// store user info in local storage
export const storeUserInfo = (accessToken: string) => {
//   console.log(accessToken);

  return setToLocalStorage(authKey, accessToken);
};



// get user 
export const getUserInfo = () => {
  
  const authToken =  getFromLocalStorage(authKey);

  console.log(authToken);
}