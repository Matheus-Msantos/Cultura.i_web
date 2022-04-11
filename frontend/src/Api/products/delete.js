import React, { useState, useEffect } from "react";

export const deleteProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState([requestDeleteProduct]);

    const requestDeleteHeaders = {
        method: 'DELETE',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id:id,
        }),
    }
    
    const requestDeleteProduct = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/product/', requestDeleteHeaders)
            .then((res) => res.json())
            .then((data) => {
                console.log(`Deletado com sucesso: ${data}`);
            })
            .catch((err) => {
                console.log(`Erro ao deletar: ${err}`);
            })
        }, []);
    }
}