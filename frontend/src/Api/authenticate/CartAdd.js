import React from "react";
import { BaseUrl } from "../baseUrl";

function CartAdd() {

    const handleCartAdd = () => {
        BaseUrl
            .get('/api/cart/add/4')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao adicionar o produto no carrinho: ' + err);
            })
    }

    return (
        <>
            <button onClick={() => handleCartAdd()}>Adicionar</button>
        </>
    );
}

export default CartAdd;