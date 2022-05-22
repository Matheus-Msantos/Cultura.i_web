import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl } from "../../Api/baseUrl";
import { UserContext } from "../../Auth";
import Layout from '../../components/layout/Layout'

import "./Profile.scss";

function ProfileEditPage() {

    const navigate = useNavigate()

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    const [nome, setNome] = useState(currentUser?.user?.name);
    const [imagem, setImagem] = useState(currentUser?.user?.image);
    const imageAPI = useRef()
    const [cpf, setCpf] = useState(currentUser?.user?.cpf_cnpj);
    const [email, setEmail] = useState(currentUser?.user?.email);


    /* Conexão com API de imagem */
    async function uploadImage(image) {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'cultura.i');
        formData.append('clound_name', 'matheusmelo01');

        const response = await fetch('http://api.cloudinary.com/v1_1/matheusmelo01/image/upload', {
            method: 'POST',
            accept: 'application/json',
            body: formData
        });
        const bodyJson = await response.json();
        return bodyJson.url;
    }

    const handleEdit = async () => {
        let url = await uploadImage(imageAPI.current.files[0]);
        const body = {
            name: nome,
            image: url ? url : imagem
        }

        BaseUrl
            .put(`/api/user/${currentUser?.user?.id}`, body)
            .then((res) => {
                console.log(res.data);
                /* Adicionar o usuário no localStorage */
                const user = [res.data]
                localStorage.setItem('User', JSON.stringify(user));
                navigate('/profile')
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao atualizar o usuário: ' + err);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit();
    }


    useEffect(() => { }, [currentUser])

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
                    <form onSubmit={(e) => handleSubmit(e)} className="div-personal-data">
                        <h1 className="h1-title-personal-data">Editar meu perfil</h1>
                        <div className="div-lable-email">
                            <label className="label-email">Nome</label>
                        </div>
                        <div className="div-input-email">
                            <input type="text" className="input-email" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className="div-lable-email">
                            <label className="label-email">Email</label>
                        </div>
                        <div className="div-input-email">
                            <input type="email" className="input-email" value={email} disabled />
                        </div>
                        <div className="div-lable-email">
                            <label className="label-new-pass">CPF/CNPJ</label>
                        </div>
                        <div className="div-input-email">
                            <input type="text" className="input-new-pass" value={cpf} disabled />
                        </div>
                        <div className="div-lable-email">
                            <label className="label-new-pass">Imagem</label>
                        </div>
                        <div>
                            <input type="file" ref={imageAPI} />
                        </div>

                        <button type="submit" className="btn-save">SALVAR</button>
                    </form>

                </div>

            </div >
        </Layout>
    );
}

export default ProfileEditPage;