import React, { useState, useEffect } from "react";

export const updateUser = () => {
    const [updateUser, setupdateUser] = useState([requestUpdateUser]);

    const requestUpdateHeaders = {
        method: 'PUT',
        headers:   { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            email_verified_at: email_verified_at,
            password: password,
            image: image,
            isAdmin: isAdmin,
        }),
    }
    
    const requestUpdateUser = () => {
        useEffect( () => {
            fetch('http://127.0.0.1:8000/api/user/', requestUpdateHeaders)
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