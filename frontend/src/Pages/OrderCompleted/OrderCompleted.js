import React from "react";
import "./OrderCompleted.scss";
import Layout from '../../components/layout/Layout'
import { Link } from "react-router-dom";

function OrderCompletedPage() {
    return (
        <Layout>
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

                <div className="orderCompleted-buttons_container">
                    <Link className="orderCompleted-button_home" to="/">Voltar para a Home</Link>
                    <Link className="orderCompleted-button_order" to="/order">Ir para os pedidos</Link>
                </div>
            </div>
        </Layout>
    );
}

export default OrderCompletedPage;