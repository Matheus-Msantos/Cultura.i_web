import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../Auth";
import Layout from "../../components/layout/Layout";
import { BaseUrl } from "../../Api/baseUrl";

import './Product.scss';

function ProductPage() {

    const [produto, setProduto] = useState([]);

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    /* Pegando ID do parâmetro passado pela url  */
    let { id } = useParams();

    useEffect(() => {
        BaseUrl
            .get(`/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
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
    console.log(produto);

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
                        <i className="fa-solid fa-location-dot"></i> {produto?.address?.street}, {produto?.address?.district} - {produto?.address?.city}/ {produto?.address?.state}
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
                    <h3>Ingressos</h3>

                    <p>Não haverá venda de ingressos meia entrada para esse evento</p>
                </div>
                <div className="product-body_box descricao">
                    <h3>Informações</h3>

                    <p>{produto?.description}</p>
                </div>

                {
                    currentUser ?
                        <button className="product-body-button">Comprar</button>
                        :
                        <button className="product-body-button disebled" disabled>Fazer o login para realizar a compra</button>
                }
            </div>
        </Layout>
    );
}

export default ProductPage;