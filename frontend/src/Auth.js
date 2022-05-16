import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { BaseUrl } from "./Api/baseUrl";

/* Criar o contexto */
export const UserContext = createContext();

export function AuthContext({ children }) {

    /* Pega dados do local storage */
    const userAuth = JSON.parse(localStorage.getItem('User'))

    useEffect(() => {
        /* Verifica se há dados no local storage, se não houver retorna undefined */
        if (!!userAuth)
            var user = userAuth[0];
        else
            user = ''

        /* Adiciona o usuário no contexto */
        setCurrentUser(user);
    }, [])

    const [currentUser, setCurrentUser] = useState();
    const [itemCount, setItemCount] = useState();

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, itemCount, setItemCount }}>
            {children}
        </UserContext.Provider>
    );
}
