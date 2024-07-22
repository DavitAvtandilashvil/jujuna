import { useContext } from "react";
import { WineContext } from "./WineContext";

export function useWine() {
  const context = useContext(WineContext);
  if (!context)
    throw new Error("Context was used outside the Context Provider");
  return context;
}
