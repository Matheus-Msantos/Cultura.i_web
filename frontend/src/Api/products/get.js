import React, { useState, useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function GetProduct() {

    const handleGet = () => {
        BaseUrl
            .get("/api/product")
            .then((res) => console.log(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    return (
        <>
            <button onClick={() => { handleGet() }}>Mostar Todos</button>
        </>
    );
}

export default GetProduct