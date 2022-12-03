import { Button } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import './contador.css'
import {contextoGeneral} from './CartContext' //importo el contexto 
import { Link } from 'react-router-dom';

export default function ItemCount({producto}) {

  const {carrito, addItem, removeItem, clear} = useContext(contextoGeneral)
  
  const [count, setCount] = useState(1);
  const [removeButton,setRemoveButton]=useState(false)


  function restar() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  function sumar() {
    if (count < producto.stock) {
     
      setCount(count + 1);
    }
  }

  function onAdd(){
    addItem(producto,count)
    setRemoveButton(true)
  }

        
  return (
    
    <>
    <div className='contador__Cont'>
      
        <Button variant="primary" className='contador__Button' onClick={sumar}>+</Button>
        <div className='contador__Valor' id='contador__print'> {count} </div>

        <Button variant="primary"className='contador__Button' onClick={restar}>-</Button>

    </div>
        <div className='ContAddCarrito'>
       {removeButton?(<>"Producto Agregado..." 
       <Link to="/"> Seguir comprando </Link>  
       <Link to="/checkout"> Terminar Compra </Link> 
       </>):(<Button variant="primary" className="contador__AddCarrito" onClick={() => onAdd(count)}>Agregar Carrito</Button>)}
        </div>
    </>
  )
}

