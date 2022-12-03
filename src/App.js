/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext from './components/CartContext';
import Cart from './components/Cart';




function App() {

  
return (
    <CartContext>
<BrowserRouter>

 <NavBar/>
 <Routes>
  <Route path='/' element={ <ItemListContainer/>}/>
  <Route path='/checkout' element={ <Checkout/>}/>
  <Route path='/contacto' element={ <Contacto/>}/>
  <Route path='/cart' element={<Cart />}/>
  <Route path='/category/:idcateg' element={ <ItemListContainer/>}/>
  <Route path='/item/:iditem' element={ <ItemDetailContainer/>}/>
  
 </Routes>

</BrowserRouter>
</CartContext>
 
  );
}

export default App;
