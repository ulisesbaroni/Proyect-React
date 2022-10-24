import {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(1)

    const modifContador = (operacion) => {
        if(operacion === '+') {
            if(contador < 10)
            setContador(contador + 1)
        }else {
            if(contador > 1)
            setContador(contador - 1)
        }
    }
    return (
        <>
         <button onClick={() => modifContador('+')} className='btn btn-dark'>+</button>   
         {contador}
         <button onClick={() => modifContador('-')} className='btn btn-light'>-</button>   
        </>
    );
}

export default Contador;
