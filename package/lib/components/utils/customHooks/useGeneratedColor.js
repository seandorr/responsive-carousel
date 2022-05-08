import { useState, useEffect } from "react";
import { colors } from "../constants/colors";

const useGeneratedColor = () => {
  const [generatedColor, setGeneratedColor] = useState(undefined);

  useEffect(() => {
    setGeneratedColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  return generatedColor;
};

export default useGeneratedColor;
