import React from "react";
import { BaseUrl } from "../baseUrl";

function SingUp() {

    const body = {
        name: "Roberta",
        email: "Roberta@email.com",
        cpf_cnpj: "4444",
        password: "123456789"
        //image: 
    }

    const handleSingUp = () => {
        BaseUrl
            .post('/api/user', body)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('Token', res.data.token);
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao cadastrar um usuário: ' + err);
            })
    }

    return (
        <>
            <button onClick={() => handleSingUp()}>Cadastrar</button>
        </>
    );
}

export default SingUp;