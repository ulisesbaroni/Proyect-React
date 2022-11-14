import './app.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Context
import { CartContextProvider } from '../context/CartContext';

//Componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';


const App = () => {
    return (

        <>

    <BrowserRouter>

      <CartContextProvider>
        <Navbar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
        </Routes>
    </CartContextProvider>

    </BrowserRouter>
        
        </>

    );
}

export default App;

