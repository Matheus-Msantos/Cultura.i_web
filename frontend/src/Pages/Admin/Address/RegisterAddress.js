import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { BaseUrl } from "../../../Api/baseUrl";
import { UserContext } from "../../../Auth";
import { useState } from "react";


function AdminRegisterAddressPage() {

    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;
    /* Body da API */
    const body = {
        street: street,
        district: district,
        number: number,
        city: city,
        state: state,
        country: country,
    }
    /* Conexão com API */
    const handlePost = () => {
        BaseUrl
            .post('/api/address', body)
            .then((res) => console.log(res.data))
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
            <MenuAdmin active_01={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/address" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Cadastrar Endereço</h2>

                <form onSubmit={(e) => { onSubmit(e) }}>
                    <input type="text" className="admin-input admin-input-medium" placeholder="Rua / Av" onChange={(e) => setStreet(e.target.value)} value={street} />

                    <input type="text" className="admin-input admin-input-medium" placeholder="Bairro" onChange={(e) => setDistrict(e.target.value)} value={district} />

                    <input type="text" className="admin-input admin-input-medium" placeholder="Número" onChange={(e) => setNumber(e.target.value)} value={number} />

                    <input type="text" className="admin-input admin-input-medium" placeholder="Cidade" onChange={(e) => setCity(e.target.value)} value={city} />

                    <input type="text" className="admin-input admin-input-medium" placeholder="Estado" onChange={(e) => setState(e.target.value)} value={state} />

                    <input type="text" className="admin-input admin-input-medium" placeholder="País" onChange={(e) => setCountry(e.target.value)} value={country} />

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin/address">Cancelar</Link>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminRegisterAddressPage;