import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import ComparisonModal from './ComparisonModal'
// import Carousel from "react-bootstrap/Carousel";
import $ from 'jquery'
import CardDeck from "react-bootstrap/CardDeck";
import {getNewProductThunk} from '../Redux/ThunkMiddleware.js'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {
    getNewProductThunk: id => dispatch(getNewProductThunk(id))
  };
};

const mapStateToProps = state => ({
  selectedProduct: state.selectedProduct
});

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      compare: {},
      relatedProducts: [],
      productInfo: {},
      outfitId: [],
      outfitInfo:{},
      clickedProduct: null,
      showModal: false
    }; 
    this.handleCompare = this.handleCompare.bind(this)
  }

  handleClick(e) {
    console.log(e.target)
    // should update store with the clicked e target value id
  }

  handleCompare(e) {
    this.setState({showModal: true})
    axios.get(`http://3.134.102.30/products/${e.target.value}`)
    .then( ({data}) => {
      this.setState({compare:data})
    })
  }

  componentDidMount() {
    let productId = 3
    this.props.getNewProductThunk(productId)
    
    axios.get(`http://3.134.102.30/products/${productId}`).then( ({data}) => {
      this.setState({current: data})
    })
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
        this.setState({productInfo: productInfo})
        this.setState({relatedProducts: relatedProducts})
      });

    });

    
  }

  setOutfit(e){
    // sets the target value to an array of favorites
  }

  getOutfits(){
    // retrieves the favorites from the local storage
    // pulls card info necessary for the individual favorites
    // sets state of the favorites array
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
          product={this.state.current}
          compare={this.state.compare}
          show={this.state.showModal}
          onHide={() => {this.setState({showModal: false})}}
        /> : <div></div>}
          <CardDeck>  

            {this.state.relatedProducts.map( (product,i) => {      
              return (
                    <ProductCard 
                      key={i}
                      index={i}
                      handleClick={this.handleClick.bind(this)} 
                      handleCompare={this.handleCompare}
                      productInfo={this.state.productInfo} 
                      product={product}
                    /> 
              
              )
            })}
          </CardDeck>
   
        {/* </Carousel> */}
        <h2> Your Outfit </h2>
          <CardDeck>
            {/* add an outfit card here */}
            {/* map out the rest of the favorites after pulling favorites */}
          </CardDeck>
        <br></br>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);