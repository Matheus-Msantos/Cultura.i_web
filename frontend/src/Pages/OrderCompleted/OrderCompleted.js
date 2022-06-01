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
                        <p className="message">
                            Você receberá um e-mail de confirmação do pedido e todos os detalhes da sua compra. Caso não tenha recebido, verifique sua caixa de spam.
                        </p>
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