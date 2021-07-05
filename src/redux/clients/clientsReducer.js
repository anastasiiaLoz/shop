import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addClient, deleteClient, getAllClients, resetError, setClientLoading, setError, setFilter } from "./clientsActions";

const itemsReducer = createReducer([], {
  [addClient]: (state, { payload }) => [...state, payload],
  [deleteClient]: (state, { payload }) => [...state.filter(client => client.id !== payload)],
  [getAllClients]: (_, { payload }) => payload
});

const clientLoaderReducer = createReducer(false, {
  [setClientLoading]: state => !state
});

const clientErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => ""
});

const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload
});

const clientsReducer = combineReducers({
  items: itemsReducer,
  isLoading: clientLoaderReducer,
  error: clientErrorReducer,
  filter: filterReducer
});

// const clientsReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'addClients':
//             return [...state, action.payload];

//         case 'deleteClients':
//             return [...state.filter((client) => client.id !== action.payload)];

//         default:
//             return state;
//     }
// }

export default clientsReducer;
