import React from "react";
import "./Order.scss";
import { Link } from "react-router-dom";
function OrderPage() {

    const zeroLeft = (number, size) => {
        let left = "00000000" + number;
        return left.substring(left.length-size);
    }

    const dataOrder = [
        {
            id: 1,
            image: "",
            data: "01/01/2022",
            status: "Em análise",
            price: 10.00,
        },
        {
            id: 2,
            image: "",
            data: "01/01/2022",
            status: "Em análise",
            price: 20.99,
        },
        {
            id: 3,
            image: "",
            data: "01/01/2022",
            status: "Em análise",
            price: 30.99,
        },
    ];
    return (
        <div className="div-order-page">
            <h1 className="h1-title-my-orders">Meus Pedidos</h1>
            <div className="div-order-links">
                <div className="div-link-profile">
                    <span className="span-profile-link"><Link to="/profile" className="order-link">Perfil</Link></span>
                </div>
                <div className="div-link-order">
                    <span className="span-order-link"><Link to="/order" className="profile-link">Pedidos</Link></span>
                </div>
            </div>
            <div className="div-data-info-request">
                <div className="div-data-info">
                    <span className="span-number-order"><p className="number-order">Nº do Pedido</p></span>
                    <span><p>Imagem</p></span>
                    <span><p>Data</p></span>
                    <span><p>Status</p></span>
                    <span><p>Preço</p></span>
                </div>
                <div className="div-data-request-order">
                    {dataOrder.map((order, index) => (
                        <div className="div-order" key={index++}>
                            <p className="order-id">{zeroLeft(order.id, 4)}</p>
                            <p className="order-image">{order.image}</p>
                            <p className="order-data">{order.data}</p>
                            <p className="order-status">{order.status}</p>
                            <p className="order-price">R$ {order.price.toFixed(2).toString().replace(".", ",")}</p>
                        </div>
                    ))}
                </div>
                <div className="div-btn-home">
                    <button className="btn-home"><Link to="/" className="btn-link-home">HOME</Link></button>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;