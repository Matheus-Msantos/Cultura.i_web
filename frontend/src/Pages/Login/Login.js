import React from "react";
import './Login.scss';

import { useState } from "react";
import { BaseUrl } from "../../Api/baseUrl";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const body = {
        email: email,
        password: password
    }

    const handleLogin = () => {
        BaseUrl
            .post('/api/login', body)
            .then((res) => {
                console.log(res.data);

                const user = [res.data]
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('User', JSON.stringify(user))
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao entrar na conta');
            })
    }

    return (
        <div className="div-login">
            <div className="div-img-email-pass">

                <div className="div-img">
                    <img className="/images/img-login-user" src="./image/img-login-user.png" />
                </div>

                <form className="form-input-email-pass-info" onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }} >
                    <div className="div-input-email-pass">
                        <div className="div-email">
                            <span className="span-email">Email</span>
                            <input className="input-email" type="email" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="div-pass">
                            <span className="span-pass">Senha</span>
                            <input className="input-pass" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    </div>
                    <div className="div-register-button">
                        <button className="btn-register" type="submit">LOGIN</button>
                        <div className="div-register">
                            <span className="span-register">NÃO TEM CONTA: CADASTRE-SE <a href="/register" className="span-a-link">AQUI</a></span>
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
