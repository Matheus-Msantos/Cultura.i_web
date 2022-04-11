import React, { useState, useEffect } from "react";

export const postAdvertiser = () => {
    const [postAdvertiser, setPostAdvertiser] = useState([requestPostAdvertiser]);

    const requestPostHeaders = {
        method: 'POST',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            cnpj: cnpj,
            password: password,
            is_advertiser: is_advertiser,
        }),
    }
    
    const requestPostAdvertiser = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/advertiser/', requestPostHeaders)
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