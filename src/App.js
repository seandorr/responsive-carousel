import React from "react";
import Carousel from "./components/Carousel/Carousel";
import { carouselItems } from "./components/Carousel/utils/constants/carouselItems";
import "./styles.scss";

const App = () => {
  return (
    <Carousel
      carouselItems={carouselItems}
      numberOfItemsShown={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      carouselItemHeight={400}
    />
  );
};

App.propTypes = {};

export default App;
