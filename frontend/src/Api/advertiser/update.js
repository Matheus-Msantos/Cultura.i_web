import React, { useState, useEffect } from "react";

export const updateAdvertiser = () => {
    const [updateAdvertiser, setupdateAdvertiser] = useState([requestUpdateAdvertiser]);

    const requestUpdateHeaders = {
        method: 'PUT',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            cnpj: cnpj,
            password: password,
            is_advertiser: is_advertiser,
        }),
    }
    
    const requestUpdateAdvertiser = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/advertiser/', requestUpdateHeaders)
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