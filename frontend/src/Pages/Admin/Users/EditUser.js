import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { UserContext } from '../../../Auth';
import { BaseUrl } from "../../../Api/baseUrl";

function AdminEditUserPage() {

    const [admin, setAdmin] = useState();
    const [producer, setProducer] = useState();
    const [advert, setAdvert] = useState();

    /* Pegando ID do parâmetro passado pela url  */
    let { id } = useParams();
    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    useEffect(() => {
        /* Chamada da API do produto */
        BaseUrl
            .get(`/api/user/${id}`)
            .then((res) => {
                console.log(res.data)
                const { is_Admin, is_Producer, is_Advertiser } = res.data;
                setAdmin(is_Admin);
                setProducer(is_Producer);
                setAdvert(is_Advertiser);
            })
            .catch((err) => console)
    }, [])
    /* Body da API */
    const body = {
        is_Admin: admin,
        is_Producer: producer,
        is_Advertise: advert
    }
    /* Conexão com API */
    const handleUpdate = () => {
        BaseUrl
            .put(`/api/user/${id}`, body)
            .then((res) => console.log(res.data))
            .catch((err) => console.log('Ops! Ocorreu um erro ao atualizar um produto: ' + err))
    }
    /* Envio de dados para API */
    const onSubmit = (e) => {
        e.preventDefault();
        handleUpdate();
    }

    return (
        <div className="admin-container">
            <MenuAdmin active_01={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/user" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Atualizar Evento</h2>

                <form onSubmit={(e) => onSubmit(e)}>

                    <select className="admin-input admin-input-medium" onChange={(e) => setAdmin(e.target.value)} >
                        <option value={admin} selected disabled>Permissão administrativo</option>
                        <option value='1'>Sim</option>
                        <option value='0'>Não</option>
                    </select>

                    <select className="admin-input admin-input-medium" onChange={(e) => setProducer(e.target.value)}>
                        <option value={producer} selected disabled>Permissão para produtor</option>
                        <option value='1'>Sim</option>
                        <option value='0'>Não</option>
                    </select>

                    <select className="admin-input admin-input-medium" onChange={(e) => setAdvert(e.target.value)}>
                        <option value={advert} selected disabled>Permissão para anúnciante</option>
                        <option value='1'>Sim</option>
                        <option value='0'>Não</option>
                    </select>

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin/user">Cancelar</Link>
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminEditUserPage;