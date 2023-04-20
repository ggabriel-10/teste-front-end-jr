import './footer.css';
import News from './img/Footer/news.png';
function Footer() {
  return (
    <footer>
      <div className="footer-sobre-nos">
        <h3>SOBRE NOS</h3>
        <ul>
            <li>CONHEÇA</li>
            <li>COMO COMPRAR</li>
            <li>INDICAÇÃO E DESCONTO</li>
        </ul>
      </div>

      <div className="footer-informacoes">
        <h3>INFORMAÇÕES UTEIS</h3>
        <ul>
            <li>FALE CONOSCO</li>
            <li>DÚVIDAS</li>
            <li>PRAZOS DE ENTREGA</li>
            <li>FORMAS DE PAGAMENTO</li>
            <li>POLITICA DE PRIVACIDADE</li>
            <li>TROCAS E DEVOLUÇÕES</li>
        </ul>
      </div>
      <div className="footer-news">
        <img src={News} alt="new" className='footer-news-img'/>
      </div>
    </footer>
  );
}
export default Footer;