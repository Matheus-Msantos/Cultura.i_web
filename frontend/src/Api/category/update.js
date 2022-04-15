import React, { useState, useEffect } from "react";

export const updateProduct = () => {
    const [updateProduct, setupdateProduct] = useState([requestUpdateProduct]);

    const requestUpdateHeaders = {
        method: 'PUT',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
        }),
    }
    
    const requestUpdateProduct = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/category/', requestUpdateHeaders)
            .then((res) => res.json())
            .then((data) => {
                console.log(`Atualizar com sucesso: ${data}`);
            })
            .catch((err) => {
                console.log(`Erro ao atualizar: ${err}`);
            })
        }, []);
    }
}