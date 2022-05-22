import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../Api/baseUrl";
import { UserContext } from "../../Auth";
import "./Checkout.scss";

function CheckoutPage() {

    const [itens, setItens] = useState([]);

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    const cart = () => {
        BaseUrl
            .get('/api/cart')
            .then((res) => { return setItens([res.data]) })
            .catch((err) => console.log('Ops! Ocorreu um erro ao mostrar o carrinho: ' + err))
    }

    useEffect(() => {
        cart();
    }, []);


    const handleOrder = () => {
        BaseUrl
            .post('/api/order/add', '')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Ops! Erro ao finalizar a compra: " + err);
            })
    }

    const MapItens = itens[0]?.map((item) => {
        const price = [item.quantity * item.product.price];
        return (

            <div className="info-data" key={item.id}>
                <img src={item?.product?.image} className="img-data" />
                <div className="div-info-product">
                    <p className="info-data-title">{item?.product?.name}</p>
                    <p className="data-hour">{item?.product?.date} - {item?.product?.time}</p>
                    <p className="local">{item?.product?.address?.street}, {item?.product?.address?.district}</p>
                </div>
                <div className="div-quanti-prices">
                    <p className="price-uni">R$ {item?.product?.price}</p>
                    <p className="quanti">{item.quantity}</p>
                    <p className="price">R$ {price}</p>
                </div>
            </div>


        );
    });

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
                {MapItens}
            </div>
            <div className="div-total-button-finish">
                <div className="div-btn-order-finish">
                    <button className="btn-order-finish" onClick={() => { handleOrder() }}><Link to="/order-completed" className="bnt-link">Fechar Pedido</Link></button>
                    <Link className="bnt-link_back" to="/">Continuar comprando</Link>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;