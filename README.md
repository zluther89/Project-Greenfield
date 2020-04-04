# Forever404 <!-- omit in TOC -->


## Table of Contents

- [Overview](#overview)
- [Description](#description)
- [Getting Started](#getting-started)

## Overview

Forever404 is a front-end redesign of an e-commerce web application, built with React.js

## Description

Forever404 comes with several features for product pages on e-commerce websites, following the direction of a design mock-up and business requirements document:

- [Product Overview](#product-overview)
- [Related Products](#related-products)
- [My Outfit](#my-outfit)
- [Questions & Answers](#questions-&-answers)
- [Ratings & Reviews](#ratings-&-reviews)


<!-- omit in TOC -->

### Product Overview
_Developed by Matthew Brown_

<!-- omit in TOC -->

### Related Products
_Developed by Andrew Jyan_

The Related Products presents the user with products similar to the currently selected product, provided by the external API.

This section shows four product cards at a time. They sit on a horizontally scrolling carousel that allows the user to scroll and view additional cards. 

On each product card, essential information such as the category, name, price, image, and ratings are displayed. Selecting the name of a product will take the user to the overview page of the selected product. 

When a user clicks on the star icon in the upper righthand corner of the card, a modal will pop up comparing the current product and the selected product. The modal displays a table with the features lined up for both products in a table, allowing the user to easily compare the two products.

<!-- omit in TOC -->

### My Outfit
_Developed by Andrew Jyan_

My Outfit provides the user a way to keep track of their favorite products. If the user wants to add the current product to their outfit, they can select the "+" button, adding the products card to the outfit.

To remove an outfit item, the user can click the red "X" on the upper righthand corner of the card. The change will remove the selected product from the outfit list.

My Outfit is also persistent, allowing the user to navigate around and even away from the application and maintain their list of saved products.

<!-- omit in TOC -->

### Questions & Answers
_Developed by Zachary Luther_

<!-- omit in TOC -->

### Ratings & Reviews
_Developed by Kane Qiu_

## Getting Started

This project can be run by executing the following steps:

### Installation <!-- omit in the TOC -->

1. Download or clone this git repository onto your local machine
2. Navigate to the root directory and run `npm install` 

### Build <!-- omit in TOC -->

In the same directory, run `npm build` to build the necessary files

### Start the Server <!-- omit in TOC -->

Within the root directory, run `npm start` and then navigate to our [webpage](http://localhost:3010)

## Available Scripts
In the project directory, you can run:

### `npm start-dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

File structure

- Src[Folder]

  - Components[Folder]
    - Root.js [Root directory for router]
    - Overview [Folder]
    - Ratings & Reviews [Folder]
    - Questions & Answers[Folder]
    - Related Items & Comparison [Folder]
    - Redux [Folder]
      - Store.js
      - ActionCreators.js
      - Reducer.js
      - Thunk/middleware.js
  - index.js
  - index.html
  - App.css

- Server [Folder]
  - index.js
- (Config Files)
- packlock.json
- package.json
- .gitignore
