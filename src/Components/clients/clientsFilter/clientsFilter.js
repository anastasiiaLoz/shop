import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/clients/clientsActions";
import { getFilterSelector } from "../../../redux/clients/clientsSelectors";

const ClientsFilter = () => {
  const filter = useSelector(getFilterSelector);
  const dispatch = useDispatch();
  const setFilterValue = () => dispatch(setFilter);

  return (
    <label>
      Filter:
      <input type="text" value={filter} onChange={setFilterValue} />
    </label>
  );
};

export default ClientsFilter;
