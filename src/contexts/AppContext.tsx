"use client";

import { Planet } from "@/types/planets";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  planets: Planet[];
  setPlanets: (planets: Planet[]) => void;
}

interface AppProviderProps {
  initialData: Planet[];
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({
  initialData = [] as Planet[],
  children,
}: AppProviderProps) {
  const [planets, setPlanets] = useState<Planet[]>(initialData);

  return (
    <AppContext.Provider value={{ planets, setPlanets }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
