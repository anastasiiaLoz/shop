import React, { Component } from "react";
import ClientsForm from "./clientsForm/ClientsForm";
import ClientsList from "./clientsList/ClientsList";
import ClientsFilter from "./clientsFilter/clientsFilter";
import { connect } from "react-redux";
import { getAllClients } from "../../redux/clients/clientsActions";
import { addClientOperation, deleteClientOperation, getAllClientsOperation } from "../../redux/clients/clientsOperations";
import { errorClientsSelector, loaderClientsSelector, getClientsSelector } from "../../redux/clients/clientsSelectors";

class Clients extends Component {
  state = {
    filter: ""
  };

  async componentDidMount() {
    this.props.getAllClientsOperation();
  }

  // deleteClient = async e => {     // Deleted, not used due to using hooks
  //   const { id } = e.target;
  //   this.props.deleteClientOperation(id);
  // };

  setFilter = e => {
    const { value } = e.target;
    this.setState({
      filter: value
    });
  };

  render() {
    return (
      <>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading && <h2>Loading...</h2>}
        <ClientsForm />
        <ClientsFilter filter={this.state.filter} setFilter={this.setFilter} />
        <ClientsList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  clients: getClientsSelector(state),
  isLoading: loaderClientsSelector(state),
  error: errorClientsSelector(state)
});

const mapDispatchToProps = {
  getAllClientsOperation,
  deleteClientOperation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
