import React, { useState, useEffect } from "react";

export const updateProducer = () => {
    const [updateProducer, setupdateProducer] = useState([requestUpdateProducer]);

    const requestUpdateHeaders = {
        method: 'PUT',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            cnpj: cnpj,
            password: password,
            media: media,
            is_producer: is_producer,
            logo: logo,
            image: image,
        }),
    }
    
    const requestUpdateProducer = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/producer/', requestUpdateHeaders)
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