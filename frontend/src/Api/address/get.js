import React, { useState, useEffect } from "react";

export const getAddress = () => {
    const [getAddress, setGetgetAddress] = useState([requestGetAddress]);
    
    const requestGetHeaders = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    const requestGetAddress = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/address/', requestGetHeaders)
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