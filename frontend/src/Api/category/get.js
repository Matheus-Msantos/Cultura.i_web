import React, { useState, useEffect } from "react";

export const getCategory = () => {
    const [getCategory, setGetgetCategory] = useState([requestGetCategory]);
    
    const requestGetHeaders = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    const requestGetCategory = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/category/', requestGetHeaders)
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