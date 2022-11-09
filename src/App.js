/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer';
import GifNavegacion from './components/GifNavegacion'


function App() {

  
/* Realizamos una funcion Asincronica para traer los productos a travez del Json con ruta relativa*/





  return (
<BrowserRouter>

 <NavBar/>
 <Routes>
  <Route path='/' element={ <ItemListContainer/>}/>
  <Route path='/checkout' element={ <Checkout/>}/>
  <Route path='/contacto' element={ <Contacto/>}/>
  <Route path='/gif' element={<GifNavegacion/>}/>
  <Route path='/category/:idcateg' element={ <ItemListContainer/>}/>
  <Route path='/item/:iditem' element={ <ItemDetailContainer/>}/>
  
 </Routes>

</BrowserRouter>

 
  );
}

export default App;
