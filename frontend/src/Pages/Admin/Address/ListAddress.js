import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { BaseUrl } from "../../../Api/baseUrl";
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
    const MapAddress = address.map((addresses) => {
        const { id, address } = addresses;
        return (
            <tr key={id}>
                <th scope="row">{id}</th>
                <td>{address}</td>
                <td>
                    {currentUser?.user.is_Admin ?
                        <div className={`admin-box_container is--active`}>
                            <Link to={`/admin/address/edit/${id}`} className="admin-box-button_edit"><i className="fa-solid fa-pencil"></i></Link>
                            <button className="admin-box-button-delete"><i className="fa-solid fa-trash"></i></button>
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