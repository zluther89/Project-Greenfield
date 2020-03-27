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
      productInfo: {},
      features: {},
      showModal: false
    }; 
    this.handleClick = this.handleClick.bind(this)
    this.handleAddToOutfit = this.handleAddToOutfit.bind(this)
  }

  handleClick(e) {
    this.setState({showModal: true})
  }

  handleAddToOutfit(e) {
    console.log(e.target.value)
  }

  componentDidMount() {
    let productId = 3;
  
    axios.get(`http://3.134.102.30/products/${productId}/related`).then(({ data }) => {
      let productInfo={};
      let relatedProducts = [];

      async function getData() {
        for (let id of data) {
        await axios.get(`http://3.134.102.30/products/${id}`).then( ({data}) => {
          relatedProducts.push(data)
        } )
        await axios.get(`http://3.134.102.30/products/${id}/styles`).then( ({data}) => {
          productInfo[data.product_id] = data.results
        })
      }}
      getData().then( () => {
        this.setState({productInfo: productInfo},)
        this.setState({relatedProducts: relatedProducts})
      });

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
                    <ProductCard 
                      key={i}
                      index={i}
                      handleClick={this.handleClick} 
                      handleAddToOutfit={this.handleAddToOutfit}
                      productInfo={this.state.productInfo} 
                      product={product}
                    /> 
              
              )
            })}
          </CardDeck>
   
        {/* </Carousel> */}
      </div>
    );
  }
}
