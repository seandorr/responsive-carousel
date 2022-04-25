import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

const useMediaQuery = () => {
  const getWindowWidth = useWindowSize().width;
  const [mediaQuery, setMediaQuery] = useState({
    sm: getWindowWidth <= 576,
    md: getWindowWidth > 576 && getWindowWidth <= 768,
    lg: getWindowWidth > 768 && getWindowWidth <= 992,
    xl: getWindowWidth > 992,
  });

  useEffect(() => {
    const handleResize = () => {
      setMediaQuery({
        sm: getWindowWidth <= 576,
        md: getWindowWidth > 576 && getWindowWidth <= 768,
        lg: getWindowWidth > 768 && getWindowWidth <= 992,
        xl: getWindowWidth > 992,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [getWindowWidth]);

  return mediaQuery;
};

export default useMediaQuery;
