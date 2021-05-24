import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
// import data from "../../data";
// import Clients from "../clients/Clients";
// import ProductsList from "./products/ProductsList";

const Main = ({ isAuth }) => {
  return (
    <>
      <Suspense fallback={<h2>LOADING...</h2>}>
        <Switch>
          {mainRoutes.map(item =>
            item.isPrivate ? (
              <PrivateRoute {...item} key={item.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...item} key={item.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token?.idToken
  };
};

export default connect(mapStateToProps)(Main);
