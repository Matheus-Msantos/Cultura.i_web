
import React, { useContext, useState } from "react";
import { BaseUrl } from "../../Api/baseUrl";
import { UserContext } from '../../Auth';
import { Link, useNavigate } from "react-router-dom";

import './Login.scss';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [credencias, setCredencias] = useState('');
    const navigate = useNavigate();

    /* State do Auth */
    const { setCurrentUser } = useContext(UserContext);

    /* Objeto passado para API */
    const body = {
        email: email,
        password: password
    }

    /* Função para chamda da API de login */
    const handleLogin = () => {
        BaseUrl
            .post('/api/login', body)
            .then((res) => {

                if (!!res.data.error) {
                    setCredencias('Credenciais inválidas')
                } else {
                    /* Adicionar o usuário no localStorage */
                    const user = [res.data]
                    localStorage.setItem('User', JSON.stringify(user));
                    /* Pega o usuário e do localStorage e manda para o contexto de Auth */
                    setCurrentUser(JSON.parse(localStorage.getItem('User'))[0]);

                    /* Redireciona usário para home*/
                    navigate('/');
                }

            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao entrar na conta: '  + err);
            })
    }

    /* Função de sumbit do form */
    const handleSubmit = (e) => {
        /* Desabilita a função de envio padrão do form */
        e.preventDefault();
        /* Chama a API */
        handleLogin();
    }

    return (
        <>
            <div className="div-login">  </div>
            <div className="div-img-email-pass">
                <div className="div-img">
                    <img className="img" src="./image/img-login-user.png" />
                </div>

                <form className="form-input-email-pass-info" onSubmit={(e) => handleSubmit(e)} >
                    <div className="div-input-email-pass">
                        <div className="div-email">
                            <span className="span-email">Email</span>
                            <input className="input-email" type="email" onChange={(e) => { setEmail(e.target.value) }} required />
                        </div>
                        <div className="div-pass">
                            <span className="span-pass">Senha</span>
                            <input className="input-pass" type="password" onChange={(e) => { setPassword(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="div-login-button">
                        <span className="login-error">{credencias}</span>
                        <button className="btn-register" type="submit">LOGIN</button>
                        <div className="div-register-link">
                            <span className="span-register-link">NÃO TEM CONTA:  <Link to="/register" className="span-a-link">CADASTRE-SE AQUI</Link></span>
                        </div>
                    </div>
                    <div className="div-announce-events">
                        <Link to="/register/advert" className="btn-announce">QUERO ANUNCIAR</Link>
                        <Link to="/register/producer" className="btn-announce">QUERO DIVULGAR EVENTOS</Link>
                    </div>
                </form>
            </div>

        </>
    );
}

export default LoginPage;
