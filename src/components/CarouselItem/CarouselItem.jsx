/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "../../utils/customHooks/useMediaQuery";
import useWindowSize from "../../utils/customHooks/useWindowSize";
import useGeneratedColor from "../../utils/customHooks/useGeneratedColor";

const CarouselItem = ({
  children,
  className,
  id,
  style,
  onClick,
  numberOfItemsShown,
  gap,
  color,
}) => {
  const [shownItems, setShownItems] = useState(numberOfItemsShown);
  const { xs, sm, md, lg, xl } = useMediaQuery();
  const {
    xs: xsmall,
    sm: small,
    md: medium,
    lg: large,
    xl: xlarge,
  } = numberOfItemsShown;

  const getWindowWidth = useWindowSize().width;
  const generatedColor = useGeneratedColor();

  useEffect(() => {
    if (typeof numberOfItemsShown == "number") {
      setShownItems(numberOfItemsShown);
    } else {
      xs && setShownItems(xsmall);
      sm && setShownItems(small);
      md && setShownItems(medium);
      lg && setShownItems(large);
      xl && setShownItems(xlarge);
    }
  }, [
    xs,
    xsmall,
    sm,
    small,
    md,
    medium,
    lg,
    large,
    xl,
    xlarge,
    numberOfItemsShown,
  ]);

  const numberOfItemsShownIncludingOverflow = shownItems + 1;
  const carouselMargins = numberOfItemsShownIncludingOverflow * gap;
  const getWindowWidthWithoutMargins = getWindowWidth - carouselMargins;
  const overflowItem = 0.5;

  const carouselItemStyles = css`
    min-width: ${getWindowWidthWithoutMargins / (shownItems + overflowItem) ||
    300}px;
    margin-left: ${gap}px;
    background-color: ${color || generatedColor};

    &:last-child {
      margin-right: ${gap}px;
    }
  `;
  return (
    <div
      className={`carousel-item ${className} ${onClick ? "clickable" : ""}`}
      css={carouselItemStyles}
      id={id}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  numberOfItemsShown: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
  ]),
  gap: PropTypes.number,
  color: PropTypes.string,
};

CarouselItem.defaultProps = {
  className: "",
  id: undefined,
  style: undefined,
  onClick: undefined,
  numberOfItemsShown: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
  gap: 20,
  color: undefined,
};

export default CarouselItem;
