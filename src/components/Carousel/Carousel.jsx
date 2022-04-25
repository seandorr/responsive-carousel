import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CarouselItem from "../CarouselItem/CarouselItem";
import useWindowSize from "../../utils/customHooks/useWindowSize";
import useMediaQuery from "../../utils/customHooks/useMediaQuery";

const Carousel = ({
  numberOfItemsShown,
  carouselItems,
  carouselItemHeight,
}) => {
  const [shownItems, setShownItems] = useState(numberOfItemsShown);
  const { sm, md, lg, xl } = useMediaQuery();
  const { sm: small, md: medium, lg: large, xl: xlarge } = numberOfItemsShown;

  const getWindowWidth = useWindowSize().width;

  useEffect(() => {
    const getMediaQuery = () => {
      if (typeof numberOfItemsShown == "number") {
        setShownItems(numberOfItemsShown);
      } else {
        sm && setShownItems(small);
        md && setShownItems(medium);
        lg && setShownItems(large);
        xl && setShownItems(xlarge);
      }
    };

    getMediaQuery();
  }, [large, lg, md, medium, sm, small, xl, xlarge, numberOfItemsShown]);

  const numberOfItemsShownIncludingOverflow = shownItems + 1;
  const carouselItemMargin = 20;
  const carouselMargins =
    numberOfItemsShownIncludingOverflow * carouselItemMargin;
  const getWindowWidthWithoutMargins = getWindowWidth - carouselMargins;
  const overflowItem = 0.5;

  const carouselStyles = {
    height: carouselItemHeight + carouselItemMargin * 2,
  };

  return (
    <div className="carousel-container" style={carouselStyles}>
      {carouselItems.map((carouselItem) => {
        const { children, id, color } = carouselItem;
        const carouselItemStyles = {
          minWidth: getWindowWidthWithoutMargins / (shownItems + overflowItem),
          marginLeft: carouselItemMargin,
          backgroundColor: color,
        };
        return (
          <CarouselItem key={id} style={carouselItemStyles}>
            {children}
          </CarouselItem>
        );
      })}
    </div>
  );
};

Carousel.propTypes = {
  carouselItems: PropTypes.any,
  carouselItemHeight: PropTypes.number,
  numberOfItemsShown: PropTypes.oneOfType([
    PropTypes.number,
    {
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    },
  ]),
};

Carousel.defaultProps = {
  carouselItemHeight: 400,
  numberOfItemsShown: { sm: 1, md: 2, lg: 3, xl: 4 },
};

export default Carousel;
