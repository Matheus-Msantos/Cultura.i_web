import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Auth";
import { BaseUrl } from "../baseUrl";

function UserAuth() {
    const token = useContext(AuthContext)


    useEffect(() => {
        BaseUrl.defaults.headers.authorization = `Bearer ${token}`
        BaseUrl
            .get('/api/user/show')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log('Ops! Ocorreu um erro ao mostar o usuário logado: ' + err);
            })
    })
}

export default UserAuth