import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function PostAddress() {

    const body = {
        street: 'teste react',
        district: 'teste react',
        number: '200',
        city: 'teste',
        state: 'teste',
        country: 'teste'
    }

    const handlePost = () => {
        BaseUrl
            .post('/api/address', body)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao cadastrar o enredeço: ' + err);
            });
    }

    return (
        <button onClick={() => handlePost()}>Cadastrar</button>
    );
}

export default PostAddress;