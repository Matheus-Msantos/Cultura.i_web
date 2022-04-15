import React, { useState, useEffect } from "react";

export const postAdvert = () => {
    const [postAdvert, setPostAdvert] = useState([requestPostAdvert]);

    const requestPostHeaders = {
        method: 'POST',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            image: image,
            advertiser_id,
        }),
    }
    
    const requestPostAdvert = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/advert/', requestPostHeaders)
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