import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

let ProductCard = (props) => {
    var photo = props.productInfo[props.product.id][0]['photos'][0].thumbnail_url || 'https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4'
    return (
        <Card 
          index={props.index} 
          onClick={props.handleClick}
          style={{ width: '18rem' }}
        >
            
            <Card.Img variant="top" src={photo}/>
              <Card.Body>
                
                <Card.Text align='left'>{props.productInfo.category}</Card.Text>
                <Card.Title align='left'>{props.product.name}</Card.Title>
                <Card.Text align='left'>${props.product.default_price}</Card.Text>
                <Card.Text align='left'>Stars</Card.Text>
                <Button  
                  value={props.product.id}
                  variant="outline-primary"
                  onClick={props.handleCompare}
                >
                  Compare
                </Button>{' '}
              </Card.Body>
        </Card>
    )
}

export default ProductCard