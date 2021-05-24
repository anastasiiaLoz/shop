import React from "react";

const ClientsList = ({ clients, deleteClient }) => {
  return (
    <ul className="clientsList">
      {clients.map(client => (
        <li key={client.id}>
          <p>{client.clientName}</p>
          <p>{client.creditCard}</p>
          <button type="button" onClick={deleteClient} id={client.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ClientsList;
