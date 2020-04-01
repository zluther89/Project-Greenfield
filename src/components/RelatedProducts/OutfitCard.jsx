import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ShowStars from '../OverlapWork/ShowStars'

let OutfitCard= (props) => {
  let id = props.outfitId
  let photo; 
  let price;
  try {
    price = props.outfitNames[props.index].default_price;
    photo = props.outfitInfo[id][0]['photos'][0].thumbnail_url
  } catch {
    price = 0;
  }

  console.log(props.outfitInfo[id][0])

    // photo = props.productInfo[id][0]['photos'][0].thumbnail_url

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
                value={id}
                onClick={props.handleDelete}
              >
                X
          </Button>{' '}
          <Card.Img variant="top" src={photo} className='cardImg'/>
            <Card.Body>       
              <Card.Text align='left'>{props.outfitNames[props.index].category}</Card.Text>
              <a onClick={props.handleClick} className={`cardTitle ${id}`} href={`/products/${id}`}>{props.outfitNames[props.index].name}</a>
              <Card.Text align='left'>${price}</Card.Text>
              <ShowStars productId={id}/>  
              {/* number of reviews */}
            </Card.Body>
      </Card>

  )
}

export default OutfitCard