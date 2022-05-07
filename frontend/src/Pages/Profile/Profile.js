import React from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";

function ProfilePage() {
    return (
        <div className="div-profile-page">
            <h1 className="h1-title-my-profile">Meu Perfil</h1>
            <div className="div-profile-requests">
                <div className="div-profile">
                    <span className="span-profile"><Link to={"/profile"} className="link-profile">Perfil</Link></span>
                </div>
                <div className="div-requests">
                    <span className="span-requests"><Link to={"/product/:id"} className="link-requests">Pedidos</Link></span>
                </div>
            </div>
            <div className="div-personal-data-account">
                <div className="div-personal-data">
                    <h1 className="h1-title-personal-data">Dados Pessoais</h1>
                    <div className="div-img-button">
                        <div className="div-img">
                            <img src="./image/user-profile.png" className="img-Photograph" />
                        </div>
                        <div className="div-button">
                            <button className="btn-trocar-Photograph">TROCAR FOTO</button>
                        </div>
                    </div>
                    <div className="div-name-input">
                        <div className="div-label-name">
                            <label className="label-name">Nome Completo</label>
                        </div>
                        <div className="div-input-name">
                            <input type="text" className="input-name" />
                        </div>
                    </div>
                    <div className="div-cpf-input">
                        <div className="div-label-cpf">
                            <label className="label-cpf">CPF</label>
                        </div>
                        <div className="div-input-cpf">
                            <input type="number" className="input-cpf" />
                        </div>
                    </div>
                    <div className="div-birth-input">
                        <div className="div-label-birth">
                            <label className="label-title-birth">Nascimento</label>
                        </div>
                        <div className="div-input-date-birth">
                            <input type="number" className="input-day" />
                            <input type="number" className="input-month" />
                            <input type="number" className="input-year" />
                        </div>
                    </div>
                </div>
                <hr />

                <div className="div-account">
                    <h1 className="h1-title-account">Conta</h1>
                    <div className="div-lable-email">
                        <label className="label-email">Email</label>
                    </div>
                    <div className="div-input-email">
                        <input type="email" className="input-email" />
                    </div>
                    <div className="div-label-email-confirm">
                        <label className="label-email-confirm">Confirmar Email</label>
                    </div>
                    <div className="div-input-email-confirm">
                        <input type="email" className="input-email-confirm" />
                    </div>
                    <div className="div-label-pass">
                        <label className="label-pass">Senha</label>
                    </div>
                    <div className="div-input-pass">
                        <input type="password" className="input-pass" />
                    </div>
                    <div className="div-label-new-pass">
                        <label className="label-new-pass">Nova Senha</label>
                    </div>
                    <div className="div-input-new-pass">
                        <input type="password" className="input-new-pass" />
                    </div>

                    <button className="btn-save">Salvar</button>

                </div>
            </div>
        </div>
    );
}

export default ProfilePage;