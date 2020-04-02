import React from "react"

export default class StarMarking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickIndex: 0,
      hoverIndex: 0,
      rating:""
  }
  this.getStar = this.getStar.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
  this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
  this.changeMarkingScore = this.changeMarkingScore.bind(this);
  }
  handleClick(index) {
    this.setState({
        clickIndex: index,
    });
    this.changeMarkingScore(index);
}

handleOnMouseEnter(index) {
    this.setState({
        hoverIndex: index,
    });
}

handleOnMouseOut() {
    this.setState({
        hoverIndex: 0,
    });
}

changeMarkingScore(index) {
    let item = {
        1:"Poor",2:"Fair",3:"Average",4:"Good",5:"Great"
    };
  let rating = item[index]
  this.props.handleRating(index)
  this.setState({rating:rating})

}
getStar() {
  let num = this.state.hoverIndex === 0 ? this.state.clickIndex : this.state.hoverIndex;
  let starContainer = [];
  const arr = [1, 2, 3, 4, 5];
  arr.map((ele, index) => {
      starContainer.push(
          <span
              className="staricon"
              onClick={this.handleClick.bind(this, ele)}
              onMouseEnter={this.handleOnMouseEnter.bind(this, ele)}
              onMouseOut={this.handleOnMouseOut.bind(this)}
          >
              {ele > num ? <span style={{color:"#FFAC2D",fontSize:"20px"}}>☆</span> :<span style={{color:"#FFAC2D",fontSize:"20px"}}>★</span>}
          </span>
      );

  });
  return starContainer;
}
  render() {
    let starItems = this.getStar();
    return (
        <div>
            <div >
                {starItems}{this.state.rating}
            </div>
        </div>
    )
  }
}
