import React, { useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function ShowOrder() {

    useEffect(() => {
        BaseUrl
            .get('/api/order')
            .then((res) => {
                console.log("Pedidios: ");
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Ops! Erro ao finalizar a compra: " + err);
            })
    })


}

export default ShowOrder;