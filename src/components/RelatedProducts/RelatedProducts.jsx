import React from "react";
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

export default class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    };
  }

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4" />
              <Card.Body>
                <Card.Text>Category</Card.Text>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>Price</Card.Text>
                <Card.Text>Stars</Card.Text>
              </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    )
  }
}
