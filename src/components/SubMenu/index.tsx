import { NavLink } from "react-router-dom"
import "./styles.css";

export default function SubMenu() {
    return (
        <>
            <div className="dflex">
                <div className="container sub-menu-container mt20">
                    <NavLink to="computers"
                        className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}
                    >
                        Computadores
                    </NavLink>
                    <NavLink to="electronics"
                        className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}
                    >
                        Eletrônicos
                    </NavLink>
                    <NavLink to="books"
                        className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}
                    >
                        Livros
                    </NavLink>
                </div>
            </div>
        </>
    );
}