import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClientOperation } from "../../../redux/clients/clientsOperations";
import { getClientsSelector, getFilterSelector } from "../../../redux/clients/clientsSelectors";

const ClientsList = () => {
  const filter = useSelector(getFilterSelector);
  const clients = useSelector(getClientsSelector);
  const dispatch = useDispatch();

  const getFilteredClients = () => {
    return clients.filter(client => client.clientName.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteClient = e => {
    dispatch(deleteClientOperation(e.target.id));
  };

  return (
    <ul className="clientsList">
      {getFilteredClients().map((
        client //Сначало выполнить действие в ф-ии, вернет результат и пройдется map по результату ф-и
      ) => (
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

// из шлобального стейта используем useSelector (нужен только чтобы забирать значения)
// если я хочу поменять что-то в глобальном стейте, я использую useDispatch (нужен только чтобы поменять значение)
// Используем dispatch, когда нужно передать Operation
