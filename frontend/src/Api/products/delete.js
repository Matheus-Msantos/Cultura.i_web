import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function DeleteProduct() {
    const handleDelete = () => {
        BaseUrl
            .delete('/api/product/9', '')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao excluir um produto: ' + err);
            })
    }

    return (
        <>
            <button onClick={() => { handleDelete() }}>Excluir</button>
        </>
    );
}

export default DeleteProduct;