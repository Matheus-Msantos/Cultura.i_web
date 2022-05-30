import React from "react";
import { Link } from "react-router-dom";


function CheckoutLayout({ children }) {

    return (
        <>
            <header className="checkoutLayout-header_container">
                <div className="checkoutLayout-header_flex">
                   <Link to="/"><i className="fa-solid fa-arrow-left"></i>Continuar comprando</Link>
                   <h2>Cultura.í</h2>
                   <span><i className="fa-solid fa-lock"></i>Compra 100% segura</span>
                </div>
            </header>

            <section className="checkoutLayout-section-main">
                {children}
            </section>

            <footer className="layout-footer_container">
                <p>Cultura.í&reg;  2022</p>
            </footer>
        </>
    );
}

export default CheckoutLayout;