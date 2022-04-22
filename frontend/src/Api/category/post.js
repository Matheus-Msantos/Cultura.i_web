import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function PostCategory() {

    const body = {
        name: 'teste react'
    }

    const handlePost = () => {
        BaseUrl
            .post('/api/category', body)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao cadastrar a categoria: ' + err);
            });
    }

    return (
        <button onClick={() => handlePost()}>Cadastrar</button>
    );
}

export default PostCategory;