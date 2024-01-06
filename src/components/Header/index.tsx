import homeIcon from '../../assets/home.svg';
import "./styles.css";

export default function Header() {
    return (
        <header>
            <div className='header-content-container container'>
                <div className="navbar">
                    <div className='menu-item'>Início</div>
                    <div className='menu-item'>Produtos</div>
                    <div className='menu-item'>Sobre nós </div>
                </div>
                <div>
                    <img src={homeIcon} alt="Voltar para página inicial" />
                </div>
            </div>
        </header>
    );
}