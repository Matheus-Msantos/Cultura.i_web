import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Auth";

function MenuAdmin({ active_01, active_02, active_03, active_04, active_05, active_06 }) {

    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    /* Função de sair da conta */
    const handleLogout = () => {
        /* Remover dados do localStorage */
        localStorage.removeItem("User");
        /* Atualiza a página */
        window.location.reload();
    }

    return (
        <div className="admin-menu_container">
            <div className="admin-menu_top">

                <div className="admin-menu_header">
                    <img src={currentUser?.user?.image} />

                    <span>Bem vindo, {currentUser?.user.name}</span>
                </div>

                <div className="admin-menu_body">
                    {currentUser?.user.is_Admin ?
                        <ul>
                            <li>
                                <Link to="/admin" className={`${active_01}`}>Eventos</Link>
                            </li>
                            <li>
                                <Link to="/admin/advert" className={`${active_02}`}>Anúncios</Link>
                            </li>
                            <li>
                                <Link to="/admin/category" className={`${active_03}`}>Categorias</Link>
                            </li>
                            <li>
                                <Link to="/admin/address" className={`${active_04}`}>Endereços</Link>
                            </li>
                            <li>
                                <Link to="/admin/user" className={`${active_05}`}>Usuários</Link>
                            </li>
                            <li>
                                <Link to="/admin/order" className={`${active_06}`}>Pedidos</Link>
                            </li>
                        </ul>
                        : ''}

                    {currentUser?.user.is_Producer ?
                        <ul>
                            <li>
                                <Link to="/admin" className={`${active_01}`}>Eventos</Link>
                            </li>
                            <li>
                                <Link to="/admin/category" className={`${active_03}`}>Categorias</Link>
                            </li>
                            <li>
                                <Link to="/admin/address" className={`${active_04}`}>Endereços</Link>
                            </li>
                            <li>
                                <Link to="/admin/order" className={`${active_06}`}>Pedidos</Link>
                            </li>
                        </ul>
                        : ''}

                    {currentUser?.user.is_Advertiser ?
                        <ul>
                            <li>
                                <Link to="/admin/advert" className={`${active_02}`}>Anúncios</Link>
                            </li>
                        </ul>
                        : ''}

                </div>
            </div>




            <div className="admin-menu_footer">
                <Link to="/">Voltar para home</Link>
                <button onClick={handleLogout}>Sair da conta</button>
            </div>
        </div>
    );
}

export default MenuAdmin;