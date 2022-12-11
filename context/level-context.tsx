import * as React from 'react';

type Level = [0, 1, 2, 3, 4, 5, 6][number];

const LevelContext = React.createContext<Level>(0);

type LevelProps = {
  children: React.ReactNode;
  value: Level;
};

export const LevelProvider = ({ children, value }: LevelProps) => {
  return (
    <LevelContext.Provider value={(value + 1) as Level}>
      {children}
    </LevelContext.Provider>
  );
};

export const useLevel = () => {
  const level = React.useContext(LevelContext);
  if (level == undefined) {
    throw new Error('useLevel must be used in a LevelProvider');
  }
  return level;
};
