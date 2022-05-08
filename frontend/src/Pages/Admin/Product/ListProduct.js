import React from "react";
import MenuAdmin from "../../../components/MenuAdmin";

import '../Admin.scss';

function AdminProductPage() {
    return (
        <div className="admin-container">
            <MenuAdmin active_01={"is--active"} />
        </div>
    );
}

export default AdminProductPage;