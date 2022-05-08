import React, { useState, useEffect } from "react";
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
                <a href="#">{categoria.name}</a>
            </div>
        );
    })

    /* Components dos slider */
    const settingsCategory = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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