import React, { useContext, useEffect, useState } from "react";
import "./Order.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../Auth";
import { BaseUrl } from "../../Api/baseUrl";
import Layout from '../../components/layout/Layout'
import Moment from 'moment'

function OrderPage() {

    const [pedidos, setPedidos] = useState([]);

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    useEffect(() => {
        BaseUrl
            .get('/api/order')
            .then((res) => {
                setPedidos(res.data);
            })
            .catch((err) => {
                console.log("Ops! Erro ao finalizar a compra: " + err);
            })
    }, []);

    const MapPedidos = pedidos.map((pedido) => {
        const { id, product, value, quantity, created_at } = pedido
        const date = Moment(created_at).format("DD/MM/YYYY");
        var formatter = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>  <img src={product.image} /></td>
                <td>{product.name}</td>
                <td>{date}</td>
                <td>{quantity}</td>
                <td>{formatter.format(value)}</td>
            </tr>
        );
    });

    return (
        <Layout>
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
                    <table className="table align-middle">
                        <thead >
                            <tr>
                                <th scope="col">N° do pedido</th>
                                <th scope="col">Imagem</th>
                                <th scope="col">Evento</th>
                                <th scope="col">Data da compra</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>
                        <tbody >
                            {MapPedidos}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default OrderPage;