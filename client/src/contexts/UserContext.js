import { createContext } from "react";

const UserContext = createContext(
    {
    currentUser: null,
    token: '',
    login: () => {},
    register: () => {},
    logout: () => {},
});

export default UserContext;