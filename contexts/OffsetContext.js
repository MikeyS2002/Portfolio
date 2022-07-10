import React, { createContext, useState } from "react";

const OffsetContext = createContext();

const OffsetProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  return (
    <OffsetContext.Provider
      value={{
        offset,
        setOffset,
      }}
    >
      {children}
    </OffsetContext.Provider>
  );
};

export { OffsetProvider, OffsetContext };
