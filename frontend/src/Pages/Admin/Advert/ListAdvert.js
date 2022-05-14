import React, { useState, useEffect } from "react";
import MenuAdmin from "../../../components/MenuAdmin";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../../Api/baseUrl";
import OptionBoxAdmin from "../../../components/OptionBoxAdmin";

function AdminAdvertPage() {

    const [anuncios, setAnuncios] = useState([]);
    const [box, setBox] = useState(false);

    useEffect(() => {
        /* Chamada da API de todas as anúncios */
        BaseUrl
            .get("/api/advert")
            .then((res) => setAnuncios(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

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
                    <button onClick={() => handleBox()}><i className="fa-solid fa-ellipsis"></i></button>

                    <div className={`admin-box_container ${box && 'is--active'}`}>
                        <OptionBoxAdmin url={`/admin/advert/edit/${id}`} />
                    </div>
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
                        {MapAnuncios}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminAdvertPage;