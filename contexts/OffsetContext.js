import React, { createContext, useState } from "react";

const OffsetContext = createContext();

const OffsetProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [contributionsState, setContributionsState] = useState([]);

  return (
    <OffsetContext.Provider
      value={{
        offset,
        setOffset,
        contributionsState,
        setContributionsState,
      }}
    >
      {children}
    </OffsetContext.Provider>
  );
};

export { OffsetProvider, OffsetContext };
