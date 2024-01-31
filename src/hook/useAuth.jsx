import { useContext } from "react";
import { AuthContext } from "../provider/Provider";

const useAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default useAuth;