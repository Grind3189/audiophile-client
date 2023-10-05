import { createContext, useState, useEffect } from "react";

interface WidthContextType {
  width: number;
}

interface WidthContextProviderProp {
  children: React.ReactNode;
}

export const WidthContext = createContext({} as WidthContextType);

const WidthContextProvider = ({ children }: WidthContextProviderProp) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleChangeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleChangeWidth);

    return () => {
      window.removeEventListener("resize", handleChangeWidth);
    };
  });
  return (
    <WidthContext.Provider value={{ width }}>{children}</WidthContext.Provider>
  );
};

export default WidthContextProvider;
