import React from "react";
import ProductsListItem from "./productsListItem/ProductsListItem";

const ProductsList = ({ products }) => {
    return (
        <ul className="productsList">
            {products.map(product => (
                <ProductsListItem product={product} key={product.id} />
            ))}
        </ul>
    );
};

export default ProductsList;