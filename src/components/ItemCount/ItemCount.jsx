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
         <button className="btn btn-light btn-agregarCarrito" onClick={addCart}><img className="" src="https://firebasestorage.googleapis.com/v0/b/react-js-33f86.appspot.com/o/agregar-carrito.png?alt=media&token=26269ce5-1995-411d-a2f5-45fb800f877f" /></button>  
         </div>
       
         </>
        
    );
}

export default Counter;
