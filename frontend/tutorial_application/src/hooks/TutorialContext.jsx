import { createContext, useContext, useState } from 'react';

const TutorialContext = createContext();

export const useTutorialContext = () => {
  return useContext(TutorialContext);
};

export function TutorialProvider ({ children }) {
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  return (
    <TutorialContext.Provider value={{ selectedTutorial, setSelectedTutorial }}>
      {children}
    </TutorialContext.Provider>
  );
}

