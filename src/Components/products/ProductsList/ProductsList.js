import React from "react";
import PropTypes from "prop-types";
import ProductsListItem from "../productsListItem/ProductsListItem";
import { ProductsListContainer } from "./ProductsListStyled";

const ProductsList = ({ products, deleteCar }) => {
  return (
    <ProductsListContainer>
      {products.map(product => (
        <ProductsListItem product={product} key={product.id} deleteCar={ deleteCar}/>
      ))}
    </ProductsListContainer>
  );
};


ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

export default ProductsList;

