import React, { useState } from "react";
import { BaseUrl } from "../../Api/baseUrl";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../Auth";
import img from '../../assets/image/img-login-user.png';

import './Register.scss';
import { useContext } from "react";

function RegisterAdvertPage() {

    /* State do Auth */
    const { setCurrentUser } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    /* Objeto dos dados do usuário passado para a API */
    const body = {
        name: name,
        email: email,
        cpf_cnpj: cpfCnpj,
        password: password,
        is_Advertiser: 1
        //image: 
    }

    /* Função para chamar a API de cadastro */
    const handleSingUp = () => {
        BaseUrl
            .post('/api/user', body)
            .then((res) => {
                const user = [res.data]
                localStorage.setItem('User', JSON.stringify(user));

                /* Pega o usuário e do localStorage e manda para o contexto de Auth */
                setCurrentUser(JSON.parse(localStorage.getItem('User'))[0]);

                /* Redireciona usário para home */
                navigate('/');
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao cadastrar um usuário: ' + err);
            });
    }

    /* Função de sumbit do form */
    const handleSubmit = (e) => {
        /* Desabilita a função de envio padrão do form */
        e.preventDefault();
        /* Chama a API */
        handleSingUp();
    }

    return (
        <div className="div-register">
            <div className="div-img-email-pass">
                <div className="div-img">
                    <img className="img" src={img} />
                </div>

                <form className="form-input-email-pass-info" onSubmit={(e) => handleSubmit(e)}>

                    <div className="div-cadastro">
                        <h1 className="h1-cadastro">CADASTRO</h1>
                    </div>

                    <div className="div-input-name-email-pass">
                        <div className="div-name">
                            <span className="span-name">Nome</span>
                            <input className="input-nome" type="text" onChange={(e) => setName(e.target.value)} value={name} required />
                        </div>
                        <div className="div-email">
                            <span className="span-email">Email</span>
                            <input className="input-email" type="email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="div-email">
                            <span className="span-email">CPF/CNPJ</span>
                            <input className="input-email" type="number" onChange={(e) => setCpfCnpj(e.target.value)} required />
                        </div>
                        <div className="div-pass">
                            <span className="span-pass">Senha</span>
                            <input className="input-pass" type="password" onChange={(e) => setPassword(e.target.value)} minLength="8" required />
                        </div>
                    </div>
                    <div className="div-register-button">
                        <button className="btn-register" type="submit">CADASTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterAdvertPage;
