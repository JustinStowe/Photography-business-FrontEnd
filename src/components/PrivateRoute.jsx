import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { usePhotoStore } from "../stores/usePhotoStore";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const { user } = usePhotoStore();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
