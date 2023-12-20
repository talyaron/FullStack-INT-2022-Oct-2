import React, { createContext, useState, useContext } from 'react';
import { ImageSourcePropType } from 'react-native';

interface BackgroundContextType {
  background: ImageSourcePropType | null;
  setBackground:  (image: ImageSourcePropType | null) => void;
}

const defaultState = {
  background: null,
  setBackground: () => {},
};

export const BackgroundContext = createContext<BackgroundContextType>(defaultState);

export const useBackground = () => useContext(BackgroundContext);

export const BackgroundProvider: React.FC = ({ children }: any) => {
  const [background, setBackground] = useState<ImageSourcePropType | null>(null);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};
