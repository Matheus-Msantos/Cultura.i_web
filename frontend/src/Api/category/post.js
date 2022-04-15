import React, { useState, useEffect } from "react";

export const postProduct = () => {
    const [postProduct, setPostProduct] = useState([requestPostProduct]);

    const requestPostHeaders = {
        method: 'POST',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
        }),
    }
    
    const requestPostProduct = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/category/', requestPostHeaders)
            .then((res) => res.json())
            .then((data) => {
                console.log(`Enviado com sucesso: ${data}`);
            })
            .catch((err) => {
                console.log(`Erro ao enviar: ${err}`);
            })
        }, []);
    }
}