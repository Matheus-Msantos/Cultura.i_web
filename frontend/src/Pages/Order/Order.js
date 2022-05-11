import React from "react";
import "./Order.scss";
import { Link } from "react-router-dom";

function OrderPage() {
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
                    <span><p className="header-data">Nº do Pedido</p></span>
                    <span><p className="header-data">Imagem</p></span>
                    <span><p className="header-data">Data</p></span>
                    <span><p className="header-data">Status</p></span>
                    <span><p className="header-data">Preço</p></span>
                </div>
                <div className="div-data-request-order">
                    <div className="div-order">
                        <p className="order-id">0001</p>
                        <p className="order-image"><image src="#"/></p>
                        <p className="order-data">01/01/2022</p>
                        <p className="order-status">Em análise</p>
                        <p className="order-price">R$ 30,99</p>
                    </div>
                </div>
                <div className="div-btn-home">
                    <button className="btn-home"><Link to="/" className="btn-link-home">HOME</Link></button>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;