import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.scss";

function CheckoutPage() {

    return (
        <div className="div-checkout-page">
            <h1 className="title-my-cart">Meu Carrinho</h1>
            <div className="div-order-checkout">
                <div className="div-info-data-checkout">
                    <div className="div-product">
                        <span><p className="span-product">Produto</p></span>
                    </div>
                    <div className="div-price-quant">
                        <span><p className="span-price-unit">Preço Uni.</p></span>
                        <span><p className="span-quantid">Quantid.</p></span>
                        <span><p className="span-price">Preço</p></span>
                    </div>
                </div>
                <div className="info-data">
                    <image src="#" className="img-data" />
                    <div className="div-info-product">
                        <p className="info-data-title">Show de Mágica Infantil</p>
                        <p className="data-hour">12/12/2022 - 15:00</p>
                        <p className="local">Teatro Bibi</p>
                        <p className="state">Ferreira - SP</p>
                    </div>
                    <div className="div-quanti-prices">
                        <p className="price-uni">R$ 0,00</p>
                        <p className="quanti">10</p>
                        <p className="price">R$ 0,00</p>
                    </div>
                </div>
            </div>
            <div className="div-total-button-finish">
                <div className="div-sub-total">
                    <span><p className="span-sub-total">Subtotal</p></span>
                    <span><p className="span-sub-total-price">R$ 0,00</p></span>
                </div>
                <div className="div-total">
                    <span><p className="span-total">Total</p></span>
                    <span><p className="span-total-price">R$ 0,00</p></span>
                </div>
                <div className="div-btn-order-finish">
                    <button className="btn-order-finish"><Link to="/order-completed" className="bnt-link">Fechar Pedido</Link></button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;