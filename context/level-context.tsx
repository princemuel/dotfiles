import * as React from 'react';

type Levels = [0, 1, 2, 3, 4, 5, 6][number];

const LevelContext = React.createContext<Levels>(0);

type LevelProps = {
  children: React.ReactNode;
  value: number;
};

export const LevelProvider = ({ children, value }: LevelProps) => {
  return (
    <LevelContext.Provider value={(value + 1) as Levels}>
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
