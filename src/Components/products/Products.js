import React, { Component } from "react";
import ProductsForm from "./productsForm/ProductsForm";
import ProductsList from "./ProductsList/ProductsList";
import { connect } from "react-redux";
import { addProductOperation, deleteProductOperation, getAllProductsOperation } from "../../redux/products/productsOperations";
import { getAllProductsSelector } from "../../redux/products/productsSelectors";

class Products extends Component {
  async componentDidMount() {
    this.props.getAllProductsOperation();
  }

  addCar = async car => {
    this.props.addProductOperation(car);
  };

  deleteCar = id => {
    this.props.deleteProductOperation(id);
  };

  render() {
    return (
      <>
        <h2>Products</h2>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoadingProduct && <h2>...loading</h2>}
        <ProductsForm addCar={this.addCar} />
        <ProductsList products={this.props.products} deleteCar={this.deleteCar} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: getAllProductsSelector(state),
  isLoadingProduct: state.products.isProductLoading,
  error: state.products.error
});

const mapDispatchToProps = {
  getAllProductsOperation,
  addProductOperation,
  deleteProductOperation
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
