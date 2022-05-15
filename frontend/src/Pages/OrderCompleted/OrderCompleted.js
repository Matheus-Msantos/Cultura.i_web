import React from "react";
import "./OrderCompleted.scss";
function OrderCompletedPage() {
    return (
        <div className="div-general-order-completed">
            <div className="div-img-message">
                <div className="div-img-circle">
                    <img src="./image/CheckCircle.png" className="img-circle" />
                </div>
                <div className="div-title-product">
                    <h1 className="h1-title">Seu pedido esta em análise</h1>
                    <span><p className="span-title-message">Não se preocupe</p></span>
                </div>
                <div className="div-message">
                    <p className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Nibh tellus molestie nunc non blandit massa enim. Pellentesque</p>
                </div>
            </div>
            <div className="div-data-info-completed">
                <div className="div-h1-title-products">
                    <h1 className="h1-title-products">Seu Pedido</h1>
                </div>
                <div className="div-head-info">
                    <div className="div-product-completed">
                        <span className="span-product-completed"><p className="product-completed">Prod</p></span>
                    </div>
                    <div className="price-quantit-total">
                        <span className="span-price"><p className="price-completed">Preço</p></span>
                        <span className="span-quantid"><p className="quantid-completed">Quantid.</p></span>
                        <span className="span-total"><p className="total-completed">Total</p></span>
                    </div>
                </div>
                <div className="div-data-product-completed">
                    <image src="#" className="img-product-completed" />
                    <div className="div-data-info-product-completed">
                        <p className="info-data-title">Show de Mágica Infantil</p>
                        <p className="info-data-day-hour">12/12/2022 - 15:00</p>
                        <p className="info-data-local">Teatro Bibi</p>
                        <p className="info-data-state">Ferreira - SP</p>
                    </div>
                    <div className="div-prices-product-completed">
                        <div className="div-info-price-quant-completed">
                            <p className="price-completed">R$ 0,00</p>
                            <p className="quant-completed">10</p>
                            <p className="total-price-completed">R$ 0,00</p>
                        </div>
                        <div className="div-general-total-completed">
                            <div className="div-total-completed">
                                <span className="span-total-completed"><p className="total-completed">Total</p></span>
                                <span className="span-total-price"><p className="total-price">R$ 0,00</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderCompletedPage;