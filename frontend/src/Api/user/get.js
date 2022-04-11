import React, { useState, useEffect } from "react";

export const getUser = () => {
    const [getUser, setGetUser] = useState([requestGetUser]);
    
    const requestGetHeaders = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    const requestGetUser = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/user/', requestGetHeaders)
            .then((res) => res.json())
            .then((data) => {
                console.log(`Consulta realizada: ${data}`);
            })
            .catch((err) => {
                console.log(`Erro ao enviar: ${err}`);
            })
        }, []);
    }
}