import React from "react";

const ProductsListItem = ({ product }) => {
  return (
    <li>
      <h2>Name: {product.name}</h2>
      <p>Model: {product.model}</p>
      <div>
        Colors:
        <ul>
          {product.colors.map(color => (
            <li key={color}>
              <span>{color}</span>
            </li>
          ))}
        </ul>
      </div>
      <p>Price: {product.price}</p>
    </li>
  );
};

export default ProductsListItem;
