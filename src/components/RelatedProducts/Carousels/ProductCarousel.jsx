import React from 'react'
import ProductCard from '../Cards/ProductCard'

let ProductCarousel = (props) => {
     
  let renderRelatedProducts = () =>  {
      return props.relatedProducts.map((product, i) => {
        return (
          <ProductCard
            key={i}
            index={i}
            handleClick={props.handleClick}
            handleCompare={props.handleCompare}
            productInfo={props.productInfo}
            product={product}
          />
        );
      })
  }

  return (
    <div className="productCarouselContainer">
      <div className="productCarousel" >
          <div style = {{
                width: props.relatedProducts.length * 300,
                display: 'flex',
                paddingTop: '2%',
                paddingLeft: '2%',
                paddingRight: '2%',
                paddingBottom: '2%',
                justifyContent: 'left'
          }}>
            {renderRelatedProducts()}
          </div>
      </div>
    </div>
  )
}



export default ProductCarousel