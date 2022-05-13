import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom"
import auth from "../../firebase.init";

const RequierAuth=({children})=>{
    const [user,loading]=useAuthState(auth);
    let location = useLocation();
    if (!user) {
        
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return children;

    }
    export default RequierAuth;