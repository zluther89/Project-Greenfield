import React from 'react'
import OutfitCard from '../Cards/OutfitCard'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

let OutfitCarousel = (props) => {
     
    let renderOutfits = () => {
        return props.outfitId.map((outfitId, i) => {
            if (props.outfitLoaded) {
                return (
                    <OutfitCard
                        key={i}
                        index={i}
                        outfitId={outfitId}
                        outfitNames={props.outfitNames}
                        outfitInfo={props.outfitInfo}
                        handleDelete={props.handleDelete}
                    />
                );
            }
        })
    }


    return (
        <div className="productCarouselContainer">
            <div className="productCarousel">
                <div style = {{
                    width: (props.outfitId.length + 1) * 300,
                    display: 'flex',
                    paddingTop: '2%',
                    paddingLeft: '2%',
                    paddingRight: '2%',
                    paddingBottom: '2%',
                    justifyContent: 'left'
                }}
                >

                <Card
                    style={{
                        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
                        img: {
                            display: "flex"
                        },
                        width: "15rem",
                        height: "27rem",
                        marginRight: '2%'
                    }}
                >
                    <Button
                        id="addButton"
                        variant="outline-primary"
                        onClick={props.handleAddToOutfit}
                    >
                     +
                    </Button>{" "}
                </Card>
            {props.outfitId && renderOutfits()}
          </div>
        </div>
      </div>
    )
}



export default OutfitCarousel