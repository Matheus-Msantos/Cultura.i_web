import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { UserContext } from '../../../Auth';
import { BaseUrl } from "../../../Api/baseUrl";


function AdminEditAdvertPage() {
    const imageAPI = useRef();
    const navigate = useNavigate();

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Pegando ID do parâmetro passado pela url  */
    let { id } = useParams();
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    const body = {
        user_id: currentUser?.user.id
    }

    const handleUpdate = () => {
        BaseUrl
            .put(`/api/advert/${id}`, body)
            .then((res) => {
                console.log(res.data);
                navigate('/admin/advert');
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
            <MenuAdmin active_02={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/advert" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Atualizar Anúncio</h2>

                <form onSubmit={(e) => { onSubmit(e) }}>

                    <div className="input-file">
                        <label for="arquivo">Escolher uma imagem</label>
                        <input type="file" id="arquivo" ref={imageAPI} />
                    </div>

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin/advert">Cancelar</Link>
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default AdminEditAdvertPage;