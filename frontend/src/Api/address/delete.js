import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function DeleteAddress() {

    const handleDelete = () => {
        BaseUrl
            .delete('/api/address/3', '')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao deletar o endereço: ' + err);
            })
    }

    return (
        <>
            <button onClick={() => handleDelete()}>Excluir</button>
        </>
    );
}

export default DeleteAddress;