"use client";
import { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context data
interface TitleContextType {
  title: string;
  setTitle: (title: string) => void;
  actionText: string;
  setActionText: (text: string) => void;
  action: (e: React.MouseEvent) => void;
  setAction: (action: (e: React.MouseEvent) => void) => void;
}

// Create the context
const TitleContext = createContext<TitleContextType | undefined>(undefined);

// Create the provider component
export const TitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState('Dashboard');
  const [actionText, setActionText] = useState('');
  const [action, setAction] = useState<(e: React.MouseEvent) => void>(() => () => {});

  const value = {
    title,
    setTitle,
    actionText,
    setActionText,
    action,
    // It's important to wrap the setAction call in a function to avoid issues with React's state updates.
    setAction: (newAction: (e: React.MouseEvent) => void) => setAction(() => newAction),
  };

  return (
    <TitleContext.Provider value={value}>
      {children}
    </TitleContext.Provider>
  );
};

// Create a custom hook for easy consumption of the context
export const useTitle = () => {
  const context = useContext(TitleContext);
  if (context === undefined) {
    throw new Error('useTitle must be used within a TitleProvider');
  }
  return context;
};
