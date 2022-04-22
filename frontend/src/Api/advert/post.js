import React, { useState, useEffect, useContext } from "react";
import { AuthContext, UserArray } from "../../Auth";
import { BaseUrl } from "../baseUrl";

function PostAdvert() {
    const token = useContext(AuthContext);
    const user = useContext(UserArray);
    if (user) {

        const body = {

        }

        const handlePost = () => {
            BaseUrl.defaults.headers.authorization = `Bearer ${token}`
            BaseUrl
                .post('/api/advert', body)
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log('Ops! Ocorreu um erro ao cadastrar o anuncio: ' + err);
                });
        }

        return (
            <button onClick={() => handlePost()}>Cadastrar</button>
        );
    }
}

export default PostAdvert;