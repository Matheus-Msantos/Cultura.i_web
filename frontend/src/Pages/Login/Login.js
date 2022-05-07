import React from "react";
import { Link } from "react-router-dom";
import './Login.scss';

function LoginPage() {
    return (
        <div className="div-login">
            <div className="div-img-email-pass">
                <div className="div-img">
                    <img className="img" src="./image/img-login-user.png" />
                </div>
                <form className="form-input-email-pass-info" method="POST" action="#">
                    <div className="div-input-email-pass">
                        <div className="div-email">
                            <span className="span-email">Email</span>
                            <input className="input-email" type="email" />
                        </div>
                        <div className="div-pass">
                            <span className="span-pass">Senha</span>
                            <input className="input-pass" type="password" />
                        </div>
                    </div>
                    <div className="div-register-button">
                        <button className="btn-register">LOGIN</button>
                        <div className="div-register-link">
                            <span className="span-register-link">NÃO TEM CONTA: CADASTRE-SE <Link to="/register" className="span-a-link">AQUI</Link></span>
                        </div>
                    </div>
                    <div className="div-announce-events">
                        <button className="btn-announce">QUERO ANUNCIAR</button>
                        <button className="btn-events">QUERO DIVULGAR EVENTOS</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
