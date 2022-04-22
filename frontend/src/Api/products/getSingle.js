import React from "react";
import { BaseUrl } from "../baseUrl";

function GetSingleProduct() {

    const handleGetSingle = () => {
        BaseUrl
            .get('/api/product/2')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro mostrar 1 produto: ' + err);
            });
    }

    return (
        <>
            <button onClick={() => handleGetSingle()}>Mostar 1</button>
        </>
    );
}

export default GetSingleProduct;