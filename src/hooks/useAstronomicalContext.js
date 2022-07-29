import { useContext } from "react";
import { AstronomicalContext } from "../context/context";

export const useAstronomicalContext = () => {
  const context = useContext(AstronomicalContext);

  if (!context) {
    throw Error("useAstronomicalContext must be used inside Provider Scope");
  }

  return context;
};
