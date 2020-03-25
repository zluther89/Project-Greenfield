import React from "react"
import axios from 'axios'
import ProductCard from './ProductCard'
import Carousel from 'react-bootstrap/Carousel'
import CardDeck from 'react-bootstrap/CardDeck'

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
      outfit:[]
    };
  }

  componentDidMount() {
    axios.get('http://3.134.102.30/products/list').then( ({data}) => {
      this.setState({relatedProducts: data})
      // assign the photo to the data 
    })
  }

  render() {
    return (
    
      <div>
        <h2 align='left'>Related Products</h2>
        <Carousel>
       
            {this.state.relatedProducts.map( (product) => {
              return (
                <Carousel.Item>
                  <ProductCard product={product}/>
                </Carousel.Item>
              )
            })}
       
        </Carousel>
      </div>
    )
  }
}
