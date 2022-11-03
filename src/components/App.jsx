import './app.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

/* import Contador from './Contador/Contador'; */

const App = () => {
    return (

        <>

    <BrowserRouter>

        <Navbar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
        </Routes>

    </BrowserRouter>
        
        </>

    );
}

export default App;

