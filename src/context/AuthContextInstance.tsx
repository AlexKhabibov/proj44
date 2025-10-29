import { createContext } from "react";
import type { IAuthContext } from "../data/types";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);