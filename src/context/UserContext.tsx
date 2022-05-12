import React, { createContext, useReducer,useContext } from "react";
import { AuthReducer } from "./AuthReducer";

const initialUserDetail = {
  accessToken: "",
  refreshToken:"",
  email: "",
};
const userDetailContext = createContext<{
  state?: any;
  dispatch?: any;
}>({
  state: initialUserDetail,
  dispatch: () => undefined,
});

export const UserContext = (props: any) => {
    const { children } = props;
     const [state, dispatch] = useReducer(AuthReducer, initialUserDetail);
  return (
    <userDetailContext.Provider value={{state,dispatch}}>{children}</userDetailContext.Provider>
  );
};

export const UserContextState = () => {
  return useContext(userDetailContext);
};
