import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginBox from "../LoginBox";
import { UserContext } from "../../Auth";
import logo from '../../assets/image/img-logo.png';

import "./Layout.scss";
import Minicart from "../Minicart";

function Layout({ children }) {

    const [box, setBox] = useState(false);
    const [minicart, setMinicart] = useState(false);


    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    const { itemCount } = useContext(UserContext);
    const ItemNumber = itemCount

    /* Função para abrir ou fechar o popup do usuário */
    const handleOpenBox = () => {
        if (box === false)
            setBox(true);
        else
            setBox(false);
    }

    /* Função para abrir ou fechar o popup do usuário */
    const handleOpenMinicart = () => {
        if (minicart === false)
            setMinicart(true);
        else
            setMinicart(false);
    }

    return (
        <>
            <header className="layout-header_container">
                <div className="layout-header_flex">
                    <Link to="/">
                        <img className='layout-header_logo' src={logo} />
                    </Link>

                    <div className="layout-header-search_container">
                        <input className="layout-header-search" type="search" placeholder="Digite sua busca" />
                        <button className="layout-header-seach_button">pesquisar</button>
                    </div>

                    <div className="layout-header-login_container">

                        <div className="layout-header-login-user_container">

                            {!!currentUser ? /* Fazendo verificação se o usuário estiver logado, mostar o nome se não mostrar o botão de login  */
                                <button className="layout-header-login-user_text" onClick={handleOpenBox}>
                                    <i className="fa-solid fa-circle-user"></i>Olá, {currentUser.user.name}
                                </button>
                                :
                                <Link to="/login" className="layout-header-login-user_button">Entrar <i className="fa-solid fa-right-to-bracket"></i></Link>
                            }
                            <LoginBox box={box} />
                        </div>

                        <button className="layout-header-login_carrinho" onClick={handleOpenMinicart}> {ItemNumber && <span>{ItemNumber}</span>}  Carrinho</button>
                    </div>
                </div>

                <div className={`minicart-overlay ${minicart && 'is--active'}`} onClick={handleOpenMinicart}></div>
                <Minicart active={minicart} />
            </header>

            <section>
                {children}
            </section>

            <footer className="layout-footer_container">
                <p>Cultura.í&reg;  2022</p>
            </footer>
        </>
    );
}

export default Layout;