import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ShowStars from '../OverlapWork/ShowStars'

let ProductCard = (props) => {
    var photo;
    let id = props.product.id
    try {
      photo = props.productInfo[id][0]['photos'][0].thumbnail_url     
    }
    catch {
      photo = 'https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4'
    }

    return (
        <Card 
        style={
          { 
            boxShadow : `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
            img: {
              display: 'block'
            },
            width: '15rem',
            height: '30rem',
            marginRight: '2%'
          }
        }
        className='productCard'
        >
            <Button  
                  id = "compareButton"
                  variant="outline-primary"
                  value={props.product.id}
                  onClick={props.handleCompare}
                >
                  ★
            </Button>{' '}
            <Card.Img variant="top" src={photo} className='cardImg'/>
              <Card.Body>       
                <Card.Text align='left'>{props.product.category}</Card.Text>
                <a onClick={props.handleClick} className={`cardTitle ${id}`} href={`/products/${id}`}>{props.product.name}</a>
                <Card.Text align='left'>${props.product.default_price}</Card.Text>
                <ShowStars productId={id}/>
              </Card.Body>
        </Card>

    )
}

export default ProductCard