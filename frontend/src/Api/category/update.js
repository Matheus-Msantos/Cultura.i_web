import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function UpdateAddress() {

    const body = {
        street: 'teste react 1'
    }

    const handleUpdate = () => {
        BaseUrl
            .put('/api/address/1', body)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao atualizar a categoria: ' + err);
            });
    }

    return (
        <>
            <button onClick={() => handleUpdate()}>Atualizar</button>
        </>
    );
}

export default UpdateAddress;