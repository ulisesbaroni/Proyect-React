import './app.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Context
import { CartContextProvider } from '../context/CartContext';

//Componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout'
import Error404 from './Error-404/Error-404';
import { ToastContainer } from 'react-toastify';



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
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element={<Error404/>}/>
        </Routes>
        <ToastContainer/>
    </CartContextProvider>

    </BrowserRouter>
        
        </>

    );
}

export default App;

