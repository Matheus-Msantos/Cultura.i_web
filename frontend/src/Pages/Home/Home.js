import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../Api/baseUrl";
import Layout from "../../components/layout/Layout";

import './Home.scss';
import FilterCategory from "../../components/FilterCategory";
import { UserContext } from "../../Auth";


function HomePage() {

    const [produtos, setProdutos] = useState([]);
    const [produtoDestaque, setProdutoDestaque] = useState([]);
    const [proximosEventos, setProximosEventos] = useState([]);
    const [novidades, setNovidades] = useState([]);

    useEffect(() => {
        /* Chamada da API de todos os produtos */
        BaseUrl
            .get("/api/product")
            .then((res) => setProdutos(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        /* Chamada da API do produto em destaque */
        BaseUrl
            .get('/api/product/category/2')
            .then((res) => {
                setProdutoDestaque(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostrar o produto pela categoria: ' + err);
            });

        /* Chamada da API da categoria proximos eventos */
        BaseUrl
            .get('/api/product/category/3')
            .then((res) => {
                setProximosEventos(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostrar o produto pela categoria: ' + err);
            });

        /* Chamada da API da categoria de novidades */
        BaseUrl
            .get('/api/product/category/3')
            .then((res) => {
                setNovidades(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostrar o produto pela categoria: ' + err);
            });
    }, []);

    /* Mapeando todos os produtos e adicionando na página */
    const MapProdutos = produtos.map((produto) => {
        const { id, image, name, date, time, address } = produto;
        return (
            <div className="eventos_box" key={id}>
                <Link to={`/product/${id}`}>
                    <img src={image} />

                    <div className="eventos-box_details">
                        <span className="eventos-box-details_name">{name}</span>
                        <span className="eventos-box-details_date">{date} - {time}</span>
                        <address>{address?.street}, {address?.city} - {address?.state}</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>
                </Link>
            </div >
        );
    });

    /* Mapeando produtos da categoria próximos eventos */
    const MapProximosEventos = proximosEventos.map((produto) => {
        const { id, image, name, date, time, address } = produto;
        return (
            <div className="eventos_box" key={id}>
                <Link to={`/product/${id}`}>
                    <img src={image} />

                    <div className="eventos-box_details">
                        <span className="eventos-box-details_name">{name}</span>
                        <span className="eventos-box-details_date">{date} - {time}</span>
                        <address>{address?.street}, {address?.city} - {address?.state}</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>
                </Link>
            </div>
        );
    });

    /* Mapeando produtos da categoria próximos eventos */
    const MapNovidades = novidades.map((novidade) => {
        const { id, image, name, date, time, address } = novidade;
        return (
            <div className="eventos_box" key={id}>
                <Link to={`/product/${id}`}>
                    <img src={image} />

                    <div className="eventos-box_details">
                        <span className="eventos-box-details_name">{name}</span>
                        <span className="eventos-box-details_date">{date} - {time}</span>
                        <address>{address?.street}, {address?.city} - {address?.state}</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>
                </Link>
            </div>
        );
    });

    /* Components dos slider */
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settingsAdvert = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <Layout>
                <div className="home-slider-anuncios_container slider">
                    <Slider {...settings}>
                        <div className="home-slider-anuncios-box">
                            <img src="/image/img-slider.png" />
                        </div>

                        <div className="home-slider-anuncios-box">
                            <img src="/image/img-slider.png" />
                        </div>

                        <div className="home-slider-anuncios-box">
                            <img src="/image/img-slider.png" />
                        </div>

                        <div className="home-slider-anuncios-box">
                            <img src="/image/img-slider.png" />
                        </div>

                        <div className="home-slider-anuncios-box">
                            <img src="/image/img-slider.png" />
                        </div>

                        <div className="home-slider-anuncios-box">
                            <img src="/image/img-slider.png" />
                        </div>
                    </Slider>
                </div>

                <FilterCategory />

                <div className="eventos_container">
                    <h2>Novidades</h2>
                    <span className="eventos_subTitle">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </span>

                    <div className="eventos-box_container">
                        {MapNovidades}
                    </div>
                </div>

                <div className="eventos_container">
                    <h2>Próximos eventos</h2>

                    <div className="eventos-box_container">
                        {MapProximosEventos}
                    </div>

                </div>

                <div className="home-eventos-destaque_container">
                    <div className="home-eventos-destaque-details">
                        <h2>Destaque <span>do mês</span></h2>
                        <p>
                            {produtoDestaque[0]?.description}
                        </p>
                        <Link to="/">Confira</Link>
                    </div>

                    <div className="home-eventos-destaque_img">
                        <img src={produtoDestaque[0]?.image} />
                    </div>
                </div>

                <div className="home-slider-anunciantes_container slider">
                    <Slider {...settingsAdvert}>
                        <div className="home-slider-anunciantes_box">
                            <img src="image/img-anunciante.png" />
                        </div>

                        <div className="home-slider-anunciantes_box">
                            <img src="image/img-anunciante.png" />
                        </div>

                        <div className="home-slider-anunciantes_box">
                            <img src="image/img-anunciante.png" />
                        </div>

                        <div className="home-slider-anunciantes_box">
                            <img src="image/img-anunciante.png" />
                        </div>

                    </Slider>
                </div>

                <div className="eventos_container bg-grey">
                    <h2>Eventos</h2>

                    <div className="eventos-box_container">
                        {MapProdutos}
                    </div>

                </div>
            </Layout>
        </>
    );
}

export default HomePage;