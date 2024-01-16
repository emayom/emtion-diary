import { createContext, useContext, useState } from "react";

export const ViewTypeContext = createContext();

export const ViewTypeProvider = ({ children }) => {
  const [viewType, setViewType] = useState("calendar");

  return (
    <ViewTypeContext.Provider
      value={{
        viewType,
        setViewType,
      }}
    >
      {children}
    </ViewTypeContext.Provider>
  );
};

export const useViewTypeContext = () => useContext(ViewTypeContext);
