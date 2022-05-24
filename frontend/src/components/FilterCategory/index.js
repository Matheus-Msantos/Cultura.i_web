import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BaseUrl } from "../../Api/baseUrl";

function FilterCategory() {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        BaseUrl
            .get('/api/category')
            .then((res) => {
                setCategorias(res.data);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostar a categoria: ' + err);
            });
    }, []);

    const MapCategorias = categorias.map((categoria) => {
        return (
            <div className="home-slider-categorias_box" key={categoria.id}>
                <Link to={`/category/${categoria.id}`}>{categoria.name}</Link>
            </div>
        );
    })

    /* Components dos slider */
    const settingsCategory = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    return (
        <div className="home-slider-categorias_container slider">
            <h2>Filtrar por categoria</h2>
            <Slider {...settingsCategory}>
                {MapCategorias}
            </Slider>
        </div>
    );
}

export default FilterCategory;