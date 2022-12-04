import React from "react"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { createTicket, getTicket } from '../../assets/firebase';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import "./Checkout.css"

const Checkout = () => {
    const [mail, setMail] = useState('')
    const [mail2, setMail2] = useState('')

    let navigate = useNavigate()
    
    const {emptyCart, totalPrice, cart} = useContext(CartContext)

    const formInput = React.useRef()

    const consultForm = (e) =>{
        e.preventDefault()

        const dateInput = new FormData(formInput.current)
        const valueInput = Object.fromEntries(dateInput)

        createTicket(valueInput, totalPrice(), new Date().toLocaleString()).then(data => 
            getTicket(data.id).then(order => {

                const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
                toast.promise(
    
                    resolveAfter3Sec, {
                        pending: 'Procesando compra...',
                        success: `Felicitaciones su compra ha sido realizada con exito! 👌
                        Número de orden: ${order.id}`,
                    })

                  emptyCart()
                  e.target.reset()
                  navigate('/')
            }))
    
    }

    return (
        <div className="form">
            <form onSubmit={consultForm} ref={formInput}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label" >Nombre y Apellido</label>
                    <input type="text" className="form-control" name='nombre' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" name='email' onChange={(e)=>{setMail(e.target.value)}} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir correo electrónico</label>
                    <input type="email" className="form-control" name='email2'  onChange={(e)=>{setMail2(e.target.value)}} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name='dni' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tel" className="form-label">Teléfono</label>
                    <input type="number" className="form-control" name='tel' required/>
                </div>
        
                {
                 mail === mail2 && cart.length > 0 ?

                 <div className="btn-finalizar-compra">
                     <button type="submit" className="btn btn-outline-success" >Finalizar Compra</button>
                     <span>*Todos los campos son obligatorios</span>
                 </div>
                 :
                 <div className="btn-finalizar-compra">
                    
                     <button type="submit" className="btn btn-outline-success" disabled >Finalizar Compra</button>
                     <span>No es posible finalizar compra por que no hay productos en el carrito o los emails no coinciden!</span>
                     
                 </div>
                 
                }    
                
            </form>
        </div>
    );
}

export default Checkout;