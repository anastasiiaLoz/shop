import React from "react";
import { ColorsListItemContainer, ProductsListItemContainer } from "./ProductsListItemStyled";
import PropTypes from "prop-types";

const ProductsListItem = ({ product, deleteCar }) => {

  const onHandleDelete = () => {
    deleteCar(product.id)
  }

  return (
    <ProductsListItemContainer>
      <div className="card">
        <h2>Name: {product.name}</h2>
        <p>Model: {product.model}</p>
        <div>
          Colors:
          <ul className="colorsList">
            {product.colors?.map(color => (
              <ColorsListItemContainer key={color} color={color} />
            ))}
          </ul>
        </div>
        <p>Price: {product.price}</p>
        <button type="button" onClick={ onHandleDelete}>Delete</button>
      </div>
    </ProductsListItemContainer>
  );
};

ProductsListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string
  }).isRequired
};

export default ProductsListItem;
