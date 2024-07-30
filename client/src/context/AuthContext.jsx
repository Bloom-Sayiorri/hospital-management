import { createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const login = async () => {
    await axios.get('/login')
    // const response = 
    // fetch('')
    // .then(() => {})
    // .then(() => {})
}

const authData = { login };

export default function AuthProvider({children}) {
    return (
        <>
            <AuthContext.Provider value={authData}>
                {children}
            </AuthContext.Provider>
        </>
    )
}