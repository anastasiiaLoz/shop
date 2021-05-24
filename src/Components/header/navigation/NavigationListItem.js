import React from "react";
import { NavLink } from "react-router-dom";

const NavigationListItem = ({ item, location, isAuth }) => {
  return (
    <>
      {!item.isPrivate &&
        (!item.isRestricted && (
          <li className="listItem">
            <NavLink
              to={{
                pathname: item.path,
                state: { from: location.pathname }
              }}
              className="link"
              activeClassName="activeLink"
              exact={item.exact}
            >
              {item.name}
            </NavLink>
          </li>
        ))}

      {isAuth &&
        (item.isPrivate && !item.isRestricted && (
          <li className="listItem">
            <NavLink
              to={{
                pathname: item.path,
                state: { from: location.pathname }
              }}
              className="link"
              activeClassName="activeLink"
              exact={item.exact}
            >
              {item.name}
            </NavLink>
          </li>
        ))}

      {!isAuth &&
        (!item.isPrivate && item.isRestricted && (
          <li className="listItem">
            <NavLink
              to={{
                pathname: item.path,
                state: { from: location.pathname }
              }}
              className="link"
              activeClassName="activeLink"
              exact={item.exact}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
    </>
  );
};

export default NavigationListItem;
