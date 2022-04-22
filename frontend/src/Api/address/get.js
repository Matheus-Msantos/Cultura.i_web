import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function GetAddress() {

    const handleGet = () => {
        BaseUrl
            .get('/api/address')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostar o endereço: ' + err);
            });
    }

    return (
        <button onClick={() => { handleGet() }}>Mostar todos</button>
    );
}

export default GetAddress