import React, { createContext, useState } from "react";

export const BlurContext = createContext();

const SetBlur = ({ children }) => {
  const [blur, setBlur] = useState(false);
  const element = {
    blur,
    setBlur,
  };
  return (
    <BlurContext.Provider value={element}>{children}</BlurContext.Provider>
  );
};

export default SetBlur;
