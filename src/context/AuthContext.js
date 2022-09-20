import React, { createContext, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

export const AuthContext = createContext()

const INITIAL_STATE ={
    email:"",
    code:"",
    signup:''
}


const AuthProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    return(
        <AuthContext.Provider value={{state,dispatch}}>
             {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;