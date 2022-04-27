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
npm install
```

Now start the dev server with:

```zsh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Customizing the Carousel

### \<Carousel />

| Property           | Description                                                   | Type                                                                   | Default                             |
| ------------------ | ------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------- |
| children           | Items to be displayed in the carousel - use \<CarouselItem /> | node.isRequired                                                        | -                                   |
| className          | Custom class for styling                                      | string                                                                 | undefined                           |
| id                 | Custom id for styling                                         | string                                                                 | undefined                           |
| style              | Custom inline styling                                         | object                                                                 | undefined                           |
| numberOfItemsShown | Number of items you want to be visible in the carousel        | number \| {xs: number, sm: number, md: number, lg: number, xl: number} | {xs: 1, sm: 2, md: 3, lg: 4, xl: 5} |
| carouselItemHeight | Height of items in the carousel                               | number                                                                 | 400                                 |
| gap                | Spacing between carousel items                                | number                                                                 | 20                                  |

<br />

### \<CarouselItem />

| Property  | Description                                             | Type           | Default   |
| --------- | ------------------------------------------------------- | -------------- | --------- |
| children  | Content to be displayed inside of the \<CarouselItem /> | any.isRequired | -         |
| className | Custom class for styling                                | string         | undefined |
| id        | Custom id for styling                                   | string         | undefined |
| style     | Custom inline styling                                   | object         | undefined |
| color     | Define a background-color for the \<CarouselItem />     | string         | random    |

<br />

### Example

```jsx
<Carousel
  numberOfItemsShown={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
  carouselItemHeight={400}
  gap={20}
>
  <CarouselItem />
</Carousel>
```
