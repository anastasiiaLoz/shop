import React, { Component } from "react";

class ProductsForm extends Component {
  state = {
    name: "",
    model: "",
    colors: ['grey'],
    price: ""
  };
  onHandleSubmit = e => {
    e.preventDefault();
    this.props.addCar(this.state);
    this.setState({
      name: "",
      model: "",
      colors: ['grey'],
      price: ""
    });
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.onHandleChange} value={this.state.name} />
        </label>

        <label>
          Price:
          <input type="text" name="price" onChange={this.onHandleChange} value={this.state.price} />
        </label>
        <label>
          Model:
          <input type="text" name="model" onChange={this.onHandleChange} value={this.state.model} />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ProductsForm;
