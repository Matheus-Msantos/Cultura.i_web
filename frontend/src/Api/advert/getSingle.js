import React from "react";
import { BaseUrl } from "../baseUrl";

function GetSingleAdvert() {

    const handleGetSingle = () => {
        BaseUrl
            .get('/api/advert/2')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro mostrar 1 anuncio: ' + err);
            });
    }

    return (
        <>
            <button onClick={() => handleGetSingle()}>Mostar 1</button>
        </>
    );
}

export default GetSingleAdvert;