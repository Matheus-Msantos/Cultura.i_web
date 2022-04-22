import React from "react";
import { BaseUrl } from "../baseUrl";

function CartRemove() {

    const handleCartRemove = () => {
        BaseUrl
            .get('/api/cart/remove/4')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao remover o produto no carrinho: ' + err);
            })
    }

    return (
        <>
            <button onClick={() => handleCartRemove()}>remover</button>
        </>
    );
}

export default CartRemove;