import React, { useState, useEffect } from "react";

export const getAdvert = () => {
    const [getAdvert, setGetAdvert] = useState([requestGetAdvert]);
    
    const requestGetHeaders = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    const requestGetAdvert = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/advert/', requestGetHeaders)
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