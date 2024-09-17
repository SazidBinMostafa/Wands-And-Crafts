import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


function useAuth(){
    const authInfo = useContext(AuthContext)
    return authInfo;
}

export default useAuth;