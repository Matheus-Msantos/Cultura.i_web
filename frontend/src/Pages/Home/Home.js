import React from "react";
import Slider from "react-slick";
import './Home.scss';


function HomePage() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settingsCategory = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const settingsAdvert = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="home-slider-anuncios_container slider">
                <h2>Filtrar por categoria</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>

            <div className="home-slider-categorias_container slider">
                <Slider {...settingsCategory}>
                    <div className="home-slider-categorias_box">
                        <span>1</span>
                    </div>

                    <div className="home-slider-categorias_box">
                        <span>2</span>
                    </div>

                    <div className="home-slider-categorias_box">
                        <span>3</span>
                    </div>

                    <div className="home-slider-categorias_box">
                        <span>4</span>
                    </div>

                    <div className="home-slider-categorias_box">
                        <span>5</span>
                    </div>

                    <div className="home-slider-categorias_box">
                        <span>6</span>
                    </div>
                </Slider>
            </div>

            <div className="eventos_container">
                <h2>Eventos</h2>
                <div className="eventos_box">
                    <img src="/logo192.png" />

                    <div class="eventos-box_details">
                        <span className="eventos-box-details_name">Show de Mágica Infantil</span>
                        <span className="eventos-box-details_date">12/12/2012 - 15:00</span>
                        <address>Teatro Bibi Ferreira - SP</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>

                    <div class="eventos-box_details">
                        <span className="eventos-box-details_name">Show de Mágica Infantil</span>
                        <span className="eventos-box-details_date">12/12/2012 - 15:00</span>
                        <address>Teatro Bibi Ferreira - SP</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>

                    <div class="eventos-box_details">
                        <span className="eventos-box-details_name">Show de Mágica Infantil</span>
                        <span className="eventos-box-details_date">12/12/2012 - 15:00</span>
                        <address>Teatro Bibi Ferreira - SP</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>

                </div>
            </div>

            <div className="eventos_container">
                <h2>Próximos eventos</h2>
                <div className="eventos_box">
                    <img src="/logo192.png" />

                    <div class="eventos-box_details">
                        <span className="eventos-box-details_name">Show de Mágica Infantil</span>
                        <span className="eventos-box-details_date">12/12/2012 - 15:00</span>
                        <address>Teatro Bibi Ferreira - SP</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>

                    <div class="eventos-box_details">
                        <span className="eventos-box-details_name">Show de Mágica Infantil</span>
                        <span className="eventos-box-details_date">12/12/2012 - 15:00</span>
                        <address>Teatro Bibi Ferreira - SP</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>

                    <div class="eventos-box_details">
                        <span className="eventos-box-details_name">Show de Mágica Infantil</span>
                        <span className="eventos-box-details_date">12/12/2012 - 15:00</span>
                        <address>Teatro Bibi Ferreira - SP</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>

                </div>
            </div>

            <div classNam="home-eventos-destaque_container">
                <div className="home-eventos-destaque-details">
                    <h2>Destaque <span>do mês</span></h2>
                    <p>
                        Mês das crianças com espetáculo de mágica no Teatro Senac.
                        Mês das crianças com espetáculo de mágica no Teatro Senac.
                        Mês das crianças com espetáculo de mágica no Teatro Senac.
                    </p>
                    <a href="#">Confira</a>
                </div>

                <div className="home-eventos-destaque_img">
                    <img src="/logo192.png" />
                </div>
            </div>

            <div className="home-slider-anunciantes_container slider">
                <Slider {...settingsAdvert}>
                    <div className="home-slider-anunciantes_box">
                        <span>1</span>
                    </div>

                    <div className="home-slider-anunciantes_box">
                        <span>2</span>
                    </div>

                    <div className="home-slider-anunciantes_box">
                        <span>3</span>
                    </div>

                    <div className="home-slider-anunciantes_box">
                        <span>4</span>
                    </div>

                    <div className="home-slider-anunciantes_box">
                        <span>5</span>
                    </div>

                    <div className="home-slider-anunciantes_box">
                        <span>6</span>
                    </div>
                </Slider>
            </div>

            <div className="eventos_container bg-grey">
                <h2>Novidades</h2>
                <span>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </span>
                <div className="eventos_box">
                    <img src="/logo192.png" />

                    <div class="eventos-box_details">
                        <span className="eventos-box-details_name">Show de Mágica Infantil</span>
                        <span className="eventos-box-details_date">12/12/2012 - 15:00</span>
                        <address>Teatro Bibi Ferreira - SP</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>

                    <div class="eventos-box_details">
                        <span className="eventos-box-details_name">Show de Mágica Infantil</span>
                        <span className="eventos-box-details_date">12/12/2012 - 15:00</span>
                        <address>Teatro Bibi Ferreira - SP</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>

                    <div class="eventos-box_details">
                        <span className="eventos-box-details_name">Show de Mágica Infantil</span>
                        <span className="eventos-box-details_date">12/12/2012 - 15:00</span>
                        <address>Teatro Bibi Ferreira - SP</address>
                        <span className="eventos-box-details_icon">Icon</span>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;