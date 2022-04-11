import React, { useState, useEffect } from "react";

export const postProducer = () => {
    const [postProducer, setPostProducer] = useState([requestPostProducer]);

    const requestPostHeaders = {
        method: 'POST',
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
    
    const requestPostProducer = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/producer/', requestPostHeaders)
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