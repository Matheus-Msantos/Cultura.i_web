import React from "react";
import './Login.scss';

function LoginPage() {
    return (
        <div className="div-login">
            <div className="div-img-email-pass">
                <div className="div-img">
                    <img className="img" src="https://via.placeholder.com/300.png/09f/fff" />
                </div>
                <div className="div-input-email-pass-info">
                    <div className="div-input-email-pass">
                        <span className="span-email">Email</span>
                        <input className="input-email"/>
                        <span className="span-email">Senha</span>
                        <input className="input-pass" />
                    </div>
                    <div className="div-register-button">
                        <button className="btn-register">CADASTRAR</button>
                        <span className="span-register">NÃO TEM CONTA: CADASTRE-SE <a className="a-link">Aqui</a></span>
                    </div>
                    <div className="div-announce-events">
                        <button className="btn-announce">QUERO ANUNCIAR</button>
                        <button className="btn-events">QUERO DIVULGAR EVENTOS</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
