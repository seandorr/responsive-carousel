import React from "react";
import PropTypes from "prop-types";

const CarouselItem = ({ children, style }) => {
  return (
    <div className="carousel-item" style={style}>
      {children}
    </div>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.any,
};

CarouselItem.defaultProps = {
  children: "carousel item",
};

export default CarouselItem;
