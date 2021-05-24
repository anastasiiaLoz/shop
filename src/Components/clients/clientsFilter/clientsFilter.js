import React from 'react';

const ClientsFilter = ({ filter, setFilter}) => {
    return (
        <label>
            Filter:
            <input type="text" value={filter} onChange={ setFilter}/>
        </label>
    );
}

export default ClientsFilter;