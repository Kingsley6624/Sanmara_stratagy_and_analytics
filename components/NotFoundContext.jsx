"use client";
import { createContext, useContext } from "react";

export const NotFoundContext = createContext(false);
export const useNotFound = () => useContext(NotFoundContext);