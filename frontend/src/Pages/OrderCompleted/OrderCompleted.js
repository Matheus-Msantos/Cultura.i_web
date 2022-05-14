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
                <h1 className="h1-title-products">Seu Pedido</h1>
                <div className="div-head-info">
                    <div>
                        <span><p>Preço Uni.</p></span>
                        <span><p>Quantid.</p></span>
                        <span><p>Preço</p></span>
                    </div>
                </div>
                <div>
                    <image src="#" />
                    <div>
                        <p>Show de Mágica Infantil</p>
                        <p>12/12/2022 - 15:00</p>
                        <p>Teatro Bibi</p>
                        <p>Ferreira - SP</p>
                    </div>
                    <div>
                        <div>
                            <p>R$ 0,00</p>
                            <p>10</p>
                            <p>R$ 0,00</p>
                        </div>
                        <div>
                            <span><p>Total</p></span>
                            <span><p>R$ 0,00</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderCompletedPage;