import React, { useEffect, useState } from "react";
import { BaseUrl } from "../baseUrl";

function Login() {

    const body = {
        email: "caio@email.com",
        password: "123456789"
    }

    /* Token está sendo amarzenado no localStorage*/

    const handleLogin = () => {
        BaseUrl
            .post('/api/login', body)
            .then((res) => {
                console.log(res.data);

                const user = [res.data]
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('User', JSON.stringify(user))
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao entrar na conta');
            })
    }


    return (
        <>
            <button onClick={() => handleLogin()}>entrar</button>
        </>
    );
}

export default Login;