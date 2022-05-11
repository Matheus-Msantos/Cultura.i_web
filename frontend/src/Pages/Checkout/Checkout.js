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
                <div>
                    <p><image src="#" /></p>
                    <div>
                        <p>Show de Mágica Infantil</p>
                        <p>12/12/2022 - 15:00</p>
                    </div>
                    <div>
                        <p>Teatro Bibi</p>
                        <p>Ferreira - SP</p>
                    </div>
                    <div>
                        <p>R$ 0,00</p>
                        <p>10</p>
                        <p>R$ 0,00</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <span><p>Subtotal</p></span>
                    <span><p>R$ 0,00</p></span>
                </div>
                <div>
                    <span><p>Total</p></span>
                    <span><p>R$ 0,00</p></span>
                </div>
                <button><Link to="/order-completed" className="#">Fechar Pedido</Link></button>
            </div>
        </div>
    );
}

export default CheckoutPage;