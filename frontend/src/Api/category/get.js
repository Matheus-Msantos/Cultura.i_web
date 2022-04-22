import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function GetCategory() {

    const handleGet = () => {
        BaseUrl
            .get('/api/category')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostar a categoria: ' + err);
            });
    }

    return (
        <button onClick={() => { handleGet() }}>Mostar todos</button>
    );
}

export default GetCategory