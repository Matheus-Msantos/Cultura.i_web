import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function UpdateCategory() {

    const body = {
        name: 'teste react 1'
    }

    const handleUpdate = () => {
        BaseUrl
            .put('/api/category/1', body)
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

export default UpdateCategory;