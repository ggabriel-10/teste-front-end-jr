import './footer.css';

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
        <div className='footer-news-title'>
          <h3>CADASTRE-SE E RECEBA NOSSAS <strong>NOVIDADES E PROMOÇÕES</strong></h3>
        </div>

        <div className='footer-news-description'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, provident.tempore laboriosam quis voluptate eius ad ipsa asperiores aperiam ipsam?</p>
        </div>

        <div className='footer-news-input'>
          <input className='button-input' type="text" placeholder='Digite seu e-mail'/>
          <input className='button-input-ok' type="button" value="Ok" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;