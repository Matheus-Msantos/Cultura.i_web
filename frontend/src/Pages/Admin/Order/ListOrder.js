import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { UserContext } from '../../../Auth';
import { BaseUrl } from "../../../Api/baseUrl";
import Moment from 'moment';


function AdminOrderPage() {

    const [pedidos, setPedidos] = useState([]);
    const [box, setBox] = useState(false);
    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    useEffect(() => {
        /* Chamada da API de todos os produtos */
        BaseUrl
            .get("/api/order/all")
            .then((res) => setPedidos(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    /* Mapeando todos os produtos e adicionando na página */
    const MapPedidos = pedidos.map((pedido) => {
        const { id, user, quantity, value, product, created_at } = pedido;
        const dateFormater = Moment(created_at).format("DD/MM/YYYY");
        var formatter = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>{user?.name}</td>
                <td>{quantity}</td>
                <td>{formatter.format(value)}</td>
                <td>{product.name}</td>
                <td>{dateFormater}</td>
            </tr>
        );
    });

    /* Filtrando os pedidos por id do produtor logado */
    const filterPedidos = pedidos.filter((pedidos) => pedidos?.product.user_id === currentUser?.user.id);

    /* Mapeando todos os produtos e adicionando na página */
    const MapPedidosProducer = filterPedidos.map((pedido) => {
        const { id, user, quantity, value, product, created_at } = pedido;
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>{user?.name}</td>
                <td>{quantity}</td>
                <td>R$ {value}</td>
                <td>{product.name}</td>
                <td>{created_at}</td>
            </tr>
        );
    });

    return (
        <div className="admin-container">
            <MenuAdmin active_06={"is--active"} />

            <div className="admin-content_container">

                <h2>Pedidos</h2>

                <table className="table align-middle">
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">valor</th>
                            <th scope="col">Evento</th>
                            <th scope="col">Data</th>
                        </tr>
                    </thead>
                    <tbody >
                        {currentUser?.user.is_Admin ? MapPedidos : MapPedidosProducer}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminOrderPage;