import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { UserContext } from '../../../Auth';
import { BaseUrl } from "../../../Api/baseUrl";


function AdminRegisterAdvertPage() {

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    const body = {
        user_id: currentUser?.user.id
    }

    const handlePost = () => {
        BaseUrl
            .post("/api/advert", body)
            .then((res) => console.log(res.data))
            .catch((err) => console.log('Ops! Ocorreu um erro ao atualizar um produto: ' + err))
    }
    /* Envio de dados para API */
    const onSubmit = (e) => {
        e.preventDefault();
        handlePost();
    }

    return (
        <div className="admin-container">
            <MenuAdmin active_02={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/advert" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Cadastrar Evento</h2>

                <form onSubmit={(e) => { onSubmit(e) }}>

                    <input type="file" className="admin-input admin-input-medium input-file" />

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin/advert">Cancelar</Link>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminRegisterAdvertPage;