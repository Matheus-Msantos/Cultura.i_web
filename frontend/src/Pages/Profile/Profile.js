import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Auth";
import Layout from '../../components/layout/Layout'
import "./Profile.scss";

function ProfilePage() {

    const { currentUser } = useContext(UserContext);

    return (
        <Layout>
            <div className="div-profile-page">
                <h1 className="h1-title-my-profile">Meu Perfil</h1>
                <div className="div-profile-order">
                    <div className="div-profile">
                        <span className="span-profile"><Link to="/profile" className="link-profile">Perfil</Link></span>
                    </div>
                    <div className="div-order">
                        <span className="span-order"><Link to="/order" className="link-order">Pedidos</Link></span>
                    </div>
                </div>
                <div className="div-personal-data-account">
                    <div className="div-personal-data">
                        <h1 className="h1-title-personal-data">Dados Pessoais</h1>
                        <div className="div-img-button">
                            <div className="div-img">
                                <img src={currentUser?.user?.image} className="img-Photograph" />
                            </div>
                        </div>
                        <div className="div-name-input">
                            <div className="div-label-name">
                                <label className="label-name">Nome Completo</label>
                            </div>
                            <div className="div-input-name">
                                <span className="profile-dados_text">{currentUser?.user?.name}</span>
                            </div>
                        </div>
                        <div className="div-cpf-input">
                            <div className="div-label-cpf">
                                <label className="label-cpf">Email</label>
                            </div>
                            <div className="div-input-cpf">
                                <span className="profile-dados_text">{currentUser?.user?.email}</span>
                            </div>
                        </div>
                        <div className="div-cpf-input">
                            <div className="div-label-cpf">
                                <label className="label-cpf">CPF</label>
                            </div>
                            <div className="div-input-cpf">
                                <span className="profile-dados_text">{currentUser?.user?.cpf_cnpj}</span>
                            </div>
                        </div>

                        <Link to="/profile/edit">Editar</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProfilePage;