import React from "react";

export const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        email: action.email,
        accessToken: action.accessToken,
      };
    case "logout":
      localStorage.setItem("email", "");
      localStorage.setItem("accessToken", "");
      localStorage.setItem("refreshToken", "");

      return state;
    default:
      throw state;
  }
};
