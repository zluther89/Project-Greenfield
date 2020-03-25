import React from "react";
import Card from 'react-bootstrap/Card'

let ProductCard = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4" />
              <Card.Body>
                <Card.Text align='left'>{props.product.category}</Card.Text>
                <Card.Title align='left'>{props.product.name}</Card.Title>
                <Card.Text align='left'>${props.product.default_price}</Card.Text>
                <Card.Text align='left'>Stars</Card.Text>
              </Card.Body>
        </Card>
    )
}

export default ProductCard