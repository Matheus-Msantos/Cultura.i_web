import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../Auth";
import Layout from "../../components/layout/Layout";
import { BaseUrl } from "../../Api/baseUrl";

import './Product.scss';

function ProductPage() {

    const [produto, setProduto] = useState([]);
    const navigate = useNavigate()

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;
    /* Pegando ID do parâmetro passado pela url  */
    let { id } = useParams();

    /* Chamada da API para add 1 item no carrinho */
    const handleCartAdd = () => {
        BaseUrl
            .get(`/api/cart/add/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log('Ops! Ocorreu um erro ao adicionar o produto no carrinho: ' + err))
        navigate('/checkout');
    }

    useEffect(() => {
        /* Chamada da API de produto */
        BaseUrl
            .get(`/api/product/${id}`)
            .then((res) => {
                const { name, price, description, date, time, user, classification, address, category, image } = res.data[0];
                const produtoObj = {
                    name: name,
                    price: price,
                    description: description,
                    date: date,
                    time: time,
                    user: user?.user,
                    classification: classification,
                    address: address,
                    category: category,
                    image: image
                }

                setProduto(produtoObj);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro mostrar 1 produto: ' + err);
            });
    }, [])

    return (
        <Layout>
            <div className="product-header_container">
                <img src={produto?.image} alt="Imagem do produto" />

                <div className="product-header_flex">
                    <h2>{produto?.name}</h2>

                    <p className="product-header-text_info">
                        <i className="fa-solid fa-calendar"></i> {produto?.date} ás {produto?.time}
                    </p>

                    <p className="product-header-text_info">
                        <i className="fa-solid fa-location-dot"></i> {produto?.address}
                    </p>

                    <p className="product-header-text_info">
                        <i className="fa-solid fa-users"></i> {produto?.classification}
                    </p>

                    <p className="product-header-text_info price">
                        R$ {produto?.price}
                    </p>

                    <Link to={`/category/${produto?.category?.id}`}>{produto?.category?.name}</Link>
                </div>
            </div>

            <div className="product-body_container">
                <div className="product-body_box">
                    <h3>Descrição</h3>
                    <p>{produto?.description}</p>

                </div>
                <div className="product-body_box descricao">
                    <h3>Informações</h3>
                    <p>Não haverá venda de ingressos meia entrada para esse evento</p>
                </div>

                {
                    currentUser ?
                        <button className="product-body-button" onClick={(() => handleCartAdd())}>Comprar</button>
                        :
                        <button className="product-body-button disebled" disabled>Fazer o login para realizar a compra</button>
                }
            </div>
        </Layout>
    );
}

export default ProductPage;