import React, { useContext, useEffect } from "react";
import { AuthContext, UserArray } from "../../Auth";
import { BaseUrl } from "../baseUrl";

function UpdateUser() {
    const token = useContext(AuthContext)
    const user = useContext(UserArray)

    const handleUpdateUser = () => {
        const body = {
            name: 'Caio Serra'
        }
        BaseUrl.defaults.headers.authorization = `Bearer ${token}`
        BaseUrl
            .put(`/api/user/${user[0].id}`, body)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao atualizar o usuário logado: ' + err);
            })
    }

    return (
        <>
            <button onClick={() => handleUpdateUser()}>atualizar Usuario</button>
        </>
    );
}

export default UpdateUser