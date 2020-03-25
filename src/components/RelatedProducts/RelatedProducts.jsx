import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Carousel from "react-bootstrap/Carousel";
import CardDeck from "react-bootstrap/CardDeck";

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    };
  }

  componentDidMount() {
    axios.get("http://3.134.102.30/products/list").then(({ data }) => {
      this.setState({ relatedProducts: data });
      // assign the photo to the data
    });
  }

  render() {
    return (
      // <Carousel>
      //   <Carousel.Item>
      //     <ProductCard/>
      //   </Carousel.Item>
      // </Carousel>
      <div>
        <h2 align="left">Related Products</h2>
        <CardDeck>
          {this.state.relatedProducts.map(product => {
            return <ProductCard product={product} />;
          })}
        </CardDeck>
      </div>
    );
  }
}
