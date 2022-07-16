import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { logged } = useSelector((state) => state.auth);
  let history = useHistory();

  return logged ? children : history.push("/login");
};
