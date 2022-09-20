import { createContext, useReducer } from "react";
import { UserReducer } from "./UserReducer";


let INITIAL_STATE;
export const UserContext = createContext()
 
const UserProvider = ({children})=>{
    const [state,dispatch] = useReducer(UserReducer,INITIAL_STATE)
    return(
        <UserContext.Provider value={{state,dispatch}}>
             {children}
        </UserContext.Provider>
    )
}

export default UserProvider;