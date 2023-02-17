import type { IconColorModes } from "../../types";

export const useColor = () => {
  const hexByMode = (title: IconColorModes): string => {
    if (title === "dark") return "#0062FF";
    if (title === "accent") return "#FF6C00";
    return "#000000";
  };
  return {
    hexByMode,
  };
};
