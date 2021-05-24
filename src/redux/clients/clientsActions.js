import { createAction } from "@reduxjs/toolkit";

const addClient = createAction("clients/addClient");

const deleteClient = createAction("clients/deleteClient");

const getAllClients = createAction("clients/getAllClients");

const setClientLoading = createAction("clients/setClientLoading");

const setError = createAction("clients/setError");

const resetError = createAction("clients/resetError");

export { addClient, deleteClient, getAllClients, setClientLoading, setError, resetError };
