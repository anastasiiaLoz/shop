import React from "react";
import { clients } from "../../data/clients";

const Clients = () => {
  return (
      <ul className="clientsList">
      {clients.map(client =>(
          <li key ={client.id}>{client.name}</li>))}
      </ul>
  )
};

export default Clients;
