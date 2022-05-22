import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { BaseUrl } from "../../../Api/baseUrl";
import { UserContext } from "../../../Auth";
import '../Admin.scss';
import OptionBoxAdmin from "../../../components/OptionBoxAdmin/index";

function AdminProductPage() {

    const [produtos, setProdutos] = useState([]);
    const [box, setBox] = useState(false);

    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        /* Chamada da API de todos os produtos */
        BaseUrl
            .get("/api/product")
            .then((res) => setProdutos(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    const handleBox = () => {
        if (box === false)
            setBox(true);
        else
            setBox(false);
    }

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
    const filterProdutos = produtos.filter((produto) => produto?.user.id === currentUser?.user.id);

    /* Mapeando todos os produtos filtrados */
    const MapProdutosProducer = filterProdutos.map((produto) => {
        const { id, image, name, date, time, address, category, price, classification } = produto;
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>
                    <img src={image} />
                </td>
                <td>{name}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>R$ {price}</td>
                <td>{category?.name}</td>
                <td>{address?.street}</td>
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