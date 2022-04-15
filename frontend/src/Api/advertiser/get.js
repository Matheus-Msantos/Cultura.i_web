import React, { useState, useEffect } from "react";

export const getAdvertiser = () => {
    const [getAdvertiser, setGetAdvertiser] = useState([requestGetAdvertiser]);
    
    const requestGetHeaders = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    const requestGetAdvertiser = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/advertiser/', requestGetHeaders)
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