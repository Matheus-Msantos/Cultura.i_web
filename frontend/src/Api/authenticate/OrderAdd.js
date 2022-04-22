import React from "react";
import { BaseUrl } from "../baseUrl";

function OrderAdd() {

    const handleOrder = () => {
        BaseUrl
            .post('/api/order/add', '')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Ops! Erro ao finalizar a compra: " + err);
            })
    }

    return (
        <>
            <button onClick={() => handleOrder()}>Finalizar pedido</button>
        </>
    );
}

export default OrderAdd;