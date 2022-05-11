import React from "react";
import { Link } from "react-router-dom";

function MenuAdmin({ active_01, active_02, active_03, active_04, active_05, active_06 }) {
    return (
        <div className="admin-menu_container">
            <div className="admin-menu_top">

                <div className="admin-menu_header">
                    <img src="/image/img-anunciante.png" />

                    <span>Bem vindo, Matheus melo</span>
                </div>

                <div className="admin-menu_body">
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
                </div>
            </div>




            <div className="admin-menu_footer">
                <Link to="/">Voltar para home</Link>
                <button >Sair da conta</button>
            </div>
        </div>
    );
}

export default MenuAdmin;