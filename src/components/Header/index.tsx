import { Link, NavLink } from 'react-router-dom';
import homeIcon from '../../assets/home.svg';
import "./styles.css";

export default function Header() {
    return (
        <header>
            <div className='header-content-container container'>
                <div className="navbar">
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'}
                    >
                        Início
                    </NavLink>
                    <NavLink to="/products"
                        className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'}
                    >
                        Produtos
                    </NavLink>
                    <NavLink to="/about"
                        className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'}
                    >
                        Sobre nós
                    </NavLink>
                </div>
                <div>
                    <Link to="/" ><img src={homeIcon} alt="Voltar para página inicial" /></Link>
                </div>
            </div>
        </header>
    );
}