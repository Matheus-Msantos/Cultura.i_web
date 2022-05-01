import React from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";

function ProfilePage() {
    return (
        <div>
            <div className="div-my-profile">
                <h1 className="h1-my-profile">Meu Perfil</h1>
            </div>
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
                    <img src="#" className="img-Photograph" />
                    <button className="btn-trocar-Photograph">TROCAR FOTO</button>
                </div>
                <div className="div-account">
                    <h1 className="h1-title-account">Conta</h1>
                    <div className="div-email">
                        <label className="label-email">Email</label>
                        <input type="email" className="input-email" />
                    </div>
                    <div className="div-email-confirm">
                        <label className="label-email-confirm">Confirmar Email</label>
                        <input type="email" className="input-email-confirm"/>
                    </div>
                    <div className="div-pass">
                        <label className="label-pass">Senha</label>
                        <input type="password" className="input-pass"/>
                    </div>
                    <div className="div-new-pass">
                        <label className="label-new-pass">Nova Senha</label>
                        <input type="password" className="input-new-pass"/>
                    </div>
                    <button className="btn-save ">Salvar</button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;