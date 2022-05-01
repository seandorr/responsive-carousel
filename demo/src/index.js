import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "./components/Carousel/Carousel";
import CarouselItem from "./components/CarouselItem/CarouselItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Carousel
    numberOfItemsShown={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    carouselItemHeight={400}
    gap={20}
  >
    <CarouselItem onClick={(event) => null} />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
  </Carousel>
);
