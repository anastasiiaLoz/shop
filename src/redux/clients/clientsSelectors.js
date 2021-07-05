// import { createSelector } from "@reduxjs/toolkit";

const getClientsSelector = state => state.clients.items;
const errorClientsSelector = state => state.clients.error;
const loaderClientsSelector = state => state.clients.isLoading;
const getFilterSelector = state => state.clients.filter;

export { getClientsSelector, errorClientsSelector, loaderClientsSelector, getFilterSelector };
