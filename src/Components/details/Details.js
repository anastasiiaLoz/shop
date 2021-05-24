import axios from "axios";
import React, { Component } from "react";

class Details extends Component {
  state = {
    product: null
  };

  async componentDidMount() {
    // const { productId } = this.props.match.params
    try {
      const response = await axios.get(`
        https://shop-fee62-default-rtdb.firebaseio.com/products/${this.props.match.params.productId}.json`);
      this.setState({
        product: { ...response.data, id: this.props.match.params.productId }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.match.params.productId !== this.state.product?.id) {
      try {
        const response = await axios.get(`
        https://shop-fee62-default-rtdb.firebaseio.com/products/${this.props.match.params.productId}.json`);
        this.setState({
          product: { ...response.data, id: this.props.match.params.productId }
        });
      } catch (error) {
        console.log(error);
      }
    } else return;
  }
  render() {
    return <h1>This product</h1>;
  }
}

export default Details;
