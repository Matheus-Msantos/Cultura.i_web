import React, { useState, useEffect, useContext } from "react";
import MenuAdmin from "../../../components/MenuAdmin";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../../Api/baseUrl";
import OptionBoxAdmin from "../../../components/OptionBoxAdmin";
import { UserContext } from "../../../Auth";

function AdminAdvertPage() {

    const [anuncios, setAnuncios] = useState([]);
    const [box, setBox] = useState(false);

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    useEffect(() => {
        /* Chamada da API de todas as anúncios */
        BaseUrl
            .get("/api/advert")
            .then((res) => setAnuncios(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    const handleDelete = (id) => {
        /* Chamada da API para excluir anúncio */
        BaseUrl
            .delete(`/api/advert/${id}`)
            .then((res) => window.location.reload())
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    /* Mapeando todos os anuncios e adicionando na página */
    const MapAnuncios = anuncios.map((anuncio) => {
        const { id, image, user } = anuncio;
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>
                    <img src={image} />
                </td>
                <td>{user.name}</td>
                <td>
                    <div className={`admin-box_container is--active`}>
                        <Link to={`/admin/advert/edit/${id}`} className="admin-box-button_edit"><i className="fa-solid fa-pencil"></i></Link>
                        <button className="admin-box-button-delete" onClick={() => handleDelete(id)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        );
    });

    /* Filtrando os pedidos por id do produtor logado */
    const filterAnuncios = anuncios.filter((anuncios) => anuncios?.user_id === currentUser?.user.id);

    /* Mapeando todos os anuncios e adicionando na página */
    const MapAnunciosAnunciante = filterAnuncios.map((anuncio) => {
        const { id, image, user } = anuncio;
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>
                    <img src={image} />
                </td>
                <td>{user.name}</td>
                <td>
                    <div className={`admin-box_container is--active`}>
                        <Link to={`/admin/advert/edit/${id}`} className="admin-box_button"><i className="fa-solid fa-pencil"></i> Editar</Link>
                        <button className="admin-box_button" onClick={() => handleDelete(id)}><i className="fa-solid fa-trash"></i> Excluir</button>
                    </div>
                </td>
            </tr>
        );
    });

    return (
        <div className="admin-container">
            <MenuAdmin active_02={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/advert/register" className="admin-content-button_add"><i className="fa-solid fa-plus"></i>Adicionar</Link>

                <h2>Anúncios</h2>

                <table className="table align-middle">
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Anúncio</th>
                            <th scope="col">Criado por</th>
                        </tr>
                    </thead>
                    <tbody >
                        {currentUser?.user.is_Admin ?
                            MapAnuncios
                            :
                            MapAnunciosAnunciante
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminAdvertPage;