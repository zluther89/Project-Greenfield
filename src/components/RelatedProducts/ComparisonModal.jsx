import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let ComparisonModal = (props) => {
  let currentName = props.product.name
  let compareName = props.compare.name
  let currentFeatures = props.product.features
  let compareFeatures = props.compare.features
  let totalFeatures = [];
  let current ={};
  let compare ={};
  for (let feature of currentFeatures) {
    if (totalFeatures.indexOf(feature) === -1) {
      totalFeatures.push(feature)
    }
  }
  if (compareFeatures) {
    for (let feature of compareFeatures) {
      if (totalFeatures.indexOf(feature) === -1) {
      totalFeatures.push(feature)
      }
     }
  }
  for(let feature of currentFeatures){
    current[feature.feature] = feature.value
  }
  for (let feature in compareFeatures) {
    let feat = compareFeatures[feature]
    compare[feat.feature] = feat.value
  
  }
    
  return (
        
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              COMPARING
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
          <Row className="show-grid">
            <Col className='rowtitle' xs={6} md={4}>
              {currentName}
            </Col>
            <Col className='rowtitle' xs={6} md={4}>
           
            </Col>
            <Col className='rowtitle'xs={6} md={4}>
              {compareName}
            </Col>
          </Row>

          {totalFeatures.map( ({feature}, i) => {
            let currentRow = null;
            let compareRow = null;
            if (current && current.hasOwnProperty(feature)) {
              currentRow = current[feature]
            }
            if (compare && compare.hasOwnProperty(feature)) {
              compareRow = compare[feature]
            }
            return (
            <Row key={i} className="show-grid modal-row">
            <Col  xs={6} md={4}>
                {currentRow}
            </Col>
            <Col className="feature" xs={6} md={4}>
                {feature}
            </Col>
            <Col lassName="modal-row" xs={6} md={4}>
                {compareRow}
            </Col>
          </Row>
            )
          })}
          <br/>
        </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default ComparisonModal