import './content.css';
import {useState, useEffect} from 'react';
import ModalProduct from './ModalProduct';
import api from './api';
import Corrida from '../img/Main/corrida 1.png';
import Saude from '../img/Main/cuidados-de-saude 1.png';
import Ferramentas from '../img/Main/ferramentas 1.png';
import Moda from '../img/Main/moda 1.png';
import Eletronicos from '../img/Main/monitorar-tablet-e-smartohone 1.png';
import Mercado from '../img/Main/supermercados 1.png';
import Bebidas from '../img/Main/whiskey.png';

function Content(){
    const [products, setProducts] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        api.get('/produtos.json').then(response => {
            setProducts(response.data.products)
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const handleClick = (index) => {
        setOpenModal(true);
        // Lógica para lidar com o clique no objeto
        console.log(`Índice do objeto clicado: ${index}`);
        // Exemplo de como exibir o índice no HTML
        
      };
    return(

        <main>
            <div className="main-banner">
                <div className='main-banner-box'>
                    <div className='main-banner-icon'>
                        <img src={Eletronicos} alt="eletronicos" />
                    </div>
                    <h3>Tecnologia</h3>
                </div>

                <div className='main-banner-box'>
                    <div className='main-banner-icon'>
                        <img src={Mercado} alt="mercado" />
                    </div>
                    <h3>Supermercado</h3>
                </div>

                <div className='main-banner-box'>
                    <div className='main-banner-icon'>
                        <img src={Bebidas} alt="bebidas" />
                    </div>
                    <h3>Bebidas</h3>
                </div>

                <div className='main-banner-box'>
                    <div className='main-banner-icon'>
                        <img src={Ferramentas} alt="ferramentas" />
                    </div>
                    <h3>Ferramentas</h3>
                </div>

                <div className='main-banner-box'>
                    <div className='main-banner-icon'>
                        <img src={Saude} alt="saude" />
                    </div>
                    <h3>Saúde</h3>
                </div>

                <div className='main-banner-box'>
                    <div className='main-banner-icon'>
                        <img src={Corrida} alt="corrida" />
                    </div>
                    <h3>Esportes e Fitness</h3>
                </div>

                <div className='main-banner-box'>
                    <div className='main-banner-icon'>
                        <img src={Moda} alt="moda" />
                    </div>
                    <h3>Moda</h3>
                </div>

            </div>
            <div className='main-title'>
                <h1>Produtos Relacionados</h1>
            </div>
            <div className='main-class-product'>
                <ul>
                    <li>CELULAR</li>
                    <li>ACESSÓRIOS</li>
                    <li>TABLETS</li>
                    <li>NOTEBOOKS</li>
                    <li>TVS</li>
                    <li>VER TODOS</li>
                </ul>
            </div>
            
            <div  className='main-principal'>
                {products.map((product, index) => (
                        <div className='main-product' key={index} >
                            <div className='main-product-item'  onClick={()=> setOpenModal(true)}>
                                <img src={product.photo} alt="eletronicos" />
                                <div className='main-product-item-description'>
                                    <p className='name'>{product.productName}</p>
                                    <p className='description'>{product.descriptionShort}</p>
                                    <p className='old-price'>R${product.price + 500}</p>
                                    <p className='new-price'>R${product.price}</p>
                                    <p>Ou em 2x de R$ {product.price/2}</p>
                                    <p className='frete'>frete gratis</p>
                                </div>
                                    <input type="button" value="COMPRAR" className='button-buy' />
                            </div>
                        </div>
                ) )}
            </div>
            <ModalProduct isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                {products.map((product, index) => (
                                <div className='modal-main-product-item'  onClick={()=> setOpenModal(true)}>
                                    <img src={product.photo} alt="eletronicos" />
                                    <div className='modal-main-product-item-description'>
                                        <p className='modal-description'>{product.descriptionShort}</p>
                                        <p className='modal-new-price'>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                        <p>Ou em 2x de R$ {product.price/2}</p>
                                        <p className='modal-frete'>frete gratis</p>
                                    </div>
                                </div>
                    ) )}
            </ModalProduct>

    
    </main>
    );
}
export default Content;