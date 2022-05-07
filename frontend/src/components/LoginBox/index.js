import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../Auth';

function LoginBox({ box }) {

    /* Contexto do usuário */
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);


    /* Função de sair da conta */
    const handleLogout = () => {
        /* Remover dados do localStorage */
        localStorage.removeItem("User");
        /* Atualiza a página */
        window.location.reload();
    }

    useEffect(() => { }, [])

    return (
        <div className={`login-box_container ${box && 'is--active'}`}>
            <Link to="/profile">Minha conta</Link>
            <Link to="/order ">Meus pedidos</Link>
            {currentUser?.user?.is_Admin !== 0 || currentUser?.user?.is_Advertiser !== 0 || currentUser?.user?.is_Producer !== 0 ?
                /* Verificação se possui credenciais administrativas */
                <Link to="/order ">Área administrativa</Link>
                : ''
            }
            <button className="login-box-button_logout" onClick={handleLogout}>Sair <i className="fa-solid fa-right-from-bracket"></i></button>
        </div>
    );

}

export default LoginBox;