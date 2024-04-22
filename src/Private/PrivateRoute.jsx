import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className=" loading loading-dots loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;