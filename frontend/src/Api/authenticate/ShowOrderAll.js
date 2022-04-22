import React, { useEffect } from "react";
import { BaseUrl } from "../baseUrl";

function ShowOrderAll() {

    useEffect(() => {
        BaseUrl
            .get('/api/order/all')
            .then((res) => {
                console.log("Todos os Pedidios: ");
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Ops! Erro ao finalizar a compra: " + err);
            })
    })


}

export default ShowOrderAll;