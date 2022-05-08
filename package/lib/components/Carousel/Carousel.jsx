/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import "../styles.scss";

const Carousel = ({
  children,
  className,
  id,
  style,
  numberOfItemsShown,
  carouselItemHeight,
  gap,
}) => {
  const carouselStyles = css`
    height: ${carouselItemHeight + gap * 2}px;
  `;

  return (
    <div
      className={`carousel-container ${className}`}
      id={id}
      style={style}
      css={carouselStyles}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          numberOfItemsShown,
          carouselItemHeight,
          gap,
        });
      })}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
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
  carouselItemHeight: PropTypes.number,
  gap: PropTypes.number,
};

Carousel.defaultProps = {
  className: "",
  id: undefined,
  style: undefined,
  numberOfItemsShown: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
  carouselItemHeight: 400,
  gap: 20,
};

export default Carousel;
