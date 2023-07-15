import { useNavigate } from "react-router-dom";

export const AuthRoute = ({user, component}) => {

    const navigate = useNavigate();

    if(user){
        return component;
    }
    if (!user){
        return navigate('/login');
    }
}
export default AuthRoute;