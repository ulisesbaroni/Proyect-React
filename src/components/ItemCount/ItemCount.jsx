import {useState} from 'react';

const Counter = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1)

    const addCart = () => {
        onAdd(counter)
    }

    const incrementar = () => counter < stock && setCounter(counter + 1)

    const decrementar = () => counter > 1 && setCounter(counter - 1)
    
    return (
        <>
        <div className="counter">
         <button onClick={decrementar} className='btn btn-outline-dark less'>-</button>   
         {counter}
         <button onClick={incrementar} className='btn btn-outline-dark plus'>+</button> 
         <button className="btn btn-light btn-agregarCarrito" onClick={addCart}><img className="" src="../img/agregar-carrito.png" alt="icono de carrito" /></button>  
         </div>
       
         </>
        
    );
}

export default Counter;
