import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";
import { UserContext } from '../../../Auth';
import { BaseUrl } from "../../../Api/baseUrl";

function AdminEditProductPage() {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [classification, setClassification] = useState('');
    const [category, setCategory] = useState();
    const [address, setAddress] = useState();
    const [description, setDescription] = useState('');
    const [categoryAll, setCategoryAll] = useState([]);
    const [addressAll, setAddressAll] = useState([]);
    const [image, setImage] = useState();
    const imageAPI = useRef()
    const navigate = useNavigate()

    /* Pegando ID do parâmetro passado pela url  */
    let { id } = useParams();
    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    /* Conexão com API de imagem */
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

    useEffect(() => {
        /* Chamada da API do produto */
        BaseUrl
            .get(`/api/product/${id}`)
            .then((res) => {
                console.log(res.data)
                const { name, date, time, price, classification, address, category, description } = res.data[0];
                setName(name);
                setDate(date);
                setTime(time);
                setPrice(price);
                setClassification(classification);
                setDescription(description);
                setAddress(address.id);
                setCategory(category.id);
            })
            .catch((err) => console)
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
    }, [])

    const handleUpdate = async () => {
        let url = await uploadImage(imageAPI.current.files[0]);
        console.log(url)
        /* Body da API */
        const body = {
            name: name,
            description: description,
            time: time,
            date: date,
            classification: classification,
            category_id: category,
            address: address,
            price: price,
            user_id: currentUser?.user?.id,
            image: url ? url : image
        }
        /* Conexão com API */
        BaseUrl
            .put(`/api/product/${id}`, body)
            .then((res) => {
                console.log(res.data);
                navigate('/admin');
            })
            .catch((err) => console.log('Ops! Ocorreu um erro ao atualizar um produto: ' + err))
    }
    /* Envio de dados para API */
    const onSubmit = (e) => {
        e.preventDefault();
        handleUpdate();

    }
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
                <option key={address.id} value={address.address}>{address.address}</option>
            </>
        );
    });

    return (
        <div className="admin-container">
            <MenuAdmin active_01={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Atualizar Evento</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                    <input type="text" className="admin-input admin-input-medium" placeholder="Nome do evento" onChange={(e) => setName(e.target.value)} value={name} />

                    <input type="date" className="admin-input admin-input-small" placeholder="Data" onChange={(e) => setDate(e.target.value)} value={date} />

                    <input type="text" className="admin-input admin-input-small" placeholder="Hora" onChange={(e) => setTime(e.target.value)} value={time} />

                    <input type="number" className="admin-input admin-input-small" placeholder="Valor do evento" onChange={(e) => setPrice(e.target.value)} value={price} />

                    <input type="text" className="admin-input admin-input-big" placeholder="Classificação do evento" onChange={(e) => setClassification(e.target.value)} value={classification} />

                    <select className="admin-input admin-input-medium" onChange={(e) => setCategory(e.target.value)}>
                        <option value={category} disabled selected >{category}</option>
                        {categoryMap}
                    </select>

                    <select className="admin-input admin-input-medium" onChange={(e) => setAddress(e.target.value)}>
                        <option value={address} disabled selected>{address}</option>
                        {addressMap}
                    </select>

                    <textarea className="admin-input admin-input-big " placeholder="Descrição do evento" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>

                    <div className="input-file">
                        <label for="arquivo">Escolher uma foto</label>
                        <input type="file" id="arquivo" ref={imageAPI} />
                    </div>

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin">Cancelar</Link>
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminEditProductPage;