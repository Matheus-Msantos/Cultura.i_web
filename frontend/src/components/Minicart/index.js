import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../Api/baseUrl";
import { UserContext } from "../../Auth";



function Minicart({ active }) {

    const [minicart, setMinicart] = useState([]);

    /* Contexto do Usuário */
    const { currentUser } = useContext(UserContext);
    const { setItemCount } = useContext(UserContext);
    /* Guardando Token */
    const token = currentUser?.token;
    /* Passando Token no header para API */
    BaseUrl.defaults.headers.authorization = `Bearer ${token}`;

    const cart = () => {
        BaseUrl
            .get('/api/cart')
            .then((res) => { return setMinicart([res.data]) })
            .catch((err) => console.log('Ops! Ocorreu um erro ao mostrar o carrinho: ' + err))
    }

    setItemCount(minicart[0]?.length);

    /* Chamada da API para add 1 item no carrinho */
    const handleCartAdd = (id) => {
        BaseUrl
            .get(`/api/cart/add/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log('Ops! Ocorreu um erro ao adicionar o produto no carrinho: ' + err))
    }
    /* Chamada da API remover add 1 item no carrinho */
    const handleCartRemove = (id) => {
        BaseUrl
            .get(`/api/cart/remove/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log('Ops! Ocorreu um erro ao remover o produto no carrinho: ' + err))
    }

    const MapItem = minicart[0]?.map((item) => {
        const price = [item.quantity * item.product.price];
        return (
            <div className="minicart-produto_box" key={item.id}>
                <img src={item?.product?.image} />
                <div className="minicart-produto-box_info">
                    <span className="minicart-produto-box_nome">{item?.product?.name}</span>
                    <span className="minicart-produto-box_text">{item?.product?.date} - {item?.product?.time}</span>
                    <span className="minicart-produto-box_text price"> R$ {price}</span>

                    <div className="minicart-quantity">
                        <button className="minicart-quantity-menos" onClick={() => handleCartRemove(item.product.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button className="minicart-quantity-mais" onClick={() => handleCartAdd(item.product.id)}>+</button>
                    </div>
                </div>
            </div>
        );
    });


    useEffect(() => {
        cart();
    }, []);

    return (
        <>

            <div className={`minicart-container ${active && 'is--active'}`}>
                <div className="minicart-header">
                    <h2>Meu carrinho</h2>

                    <div className="minicart-produto">
                        {MapItem}
                    </div>
                </div>

                <div className="minicart-footer">
                    <Link to="/checkout" className="minicart-footer_button">Finalizar compra</Link>
                </div>
            </div>
        </>
    );
}

export default Minicart;