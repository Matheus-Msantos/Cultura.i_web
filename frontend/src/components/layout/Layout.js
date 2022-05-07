import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginBox from "../LoginBox";
import { UserArray } from "../../Auth";

import "./Layout.scss";

function Layout({ children }) {

    /* Constante global dos dados do usuário */
    const userAuth = useContext(UserArray);
    /* Constante */
    const [box, setBox] = useState(false)

    /* Função para abrir ou fechar o popup do usuário */
    const handleOpenBox = () => {
        if (box === false)
            setBox(true);
        else
            setBox(false);
    }

    return (
        <>
            <header className="layout-header_container">
                <div className="layout-header_flex">
                    <Link to="/">
                        <img className='layout-header_logo' src="image/img-logo.png" />
                    </Link>

                    <div className="layout-header-search_container">
                        <input className="layout-header-search" type="search" placeholder="Digite sua busca" />
                        <button className="layout-header-seach_button">pesquisar</button>
                    </div>

                    <div className="layout-header-login_container">

                        <div className="layout-header-login-user_container">

                            {!!userAuth ? /* Fazendo verificação se o usuário estiver logado, mostar o nome se não mostrar o botão de login  */
                                <button className="layout-header-login-user_text" onClick={handleOpenBox}>
                                    <i className="fa-solid fa-circle-user"></i>Olá, {userAuth[0].user.name}
                                </button>
                                :
                                <Link to="/login" className="layout-header-login-user_button">Entrar <i className="fa-solid fa-right-to-bracket"></i></Link>
                            }
                            <LoginBox box={box} />
                        </div>

                        <button className="layout-header-login_carrinho">Carrinho</button>
                    </div>
                </div>
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