import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function DeleteAdvert() {

    const handleDelete = () => {
        BaseUrl
            .delete('/api/advert/1', '')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao deletar o anuncio: ' + err);
            })
    }

    return (
        <>
            <button onClick={() => handleDelete()}>Excluir</button>
        </>
    );
}

export default DeleteAdvert;