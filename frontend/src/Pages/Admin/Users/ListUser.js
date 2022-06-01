import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { BaseUrl } from "../../../Api/baseUrl";
import { UserContext } from "../../../Auth";
import { useState } from "react";

import OptionBoxAdmin from "../../../components/OptionBoxAdmin/index";


function AdminUserPage() {


    const [usuarios, setUsuarios] = useState([]);
    const [box, setBox] = useState(false);
    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    useEffect(() => {
        /* Chamada da API de todos os usuarios */
        BaseUrl
            .get("/api/user")
            .then((res) => setUsuarios(res.data))
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

    /* Mapeando todos os usuários e adicionando na página */
    const MapUsuarios = usuarios.map((usuario) => {
        const { id, image, name, email, cpf_cnpj, is_Admin, is_Producer, is_Advertiser } = usuario;
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>
                    <img src={image} />
                </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{cpf_cnpj}</td>
                <td>{is_Admin ? 'Sim' : 'Não'}</td>
                <td>{is_Producer ? 'Sim' : 'Não'}</td>
                <td>{is_Advertiser ? 'Sim' : 'Não'}</td>

                <td>
                    {currentUser?.user.is_Admin ?
                        <div className={`admin-box_container is--active`}>
                            <Link to={`/admin/user/edit/${id}`} className="admin-box-button_edit"><i className="fa-solid fa-pencil"></i></Link>
                            <button className="admin-box-button-delete"><i className="fa-solid fa-trash"></i></button>
                        </div>
                        : ''
                    }
                </td>
            </tr>
        );
    });

    return (
        <div className="admin-container">
            <MenuAdmin active_05={"is--active"} />


            <div className="admin-content_container">

                <h2>Usuários</h2>

                <table className="table align-middle">
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Imagem</th>
                            <th scope="col">Nome</th>
                            <th scope="col">email</th>
                            <th scope="col">CPF/CNPJ</th>
                            <th scope="col">Admin</th>
                            <th scope="col">Produtor</th>
                            <th scope="col">Anúnciante</th>
                        </tr>
                    </thead>
                    <tbody >
                        {MapUsuarios}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminUserPage;