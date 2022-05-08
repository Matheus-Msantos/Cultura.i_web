import React from "react";
import { Link } from "react-router-dom";

function Minicart({ active }) {
    return (
        <>

            <div className={`minicart-container ${active && 'is--active'}`}>
                <div className="minicart-header">
                    <h2>Meu carrinho</h2>

                    <div className="minicart-produto">
                        <div className="minicart-produto_box">
                            <img src="/image/img-anunciante.png" />
                            <div className="minicart-produto-box_info">
                                <button className="minicart-produto-remover"><i class="fa-solid fa-trash"></i></button>
                                <span className="minicart-produto-box_nome">Show de Mágica Infantil </span>
                                <span className="minicart-produto-box_text">12/12/2012 - 15:00</span>
                                <span className="minicart-produto-box_text">Teatro Bibi Ferreira - SP</span>

                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>+5</option>
                                </select>
                            </div>
                        </div>

                        <div className="minicart-produto_box">
                            <img src="/image/img-anunciante.png" />
                            <div className="minicart-produto-box_info">
                                <button className="minicart-produto-remover"><i class="fa-solid fa-trash"></i></button>
                                <span className="minicart-produto-box_nome">Show de Mágica Infantil </span>
                                <span className="minicart-produto-box_text">12/12/2012 - 15:00</span>
                                <span className="minicart-produto-box_text">Teatro Bibi Ferreira - SP</span>

                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>+5</option>
                                </select>
                            </div>
                        </div>

                        <div className="minicart-produto_box">
                            <img src="/image/img-anunciante.png" />
                            <div className="minicart-produto-box_info">
                                <button className="minicart-produto-remover"><i class="fa-solid fa-trash"></i></button>
                                <span className="minicart-produto-box_nome">Show de Mágica Infantil </span>
                                <span className="minicart-produto-box_text">12/12/2012 - 15:00</span>
                                <span className="minicart-produto-box_text">Teatro Bibi Ferreira - SP</span>

                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>+5</option>
                                </select>
                            </div>
                        </div>

                        <div className="minicart-produto_box">
                            <img src="/image/img-anunciante.png" />
                            <div className="minicart-produto-box_info">
                                <button className="minicart-produto-remover"><i class="fa-solid fa-trash"></i></button>
                                <span className="minicart-produto-box_nome">Show de Mágica Infantil </span>
                                <span className="minicart-produto-box_text">12/12/2012 - 15:00</span>
                                <span className="minicart-produto-box_text">Teatro Bibi Ferreira - SP</span>

                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>+5</option>
                                </select>
                            </div>
                        </div>

                        <div className="minicart-produto_box">
                            <img src="/image/img-anunciante.png" />
                            <div className="minicart-produto-box_info">
                                <button className="minicart-produto-remover"><i class="fa-solid fa-trash"></i></button>
                                <span className="minicart-produto-box_nome">Show de Mágica Infantil </span>
                                <span className="minicart-produto-box_text">12/12/2012 - 15:00</span>
                                <span className="minicart-produto-box_text">Teatro Bibi Ferreira - SP</span>

                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>+5</option>
                                </select>
                            </div>
                        </div>

                        <div className="minicart-produto_box">
                            <img src="/image/img-anunciante.png" />
                            <div className="minicart-produto-box_info">
                                <button className="minicart-produto-remover"><i class="fa-solid fa-trash"></i></button>
                                <span className="minicart-produto-box_nome">Show de Mágica Infantil </span>
                                <span className="minicart-produto-box_text">12/12/2012 - 15:00</span>
                                <span className="minicart-produto-box_text">Teatro Bibi Ferreira - SP</span>

                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>+5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="minicart-footer">
                    <div className="minicart-footer-subTotal_container">
                        <span>Subtotal</span> <span>R$ 0,00</span>
                    </div>
                    <div className="minicart-footer-total_container">
                        <span>Total</span> <span>R$ 0,00</span>
                    </div>

                    <Link to="/" className="minicart-footer_button">Finalizar compra</Link>
                </div>
            </div>
        </>
    );
}

export default Minicart;