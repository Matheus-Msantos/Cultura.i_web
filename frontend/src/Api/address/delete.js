import React, { useState, useEffect } from "react";

export const deleteAddress = () => {
    const [deleteAddress, setDeleteAddress] = useState([requestDeleteAddress]);

    const requestDeleteHeaders = {
        method: 'DELETE',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id:id,
        }),
    }
    
    const requestDeleteAddress = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/address/', requestDeleteHeaders)
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