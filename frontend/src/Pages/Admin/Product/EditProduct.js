import React from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "../../../components/MenuAdmin";

function AdminEditProductPage() {
    return (
        <div className="admin-container">
            <MenuAdmin active_01={"is--active"} />

            <div className="admin-content_container">
                <Link to="/admin" className="admin-content-button_add"><i className="fa-solid fa-left"></i> Voltar</Link>

                <h2>Atualizar Evento</h2>

                <form>
                    <input type="text" className="admin-input admin-input-medium" placeholder="Nome do evento" />
                    <input type="date" className="admin-input admin-input-small" placeholder="Data" />
                    <input type="text" className="admin-input admin-input-small" placeholder="Hora" />
                    <input type="number" className="admin-input admin-input-small" placeholder="Valor do evento" />
                    <input type="text" className="admin-input admin-input-big" placeholder="Classificação do evento" />
                    <select className="admin-input admin-input-medium">
                        <option>Selecione uma categoria</option>
                        <option>A</option>
                        <option>b</option>
                    </select>

                    <select className="admin-input admin-input-medium">
                        <option>Selecione um enderelo</option>
                        <option>A</option>
                        <option>b</option>
                    </select>
                    <textarea className="admin-input admin-input-big " placeholder="Descrição do evento"></textarea>
                    <input type="file" className="admin-input admin-input-medium input-file" />

                    <div className="admin-form-button_conatiner">
                        <Link to="/admin">Cancelar</Link>
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminEditProductPage;