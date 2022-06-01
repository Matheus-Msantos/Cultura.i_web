import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { UserContext } from '../../../Auth';
import { BaseUrl } from "../../../Api/baseUrl";


function AdminRegisterAdvertPage() {
    const imageAPI = useRef();
    const navigate = useNavigate();

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    /* Conexão com API de imagem */
    async function uploadImage(image) {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'cultura.i');
        formData.append('clound_name', 'matheusmelo01');

        const response = await fetch('https://api.cloudinary.com/v1_1/matheusmelo01/image/upload', {
            method: 'POST',
            accept: 'application/json',
            body: formData
        });
        const bodyJson = await response.json();
        return bodyJson.url;
    }

    const handlePost = async () => {
        let url = await uploadImage(imageAPI.current.files[0]);
        console.log(url)
        /* Body da API */
        const body = {
            user_id: currentUser?.user.id,
            image: url
        }
        BaseUrl
            .post("/api/advert", body)
            .then((res) => {
                console.log(res.data);
                navigate('/admin/advert');
            })
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
                <Link to="/admin/advert" className="admin-content-button_add"><i className="fa-solid fa-left"></i>Voltar</Link>

                <h2>Cadastrar anúncio</h2>

                <form onSubmit={(e) => { onSubmit(e) }}>

                    <div className="input-file">
                        <label for="arquivo">Escolher uma imagem</label>
                        <input type="file" id="arquivo" ref={imageAPI} />
                    </div>

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
