import React, { useState, useEffect } from "react";

export const getProduct = () => {
    const [getProduct, setGetProduct] = useState([requestGetProduct]);
    
    const requestGetHeaders = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    const requestGetProduct = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/product/', requestGetHeaders)
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