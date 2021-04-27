import React from "react";
import data from "../../data";
import Clients from "../clients/Clients";
import ProductsList from "./products/ProductsList";

const Main = () => {
  return (
    <main>
      <ProductsList products={data.products} />
      <Clients clients={data.clients} />
    </main>
  );
};

export default Main;
