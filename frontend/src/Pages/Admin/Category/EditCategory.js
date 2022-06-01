import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { UserContext } from '../../../Auth';
import { BaseUrl } from "../../../Api/baseUrl";

function AdminEditCategoryPage() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    /* Pegando ID do parâmetro passado pela url  */
    let { id } = useParams();
    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    useEffect(() => {
        /* Chamada da API de todas as categorias */
        BaseUrl
            .get(`/api/category/${id}`)
            .then((res) => setName(res.data?.name))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])
    /* Conexão com API */
    const handleUpdate = () => {
        BaseUrl
            .put(`/api/category/${id}`, { name: name })
            .then((res) => {
                console.log(res.data);
                navigate('/admin/category');
            })
            .catch((err) => console.log('Ops! Ocorreu um erro ao atualizar um produto: ' + err))
    }

    /* Envio de dados para API */
    const onSubmit = (e) => {
        e.preventDefault();
        handleUpdate();
    }

    return (
        <div className="admin-container">
            <MenuAdmin active_03={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/category" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Atualizar Categoria</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                    <input type="text" className="admin-input admin-input-medium" placeholder="Nome da categoria" onChange={(e) => setName(e.target.value)} value={name} />

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin/category">Cancelar</Link>
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminEditCategoryPage;