import React from 'react';
import axios from 'axios';
//import { useState } from 'react';

import useLocalStorage from '../../customHooks/LocalStorage';
import UserContext from '../../contexts/UserContext';



const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useLocalStorage("currentUser", {});
    const [token, setToken] = useLocalStorage("token", '');

    const login = async (inputs) => {
        const url = 'http://localhost:5000/users/login';
        try {
            const res = await axios.post(
                url,
                inputs
            )
            //console.log(res.data)
            setCurrentUser({ ...res.data.user, isLoggedIn: true });
            setToken(res.data.token);
        } catch (error) {
            alert(error);
        }
    };

    const register = async (inputs) => {
        const url = 'http://localhost:5000/users/register';
        try {
            const res = await axios.post(
                url,
                inputs
            )
            //console.log(res.data)
            setCurrentUser({ ...res.data.user, isLoggedIn: true });
            setToken(res.data.token);
        } catch (error) {
            alert(error);
        }
    };


    const logout = () => {
        setCurrentUser({
            id: null,
            isLoggedIn: null,
            email: null,
            role: null,
        });
        setToken('');
    };

    return (
        <UserContext.Provider
            value={{
                currentUser,
                token,
                login,
                register,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;