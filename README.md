# Responsive Carousel

## In order to view the project:

Clone the GitHub project in your terminal:

```zsh
git clone https://github.com/seandorr/responsive-carousel.git
```

Enter the project directory:

```zsh
cd responsive-carousel
```

Install all of the dependencies with:

```zsh
yarn install / npm install
```

Now start the dev server with:

```zsh
yarn start / npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Customizing the Carousel

1. Carousel
   | Property | Description | Type | Default | |
   |--------------------|-----------------------------------------------|--------------------------------------------|-------------------------------|---|
   | carouselItems |  
    | numberOfItemsShown | Number of items you want to be visible in the carousel | number \| {sm: number, md: number, lg: number, xl: number} | sm: 1, md: 2, lg: 3, xl: 4}
   | carouselItemHeight | Height of items in the carousel | number | 400
