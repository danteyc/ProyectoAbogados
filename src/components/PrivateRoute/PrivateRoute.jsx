import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

export function PrivateRoute({ ...rest }) {
  const rol = useSelector((state) => state.rol);
  if (rol === "administrador") {
    return <Route {...rest} />;
  }

  return <Redirect to="/" />;
}

PrivateRoute.defaultProps = {
  exact: true,
};
