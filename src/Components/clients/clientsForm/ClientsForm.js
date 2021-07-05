import React, { Component, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { addClient, resetError } from "../../../redux/clients/clientsActions";
import { addClientOperation } from "../../../redux/clients/clientsOperations";
import { errorClientsSelector } from "../../../redux/clients/clientsSelectors";

export default function ClientsForm() {
  const [clientName, setClientName] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const error = useSelector(state => errorClientsSelector(state)); // Упрощенный вариант, более читабельный, но то же самое    const error = useSelector(errorClientsSelector)
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(addClientOperation({ clientName, creditCard }));
    setClientName("");
    setCreditCard("");
  };

  const onHandleChange = e => {
    error && dispatch(resetError()); // Если у нас была какя-то ошибка, то ...      dispatch это ф-я, которая вызывает изменения глобального state
    const { name, value } = e.target;
    name === "clientName" && setClientName(value); //Обычный if.  Если, когда мы нажмем на input и он совпадет с clientName, то тогда в state запишется, что мы ввели
    name === "creditCard" && setCreditCard(value);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Client:
        <input type="text" name="clientName" value={clientName} onChange={onHandleChange} />
      </label>
      <label>
        CreditCard:
        <input type="text" name="creditCard" value={creditCard} onChange={onHandleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

// class ClientsForm extends Component {
//   state = {
//     clientName: "",
//     creditCard: ""
//   };
//   onHandleSubmit = e => {
//     e.preventDefault();
//     this.props.addClient(this.state);
//     this.setState({
//       clientName: "",
//       creditCard: ""
//     });
//   };

//   onHandleChange = e => {
//     this.props.error && this.props.resetError();
//     const { name, value } = e.target;
//     console.log(name);
//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.onHandleSubmit}>
//         <label>
//           Client:
//           <input type="text" name="clientName" value={this.state.clientName} onChange={this.onHandleChange} />
//         </label>
//         <label>
//           CreditCard:
//           <input type="text" name="creditCard" value={this.state.creditCard} onChange={this.onHandleChange} />
//         </label>
//         <button type="submit">Save</button>
//       </form>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     error: errorClientsSelector(state)
//   };
// };

// export default connect(
//   mapStateToProps,
//   { resetError }
// )(ClientsForm);
