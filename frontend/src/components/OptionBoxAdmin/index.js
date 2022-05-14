import React from "react";
import { Link } from "react-router-dom";

function OptionBoxAdmin({ url }) {

    return (
        <div className="admin-box">
            <div className="admin-box_flex">
                <Link to={url} className="admin-box_button"><i className="fa-solid fa-pencil"></i> Editar</Link>
                <button className="admin-box_button"><i className="fa-solid fa-trash"></i> Excluir</button>
            </div>
        </div>
    );
}

export default OptionBoxAdmin;