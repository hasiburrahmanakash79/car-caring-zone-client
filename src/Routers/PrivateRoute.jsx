import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        <div className="text-center mt-5"> <h1>Loading...!</h1> </div>;
    }
    if(user?.email){
        return children;
    }
    
};

export default PrivateRoute;