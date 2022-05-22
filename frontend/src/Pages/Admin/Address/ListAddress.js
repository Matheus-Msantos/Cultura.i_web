import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { BaseUrl } from "../../../Api/baseUrl";

import OptionBoxAdmin from "../../../components/OptionBoxAdmin/index";
import { UserContext } from "../../../Auth";
import { useContext } from "react";


function AdminAddressPage() {

    const [address, setAddress] = useState([]);
    const [box, setBox] = useState(false);
    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    useEffect(() => {
        /* Chamada da API de todos os endereços */
        BaseUrl
            .get("/api/address")
            .then((res) => setAddress(res.data))
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
    /* Mapeando todos os endereços e adicionando na página */
    const MapAddress = address.map((address) => {
        const { id, street, district, number, city, state, country } = address;
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>{street}</td>
                <td>{district}</td>
                <td>{number}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{country}</td>
                <td>
                    <button onClick={() => handleBox()}><i className="fa-solid fa-ellipsis"></i></button>
                    {currentUser?.user.is_Admin ?
                        <div className={`admin-box_container ${box && 'is--active'}`}>
                            <OptionBoxAdmin url={`/admin/address/edit/${id}`} />
                        </div>
                        :
                        ''
                    }

                </td>
            </tr>
        );
    });

    return (
        <div className="admin-container">
            <MenuAdmin active_04={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin/address/register" className="admin-content-button_add"><i className="fa-solid fa-plus"></i>Adicionar</Link>

                <h2>Endereços</h2>

                <table className="table align-middle">
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Rua</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Número</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                            <th scope="col">País</th>
                        </tr>
                    </thead>
                    <tbody >
                        {MapAddress}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminAddressPage;