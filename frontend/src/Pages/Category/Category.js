import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { BaseUrl } from "../../Api/baseUrl";
import Layout from "../../components/layout/Layout";
import Moment from "moment";

import FilterCategory from "../../components/FilterCategory";
import { UserContext } from "../../Auth";


function CategoryPage() {

    const [produtos, setProdutos] = useState([]);
    const [categoriaNome, setCategoriaNome] = useState([]);
    const [anuncios, setAnuncios] = useState([]);

    /* Pegando ID do parâmetro passado pela url  */
    let { id } = useParams();

    useEffect(() => {

        /* Chamada da API do produto em destaque */
        BaseUrl
            .get(`/api/product/category/${id}`)
            .then((res) => {
                setProdutos(res.data);
                setCategoriaNome(res.data[0].category?.name)
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostrar o produto pela categoria: ' + err);
            });
        /* Chamada da API dos anuncios */
        BaseUrl
            .get('/api/advert')
            .then((res) => {
                setAnuncios(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostrar o produto pela categoria: ' + err);
            });
    }, [id]);

    /* Mapeando todos os produtos e adicionando na página */
    const MapProdutos = produtos.map((produto) => {
        const { id, image, name, date, time, address } = produto;
        const dateFormater = Moment(date).format("DD/MM/YYYY");
        return (
            <div className="eventos_box" key={id}>
                <Link to={`/product/${id}`}>
                    <img src={image} />

                    <div className="eventos-box_details">
                        <span className="eventos-box-details_name">{name}</span>
                        <span className="eventos-box-details_date">{dateFormater} - {time}</span>
                        <address>{address}</address>
                    </div>
                </Link>
            </div >
        );
    });

    /* Mapeando produtos da categoria próximos eventos */
    const MapAnuncio = anuncios.map((anuncio) => {
        const { id, image } = anuncio;
        return (
            <div className="home-slider-anuncios-box" key={id}>
                <img src={image} />
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

    return (
        <>
            <Layout>
                <div className="home-slider-anuncios_container slider">
                    <Slider {...settings}>
                        {MapAnuncio}
                    </Slider>
                </div>

                <FilterCategory />

                <div className="eventos_container bg-grey">
                    <h2>{categoriaNome}</h2>

                    <div className="eventos-box_container">
                        {MapProdutos}
                    </div>

                </div>
            </Layout>
        </>
    );
}

export default CategoryPage;