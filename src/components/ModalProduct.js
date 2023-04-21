import React from "react";
import './modalProduct.css';

export default function ModalProduct({isOpen, setModalOpen, children}) {

    if(isOpen){
        return(
            <div className="modal">

                <div className="modal-product">
                <div className="modal-product-close">
                    <button className="modal-product-buttonClose" onClick={setModalOpen}>X</button>
                </div>
                <div>
                    {children}
                </div>
                    
                </div>

            </div>
        )
    }
    return null
}