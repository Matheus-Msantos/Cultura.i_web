import React from "react";
import { BaseUrl } from "../baseUrl";

function GetProductCategory() {

    const handleGetByCategory = () => {
        BaseUrl
            .get('/api/product/category/1')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostrar o produto pela categoria: ' + err);
            });
    }

    return (
        <>
            <button onClick={() => handleGetByCategory()}>mostar por category</button>
        </>
    );
}

export default GetProductCategory;