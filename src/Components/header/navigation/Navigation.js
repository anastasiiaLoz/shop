import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../../redux/auth/authActions";
import mainRoutes from "../../../routes/mainRoutes";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ location, logOut, isAuth }) => {
  //   const dispatch = useDispatch();
  //   const signOut = () => dispatch(logOut());

  console.log(isAuth);
  return (
    <NavigationContainer>
      <ul className="list">
        {mainRoutes.map(item => (
          <NavigationListItem item={item} location={location} key={item.path} isAuth={isAuth} />
        ))}
        {isAuth && (
          <li>
            <button type="button" onClick={() => logOut()}>
              Log Out
            </button>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.tokens.idToken
});

export default connect(
  mapStateToProps,
  { logOut }
)(withRouter(Navigation));
