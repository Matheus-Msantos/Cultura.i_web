import React, { useState, useEffect } from "react";
import MenuAdmin from "../../../components/MenuAdmin";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../../Api/baseUrl";
import OptionBoxAdmin from "../../../components/OptionBoxAdmin";
import { UserContext } from "../../../Auth";
import { useContext } from "react";

function AdminCategoryPage() {

    const [categorias, setCategorias] = useState([]);
    const [box, setBox] = useState(false);
    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    useEffect(() => {
        /* Chamada da API de todas as categorias */
        BaseUrl
            .get("/api/category")
            .then((res) => setCategorias(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    /* Mapeando todos os categoria e adicionando na página */
    const MapCategoria = categorias.map((categoria) => {
        const { id, name } = categoria;
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>
                    <button onClick={() => handleBox()}><i className="fa-solid fa-ellipsis"></i></button>

                    {currentUser?.user.is_Admin ?
                        <div className={`admin-box_container ${box && 'is--active'}`}>
                            <OptionBoxAdmin url={`/admin/category/edit/${id}`} />
                        </div>
                        : ''
                    }

                </td>
            </tr>
        );
    });

    const handleBox = () => {
        if (box === false)
            setBox(true);
        else
            setBox(false);
    }

    return (
        <div className="admin-container">
            <MenuAdmin active_03={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/category/register" className="admin-content-button_add"><i className="fa-solid fa-plus"></i>Adicionar</Link>

                <h2>Categorias</h2>

                <table className="table align-middle">
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                        </tr>
                    </thead>
                    <tbody >
                        {MapCategoria}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminCategoryPage;