import React, { useState, useEffect } from "react";

export const getProducer = () => {
    const [getProducer, setGetProducer] = useState([requestGetProducer]);
    
    const requestGetHeaders = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    const requestGetProducer = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/producer/', requestGetHeaders)
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