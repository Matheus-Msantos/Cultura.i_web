import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { UserContext } from '../../../Auth';
import { BaseUrl } from "../../../Api/baseUrl";


function AdminCategoryAddressPage() {

    const [name, setName] = useState('');
    const navigate = useNavigate();

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    const handlePost = () => {
        BaseUrl
            .post("/api/category", { name: name })
            .then((res) => {
                console.log(res.data);
                navigate('/admin/category');
            })
            .catch((err) => console.log('Ops! Ocorreu um erro: ' + err))
    }
    /* Envio de dados para API */
    const onSubmit = (e) => {
        e.preventDefault();
        handlePost();
    }


    return (
        <div className="admin-container">
            <MenuAdmin active_03={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/category" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Cadastrar Categoria</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                    <input type="text" className="admin-input admin-input-medium" placeholder="Nome da categoria" onChange={(e) => setName(e.target.value)} value={name} />

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin/category">Cancelar</Link>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminCategoryAddressPage;