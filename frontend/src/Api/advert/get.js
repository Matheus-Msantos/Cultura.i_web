import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function GetAdvert() {

    const handleGet = () => {
        BaseUrl
            .get('/api/advert')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostar o anuncio: ' + err);
            });
    }

    return (
        <button onClick={() => { handleGet() }}>Mostar todos</button>
    );
}

export default GetAdvert