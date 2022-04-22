import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function UpdateProduct() {

    const handleUpdate = () => {
        BaseUrl
            .put('/api/product/1', {
                name: 'Test update react'
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao atualizar um produto: ' + err);
            })
    }

    return (
        <>
            <button onClick={() => { handleUpdate() }}>Atualizar</button>
        </>
    )

}

export default UpdateProduct;