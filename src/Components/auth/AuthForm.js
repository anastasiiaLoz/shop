import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { loginOperation, registerOperation } from "../../redux/auth/authOperations";
import schema from "./validation/validator";

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{location.pathname === "/registration" ? "Registration" : "Login"}</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={values => {
          // Values is the infromation that we have from the people's input info
          location.pathname === "/registration" ? dispatch(registerOperation(values)) : dispatch(loginOperation(values));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              {location.pathname === "/registration" ? "register" : "login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;

// class AuthForm extends Component {
//   state = {};
//   render() {
//     return (
//       <div>
//         <h1>{this.props.location.pathname === "/registration" ? "Registration" : "Login"}</h1>
//         <Formik
//           initialValues={{ email: "", password: "" }}
//           validationSchema={schema}
//           onSubmit={values => {
//             // Values is the infromation that we have from the people's input info
//             this.props.location.pathname === "/registration"
//               ? this.props.registerOperation(values)
//               : this.props.loginOperation(values);
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <Field type="email" name="email" />
//               <ErrorMessage name="email" component="div" />
//               <Field type="password" name="password" />
//               <ErrorMessage name="password" component="div" />
//               <button type="submit" disabled={isSubmitting}>
//                 {this.props.location.pathname === "/registration" ? "register" : "login"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     );
//   }
// }
// export default connect(
//   null,
//   { registerOperation, loginOperation }
// )(withRouter(AuthForm));

// class AuthForm extends Component {
//   state = {
//     email: "",
//     password: ""
//   };

//   onHandleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   onHandleSubmit = e => {
//     e.preventDefault();
//     this.props.location.pathname === "/registration"
//       ? this.props.registerOperation(this.state)
//       : this.props.loginOperation(this.state);
//   };

//   render() {
//     console.log(this.props.location.pathname);
//     return (
//       <form onSubmit={this.onHandleSubmit}>
//         <label>
//           Email
//           <input value={this.state.email} name="email" type="text" onChange={this.onHandleChange} />
//         </label>
//         <label>
//           Password
//           <input value={this.state.password} name="password" type="text" onChange={this.onHandleChange} />
//         </label>
//         <button type="submit">{this.props.location.pathname === "/registration" ? "register" : "login"}</button>
//       </form>
//     );
//   }
// }

// export default connect(
//   null,
//   { registerOperation, loginOperation }
// )(withRouter(AuthForm));
