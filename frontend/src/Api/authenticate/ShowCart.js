import React, { useEffect } from "react";
import { BaseUrl } from "../baseUrl";


function Cart() {
    useEffect(() => {
        BaseUrl
            .get('/api/cart')
            .then((res) => {
                console.log("Carrinho: ");
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostrar o carrinho: ' + err);
            })
    })
}

export default Cart