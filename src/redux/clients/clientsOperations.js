import axios from "axios";
import { addClient, deleteClient, getAllClients, setClientLoading, setError } from "./clientsActions";
import { getClientsSelector } from "./clientsSelectors";

const addClientOperation = client => async (dispatch, getState) => {
  const clients = getClientsSelector(getState());
  if (clients.some(item => item.clientName.toLowerCase().includes(client.clientName.toLowerCase()))) {
    dispatch(setError("Client already exist"));
    return;
  }
  dispatch(setClientLoading());
  try {
    const { data } = await axios.post(
      `https://shop-fee62-default-rtdb.firebaseio.com/clients.json?auth=${getState().auth.tokens.idToken}`,
      client
    );
    dispatch(addClient({ ...client, id: data.name }));
  } catch (error) {
    console.dir(error.response.data.error);
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setClientLoading());
  }
};

const deleteClientOperation = id => async (dispatch, getState) => {
  dispatch(setClientLoading());
  try {
    await axios.delete(
      `https://shop-fee62-default-rtdb.firebaseio.com/clients/${id}.json?auth=${getState().auth.tokens.idToken}`
    );
    dispatch(deleteClient(id));
  } catch (error) {
  } finally {
    dispatch(setClientLoading());
  }
};

const getAllClientsOperation = () => async (dispatch, getState) => {
  dispatch(setClientLoading());
  try {
    const { data } = await axios.get(
      `https://shop-fee62-default-rtdb.firebaseio.com/clients.json?auth=${getState().auth.tokens.idToken}`
    );
    if (data) {
      const clients = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      dispatch(getAllClients(clients));
    }
  } catch (error) {
  } finally {
    dispatch(setClientLoading());
  }
};

export { addClientOperation, deleteClientOperation, getAllClientsOperation };
