import React, { useState, useEffect } from "react";

export const postUser = () => {
    const [postUser, setPostUser] = useState([requestPostUser]);

    const requestPostHeaders = {
        method: 'POST',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            description: description,
            time: time,
            date: date,
            classification: classification,
            category_id: category_id,
            address_id: address_id,
            price: price,
            image: image,
            producer_id: producer_id,
        }),
    }
    
    const requestPostUser = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/user/', requestPostHeaders)
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