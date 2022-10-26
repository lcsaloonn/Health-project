import React, { createContext, useState } from "react";

type SetValue = (value: any) => void;
export interface AppContextInterface {
  value: any;
  setValue: SetValue;
}

const defaultData: AppContextInterface = {
  value: "",
  setValue: () => {},
};
export const ExempleCtx = createContext<AppContextInterface | null>(null);

const CtxProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState<any>(null);
  return (
    <ExempleCtx.Provider value={{ value, setValue }}>
      {children}
    </ExempleCtx.Provider>
  );
};
export default CtxProvider;
