import React from "react";
import "./Layout.scss";

function Layout({ children }) {
    return (
        <>
            <header className="layout-header_container">
                <div className="layout-header_flex">
                    <img className='layout-header_logo' src="image/img-logo.png" />

                    <div className="layout-header-search_container">
                        <input className="layout-header-search" type="search" placeholder="Digite sua busca" />
                        <button className="layout-header-seach_button">pesquisar</button>
                    </div>

                    <div className="layout-header-login_container">
                        <button className="layout-header-login_carrinho">Carrinho</button>
                    </div>
                </div>
            </header>

            <section>
                {children}
            </section>

            <footer className="layout-footer_container">
                [Footer]
                Esperando Layouts
            </footer>
        </>
    );
}

export default Layout;