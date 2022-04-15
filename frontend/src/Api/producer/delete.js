import React, { useState, useEffect } from "react";

export const deleteProducer = () => {
    const [deleteProducer, setDeleteProducer] = useState([requestDeleteProducer]);

    const requestDeleteHeaders = {
        method: 'DELETE',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id:id,
        }),
    }
    
    const requestDeleteProducer = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/producer/', requestDeleteHeaders)
            .then((res) => res.json())
            .then((data) => {
                console.log(`Produtor deletado com sucesso: ${data}`);
            })
            .catch((err) => {
                console.log(`Erro ao deletar: ${err}`);
            })
        }, []);
    }
}