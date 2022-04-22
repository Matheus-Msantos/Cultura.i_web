import React, { useState, useEffect, useContext } from "react";
import { AuthContext, UserArray } from "../../Auth";
import { BaseUrl } from "../baseUrl";



function PostProduct() {
    const token = useContext(AuthContext);
    const user = useContext(UserArray);

    if (user) {
        const body = {
            name: 'a',
            description: 'a',
            time: 'a',
            date: 'a',
            classification: 'a',
            category_id: 1,
            address_id: 1,
            price: 1,
            user_id: user[0].id
        }

        const handlePost = () => {
            BaseUrl
                .post('/api/product', body)
                .then((res) => console.log(res.data))
                .catch((err) => {
                    console.error('Ops! ocorreu um erro' + err);
                })
        }

        return (
            <>
                <button onClick={() => handlePost()}>Cadastrar</button>

            </>
        );
    }



}

export default PostProduct;