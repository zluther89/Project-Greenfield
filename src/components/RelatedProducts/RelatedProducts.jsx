import React from "react";
import axios from "axios";

// React Component imports
import ComparisonModal from "./ComparisonModal";
import OutfitCard from "./Cards/OutfitCard";
import ProductCarousel from './Carousels/ProductCarousel'

// Bootstrap imports
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Carousel from "react-bootstrap/Carousel";

// Redux imports
import { getNewProductThunk } from "../Redux/ThunkMiddleware.js";
import { connect } from "react-redux";
import OutfitCarousel from "./Carousels/OutfitCarousel";

const mapDispatchToProps = dispatch => {
  return {
    getNewProductThunk: id => dispatch(getNewProductThunk(id))
  };
};

const mapStateToProps = state => ({
  selectedProduct: state.selectedProduct
});

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      compare: {},
      relatedProducts: [],
      productInfo: {},
      outfitId: [],
      outfitNames: [],
      outfitInfo: {},
      outfitLoaded: false,
      clickedProduct: null,
      showModal: false,
      scrollBar: null,
      scrollPosition: 0
    };
    this.handleCompare = this.handleCompare.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddToOutfit = this.handleAddToOutfit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Handles a change in product once the product is clicked
  handleClick(e) {
    let id = e.currentTarget.className.split(" ")[1];
    this.props.getNewProductThunk(id);
  }

  // renders the modal and pulls the product features to compare
  handleCompare(e) {
    this.setState({ showModal: true });
    axios
      .get(`http://3.134.102.30/products/${e.target.value}`)
      .then(({ data }) => {
        this.setState({ compare: data });
      });
  }

  removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
  };

  componentDidMount() {
    let productId = this.props.productId || 3
    this.props.getNewProductThunk(productId)
    this.getOutfits();
    axios
      .get(`http://3.134.102.30/products/${productId}`)
      .then( ({data}) => {
        this.setState({current: data})
      })
      axios.get(`http://3.134.102.30/products/${productId}/related`).then(({ data }) => {
        let productInfo={};
        let relatedProducts = [];
        let uniqueId = this.removeDuplicates(data)
        async function getData() {
          for (let id of uniqueId) {
          await axios.get(`http://3.134.102.30/products/${id}`).then( ({data}) => {
            relatedProducts.push(data)
          } )
          await axios.get(`http://3.134.102.30/products/${id}/styles`).then( ({data}) => {
            productInfo[data.product_id] = data.results
          })
        }}
        getData().then( () => {
          this.setState({productInfo: productInfo})
          this.setState({relatedProducts: relatedProducts})
        });
  })
}

  handleAddToOutfit() {
    let currentOutfit = this.state.outfitId.slice();
    if (currentOutfit.indexOf(this.state.current.id) === -1) {
      this.setState({ outfitLoaded: false });
      currentOutfit.push(this.state.current.id);
    }
    this.setState({ outfitId: currentOutfit }, () => {
      localStorage.setItem("outfit", JSON.stringify(currentOutfit));
      this.getOutfits();
    });
  }


  getOutfits() {
    let outfitId = JSON.parse(localStorage.getItem("outfit"));
    if (!!outfitId) {
      this.setState({ outfitId: outfitId }, () => {
        let outfitNames = [];
        let outfitInfo = {};
        async function getData() {
          for (let id of outfitId) {
            await axios
              .get(`http://3.134.102.30/products/${id}`)
              .then(({ data }) => {
                outfitNames.push(data);
              });
            await axios
              .get(`http://3.134.102.30/products/${id}/styles`)
              .then(({ data }) => {
                outfitInfo[data.product_id] = data.results;
              });
          }
        }
        getData().then(() => {
          this.setState({ outfitNames: outfitNames });
          this.setState({ outfitInfo: outfitInfo });
          this.setState({ outfitLoaded: true });
        });
      });
    }
  }

  handleDelete(e) {
    let id = Number(e.target.value);
    let storage = this.state.outfitId.slice();
    let index = storage.indexOf(id);
    storage.splice(index, 1);
    localStorage.setItem("outfit", JSON.stringify(storage));
    this.getOutfits();
  }

  render() {
    return (
      <div>
        <br></br>
        <h2 align="left">Related Products</h2>
        <br></br>

        {this.state.showModal ? (
          <ComparisonModal
            product={this.state.current}
            compare={this.state.compare}
            show={this.state.showModal}
            onHide={() => {
              this.setState({ showModal: false });
            }}
          />
        ) : (
          <div></div>
        )}
        <ProductCarousel
          handleClick={this.handleClick}
          handleCompare={this.handleCompare}
          productInfo={this.state.productInfo}
          relatedProducts={this.state.relatedProducts}
        />
        <br></br>
        <h2> Your Outfit </h2>
        <br></br>
        <OutfitCarousel
          outfitNames={this.state.outfitNames}
          outfitInfo={this.state.outfitInfo}
          outfitId={this.state.outfitId}
          outfitLoaded={this.state.outfitLoaded}
          handleDelete={this.handleDelete}
          handleAddToOutfit={this.handleAddToOutfit}
        />
        <br></br>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);