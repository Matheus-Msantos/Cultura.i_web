import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { BaseUrl } from "../../../Api/baseUrl";
import { UserContext } from "../../../Auth";

function AdminRegisterProductPage() {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [classification, setClassification] = useState('');
    const [category, setCategory] = useState(0);
    const [address, setAddress] = useState(0);
    const [description, setDescription] = useState('');
    const [categoryAll, setCategoryAll] = useState([]);
    const [addressAll, setAddressAll] = useState([]);
    const imageAPI = useRef()

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;
    /* Conexão com API de image */
    async function uploadImage(image) {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'cultura.i');
        formData.append('clound_name', 'matheusmelo01');

        const response = await fetch('https://api.cloudinary.com/v1_1/matheusmelo01/image/upload', {
            method: 'POST',
            accept: 'application/json',
            body: formData
        });
        const bodyJson = await response.json();
        return bodyJson.url;
    }

    /* Conexão com API */
    const handlePost = async () => {
        let url = await uploadImage(imageAPI.current.files[0]);
        console.log(url)
        /* Body da API */
        const body = {
            name: name,
            description: description,
            //time: time,
            //date: date,
            classification: classification
            //category_id: parseInt(category),
            //address_id: parseInt(address),
            //price: price,
            //user_id: currentUser?.user?.id,
            //image: url
        }
        BaseUrl
            .post('/api/produ', body)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Ops! ocorreu um erro' + err);
            })
    }
    /* Envio de dados para API */
    const onSubmit = (e) => {
        e.preventDefault();
        handlePost();
    }

    useEffect(() => {
        /* Chamada da API de todas as categorias */
        BaseUrl
            .get("/api/category")
            .then((res) => setCategoryAll(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        /* Chamada da API de todos os endereços */
        BaseUrl
            .get("/api/address")
            .then((res) => setAddressAll(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    }, []);
    /* Mapeando todas as categorias*/
    const categoryMap = categoryAll.map((category) => {
        return (
            <>
                <option key={category.id} value={category.id}>{category.name}</option>
            </>
        );
    });
    /* Mapeando todos os endereços*/
    const addressMap = addressAll.map((address) => {
        return (
            <>
                <option key={address.id} value={address.id}>{address.street}</option>
            </>
        );
    });

    return (
        <div className="admin-container">
            <MenuAdmin active_01={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Cadastrar Evento</h2>

                <form onSubmit={(e) => { onSubmit(e) }}>
                    <input type="text" className="admin-input admin-input-medium" placeholder="Nome do evento" onChange={(e) => setName(e.target.value)} value={name} />

                    <input type="date" className="admin-input admin-input-small" placeholder="Data" onChange={(e) => setDate(e.target.value)} value={date} />

                    <input type="text" className="admin-input admin-input-small" placeholder="Hora" onChange={(e) => setTime(e.target.value)} value={time} />

                    <input type="number" className="admin-input admin-input-small" placeholder="Valor do evento" onChange={(e) => setPrice(e.target.value)} value={price} />

                    <input type="text" className="admin-input admin-input-big" placeholder="Classificação do evento" onChange={(e) => setClassification(e.target.value)} value={classification} />

                    <select className="admin-input admin-input-medium" onChange={(e) => setCategory(e.target.value)}>
                        <option value='' disabled selected >Selecione uma categoria</option>
                        {categoryMap}
                    </select>

                    <select className="admin-input admin-input-medium" onChange={(e) => setAddress(e.target.value)}>
                        <option value='' disabled selected>Selecione um enderelo</option>
                        {addressMap}
                    </select>

                    <textarea className="admin-input admin-input-big " placeholder="Descrição do evento" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>

                    <input type="file" className="admin-input admin-input-medium input-file" ref={imageAPI} />

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin">Cancelar</Link>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminRegisterProductPage;