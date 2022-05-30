import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../Api/baseUrl";
import { UserContext } from "../../Auth";
import CheckoutLayout from "../../components/layout/CheckoutLayout";
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

            <tr key={item?.product?.id} className="info-data">
                <td className="div-info-product">
                    <img src={item?.product?.image} className="img-data" />
                    <div className="div-info-product">
                        <p className="info-data-title">{item?.product?.name}</p>
                        <p className="data-hour">{item?.product?.date} - {item?.product?.time}</p>
                        <p className="local">{item?.product?.address}</p>
                    </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><p className="price-uni">R$ {item?.product?.price}</p></td>
                <td><p className="quanti">{item.quantity}</p></td>
                <td><p className="price">R$ {price}</p></td>
            </tr>


        );
    });

    return (
        <CheckoutLayout>
            <div className="div-checkout-page">
                <h1 className="title-my-cart">Meu Carrinho</h1>
                <div className="div-order-checkout">
                    <table className="table align-middle">
                        <thead >
                            <tr>
                                <th scope="col">Produto</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Preço uni.</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>
                        <tbody >
                            {MapItens}
                        </tbody>
                    </table>

                    <div className="div-total-button-finish">
                        <div className="div-btn-order-finish">
                            <button className="btn-order-finish" onClick={() => { handleOrder() }}><Link to="/order-completed" className="bnt-link">Fechar Pedido</Link></button>
                            <Link className="bnt-link_back" to="/">Continuar comprando</Link>
                        </div>
                    </div>
                </div>

            </div>
        </CheckoutLayout>
    );
}

export default CheckoutPage;