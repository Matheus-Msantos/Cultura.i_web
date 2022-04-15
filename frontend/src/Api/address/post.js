import React, { useState, useEffect } from "react";

export const postAddress = () => {
    const [postAddress, setPostAddress] = useState([requestPostAddress]);

    const requestPostHeaders = {
        method: 'POST',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            street: street,
            district: district,
            number: number,
            city: city,
            state: state,
            country: country,
        }),
    }
    
    const requestPostAddress = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/address/', requestPostHeaders)
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