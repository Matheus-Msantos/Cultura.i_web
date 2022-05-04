import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function LoginBox({ box }) {

    const handleLogout = () => {
        localStorage.removeItem("User");
        localStorage.removeItem("Token");
        window.location.reload();
    }

    useEffect(() => { }, [])

    return (
        <div className={`login-box_container ${box && 'is--active'}`}>
            <Link to="/profile">Minha conta</Link>
            <Link to="/order ">Meus pedidos</Link>
            <Link to="/order ">Área administrativa</Link>
            <button className="login-box-button_logout" onClick={handleLogout}>Sair <i class="fa-solid fa-right-from-bracket"></i></button>
        </div>
    );

}

export default LoginBox;