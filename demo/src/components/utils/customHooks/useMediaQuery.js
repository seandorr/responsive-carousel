import { useState, useEffect } from "react";
import { mediaQueries } from "../constants/mediaQueries";
import useWindowSize from "./useWindowSize";

const useMediaQuery = () => {
  const { xs, sm, md, lg, xl } = mediaQueries;
  const getWindowWidth = useWindowSize().width;
  const [mediaQuery, setMediaQuery] = useState({
    xs: getWindowWidth > xs && getWindowWidth <= sm,
    sm: getWindowWidth > sm && getWindowWidth <= md,
    md: getWindowWidth > md && getWindowWidth <= lg,
    lg: getWindowWidth > lg && getWindowWidth <= xl,
    xl: getWindowWidth > xl,
  });

  useEffect(() => {
    const handleResize = () => {
      setMediaQuery({
        xs: getWindowWidth > xs && getWindowWidth <= sm,
        sm: getWindowWidth > sm && getWindowWidth <= md,
        md: getWindowWidth > md && getWindowWidth <= lg,
        lg: getWindowWidth > lg && getWindowWidth <= xl,
        xl: getWindowWidth > xl,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [getWindowWidth, xs, sm, md, lg, xl]);

  return mediaQuery;
};

export default useMediaQuery;
