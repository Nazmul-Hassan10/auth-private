import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner text-neutral"></span>
    }
    if(user){
        return children
    }


    return <Navigate to="/login"></Navigate>
};

export default Private;