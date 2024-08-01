import { createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const login = async () => {
    await axios.get('/login')
    // const response = 
    // fetch('')
    // .then(() => {})
    // .then(() => {})
};

const logout = async () => {};

const signup = async () => {};

const authData = { login, logout, signup };

function AuthProvider({children}) {
    return (
        <>
            <AuthContext.Provider value={authData}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export { AuthProvider, AuthContext }