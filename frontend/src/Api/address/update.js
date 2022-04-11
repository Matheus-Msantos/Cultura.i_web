import React, { useState, useEffect } from "react";

export const updateAddress = () => {
    const [updateAddress, setupdateAddress] = useState([requestUpdateAddress]);

    const requestUpdateHeaders = {
        method: 'PUT',
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
    
    const requestUpdateAddress = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/addres/', requestUpdateHeaders)
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