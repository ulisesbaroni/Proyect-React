import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(1)

    const modifContador = (operacion) => {
        if(operacion === '+') {
            if(counter < 10)
            setCounter(counter + 1)
        }else {
            if(counter > 1)
            setCounter(counter - 1)
        }
    }
    return (
        <>
        <div className="counter">
         <button onClick={() => modifContador('-')} className='btn btn-outline-dark less'>-</button>   
         {counter}
         <button onClick={() => modifContador('+')} className='btn btn-outline-dark plus'>+</button>   
         </div>
         </>
        
    );
}

export default Counter;
