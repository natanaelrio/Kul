"use client"
import { useState, createContext } from 'react';

const ContextPencarian = createContext();

const PencarianProvider = ({ children }) => {
  const [isopen, setIsopen] = useState(false);

  return (
    <ContextPencarian.Provider value={{ isopen, setIsopen }}>
      {children}
    </ContextPencarian.Provider>
  );
}

export const Pencarianku = ContextPencarian;
export default PencarianProvider