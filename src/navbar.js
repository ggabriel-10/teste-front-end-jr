    import './navbar.css';
import Group from './img/Group 35.png';
import Compra from './img/Header/compra-segura.png';
import FreteGratis from './img/Header/frete-gratis.png';
import ParcelaCompra from './img/Header/parcelar-compra.png';
import Coracao from './img/Heart.png';
import Loja from './img/Group.png';
import Usuario from './img/UserCircle.png';
import Carrinho from './img/ShoppingCart.png';


function Navbar() {
    return (
        <header>
            <div className="header-top">
                <img src={Compra} alt="Compra" />
                <img src={FreteGratis} alt="Frete" />
                <img src={ParcelaCompra} alt="Teste"/>
            </div>

            <div className="header-icon">
                <img src={Group} alt="logo" />
                <input type="text" placeholder="O que você está buscando?"/>
                <div className='header-icons'>
                    <img src={Loja} alt="loja" />
                    <img src={Coracao} alt="coracao" />
                    <img src={Usuario} alt="usuario" />
                    <img src={Carrinho} alt="carrinho" />

                </div>
            </div>

            <div className="header-bottom">
                <ul>
                    <li>TODAS CATEGORIAS</li>
                    <li>SUPERMERCADO</li>
                    <li>LIVROS</li>
                    <li>MODA</li>
                    <li>LANÇAMENTOS</li>
                    <li className='header-bottom-destaque'>OFERTAS DO DIA</li>
                    <li>ASSINATURA</li>
                </ul>
            </div>
            <div className='header-banner'>
                <h1>Venha conhecer nossas promoções</h1>
                <h3>50% Off nos produtos</h3>

                <input type="button" value="Comprar agora" />
            </div>
        </header>
    )
}
export default Navbar;