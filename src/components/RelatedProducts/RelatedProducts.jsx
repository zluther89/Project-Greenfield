import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import ComparisonModal from './ComparisonModal'
import Carousel from "react-bootstrap/Carousel";
import CardDeck from "react-bootstrap/CardDeck";

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      outfit:[],
      showModal: false
    }; 
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({showModal: true})
    console.log(e.target)
  }
  componentDidMount() {
    axios.get("http://3.134.102.30/products/list").then(({ data }) => {
      this.setState({ relatedProducts: data });
      // assign the photo to the data
    });
  }

  render() {
    return (
      <div>
        <h2 align='left'>Related Products</h2>
        {/* <Carousel
          autoPlay={false}
          data-interval={false}
          id="relatedCarousel"
        >   */}
        {this.state.showModal ? 
        <ComparisonModal 
          show={this.state.showModal}
          onHide={() => {this.setState({showModal: false})}}
        /> : <div></div>}
          <CardDeck>
            {this.state.relatedProducts.map( (product,i) => {
              return (
                // <Carousel.Item key={i}>
                    <ProductCard handleClick={this.handleClick} product={product}/>   
                // </Carousel.Item>
              )
            })}
          </CardDeck>
   
        {/* </Carousel> */}
      </div>
    );
  }
}
