import React, { createContext, useEffect } from "react";
import { HttpService } from "services/http/http.service";
import { ISession } from "utils/types/ISessions";

export const SessionCTX = createContext<ISession | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const http = new HttpService();
  // useEffect(() => {
  //   http.get()
  // }, []);

  const data = 

  return <SessionCTX.Provider value={""}>{children}</SessionCTX.Provider>;
}
