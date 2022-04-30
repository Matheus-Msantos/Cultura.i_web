import React from "react";
import './Register.scss';
//import imgLogin from "../image/img-login-user.png";

function LoginPage() {
    return (
        <div className="div-register">
            <div className="div-img-email-pass">
                <div className="div-img">
                    <img className="img" src="./image/img-login-user.png" />
                </div>
                <form className="form-input-email-pass-info" method="POST" action="#">
                    <div className="div-cadastro">
                        <h1 className="h1-cadastro" >CADASTRO</h1>
                    </div>
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
                        <button className="btn-register">CADASTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
