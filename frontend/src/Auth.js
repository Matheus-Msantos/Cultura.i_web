import React, { createContext } from "react";

export const AuthContext = createContext(localStorage.getItem('Token'));

const userDb = localStorage.getItem('User')
export const UserArray = createContext(JSON.parse(userDb))