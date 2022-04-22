import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function DeleteCategory() {

    const handleDelete = () => {
        BaseUrl
            .delete('/api/category/1', '')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao deletar a categoria: ' + err);
            })
    }

    return (
        <>
            <button onClick={() => handleDelete()}>Excluir</button>
        </>
    );
}

export default DeleteCategory;