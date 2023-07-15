import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const AuthRoute = ({component}) => {

  const user = useUserContext();

  if(user) return component;
  if(!user) return <Navigate to="/login" />;
}
export default AuthRoute;