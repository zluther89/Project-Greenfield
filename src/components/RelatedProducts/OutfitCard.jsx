import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import stars from '../OverlapWork/ShowStars'

let OutfitCard= (props) => {
  let id = props.outfitId
  var photo = props.outfitInfo[id][0]['photos'][0].thumbnail_url|| 'https://avatars1.githubusercontent.com/u/12416599?s=460&u=dd647676df3df2357c7aa8045c1a5e14fbcec5ac&v=4'

  return (
      <Card 
        style={{ width: '18rem' }}
      >
          <Button  
                id = "compareButton"
                variant="outline-primary"
                value={id}
                onClick={props.handleDelete}
              >
                X
          </Button>{' '}
          <Card.Img variant="top" src={photo}/>
            <Card.Body>       
              <Card.Text align='left'>{props.outfitNames[props.index].category}</Card.Text>
              <a onClick={props.handleClick} className={`cardTitle ${id}`}>{props.outfitNames[props.index].name}</a>
              <Card.Text align='left'>${props.outfitNames[props.index].default_price}</Card.Text>
              <Card.Text align='left'>Stars</Card.Text>
              
            </Card.Body>
      </Card>

  )
}

export default OutfitCard