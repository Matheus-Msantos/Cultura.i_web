import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { BaseUrl } from "../../../Api/baseUrl";
import { UserContext } from "../../../Auth";
import Moment from 'moment';
import '../Admin.scss';

function AdminProductPage() {

    const [produtos, setProdutos] = useState([]);
  
    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    useEffect(() => {
        /* Chamada da API de todos os produtos */
        BaseUrl
            .get("/api/product")
            .then((res) => setProdutos(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    /* Mapeando todos os produtos e adicionando na página */
    const MapProdutos = produtos.map((produto) => {
        const { id, image, name, date, time, address, category, price, classification } = produto;
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>R$ {price}</td>
                <td>{category?.name}</td>
                <td>{address?.street}</td>
                <td>{classification}</td>
                <td>
                    <img src={image} />
                </td>
                <td>

                    <div className={`admin-box_container is--active`}>
                        <Link to={`/admin/product/edit/${id}`} className="admin-box-button_edit"><i className="fa-solid fa-pencil"></i> Editar</Link>
                        <button className="admin-box-button-delete"><i className="fa-solid fa-trash"></i> Excluir</button>
                    </div>
                </td>
            </tr>
        );
    });

    /* Filtrando os produtos por id do produtor logado */
    const filterProdutos = produtos.filter((produto) => produto?.user_id === currentUser?.user.id);

    /* Mapeando todos os produtos filtrados */
    const MapProdutosProducer = filterProdutos.map((produto) => {
        const { id, image, name, date, time, address, category, price, classification } = produto;
        const dateFormater = Moment(date).format("DD/MM/YYYY");
        var formatter = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>
                    <img src={image} />
                </td>
                <td>{name}</td>
                <td>{dateFormater}</td>
                <td>{time}</td>
                <td>{formatter.format(price)}</td>
                <td>{category?.name}</td>
                <td>{address}</td>
                <td>{classification}</td>
                <td>
                    <div className={`admin-box_container is--active`}>
                        <Link to={`/admin/product/edit/${id}`} className="admin-box-button_edit"><i className="fa-solid fa-pencil"></i></Link>
                        <button className="admin-box-button-delete"><i className="fa-solid fa-trash"></i></button>
                    </div>

                </td>
            </tr>
        );
    });

    return (
        <div className="admin-container">
            <MenuAdmin active_01={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/product/register" className="admin-content-button_add"><i className="fa-solid fa-plus"></i>Adicionar</Link>

                <h2>Eventos</h2>

                <table className="table align-middle">
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Imagem</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Data</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Classificação</th>
                        </tr>
                    </thead>
                    <tbody >
                        {currentUser?.user.is_admin ?
                            MapProdutos
                            :
                            MapProdutosProducer
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminProductPage;