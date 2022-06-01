import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { UserContext } from '../../../Auth';
import { BaseUrl } from "../../../Api/baseUrl";

function AdminEditAddressPage() {

    const [address, setAddress] = useState('');
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
        /* Chamada da API do produto */
        BaseUrl
            .get(`/api/address/${id}`)
            .then((res) => {
                console.log(res.data)
                const { address } = res.data;
                setAddress(address);
            })
            .catch((err) => console.log(err))
    }, [])

    /* Body da API */
    const body = {
        address: address
    }
    /* Conexão com API */
    const handlePost = () => {
        BaseUrl
            .put(`/api/address/${id}`, body)
            .then((res) => {
                console.log(res.data);
                navigate('/admin/address');
            })
            .catch((err) => {
                console.error('Ops! ocorreu um erro' + err);
            })
    }
    /* Envio de dados para API */
    const onSubmit = (e) => {
        e.preventDefault();
        handlePost();
    }

    return (
        <div className="admin-container">
            <MenuAdmin active_04={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/address" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Atualizar Endereço</h2>

                <form onSubmit={(e) => { onSubmit(e) }}>
                    <input type="text" className="admin-input admin-input-big" placeholder="Endereço completo" onChange={(e) => setAddress(e.target.value)} value={address} />

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin/address">Cancelar</Link>
                        <button type="submit">atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminEditAddressPage;