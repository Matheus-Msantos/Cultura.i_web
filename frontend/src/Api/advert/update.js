import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function UpdateAdvert() {

    const body = {
        user_id: 2
    }

    const handleUpdate = () => {
        BaseUrl
            .put('/api/advert/1', body)
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

export default UpdateAdvert;