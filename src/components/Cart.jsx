import React, {useContext } from 'react';
import {contextoGeneral} from './CartContext' //importo el contexto 
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './cart.css'
import { Button } from 'react-bootstrap';


const Cart = () => {

const {carrito,removeItem,totalPagar,clear} = useContext(contextoGeneral)
  
  return (
   <> 
   <div className='cart__cont'>
<Table striped bordered hover size="sm" className='cartTable__cont'>
      <thead>
        <tr>
          <th>#</th>
          <th>NOMBRE</th>
          <th>CANTIDAD</th>
          <th>PRECIO</th>
          <th>SUBTOTAL</th>
          <th colSpan={2}>ACCIONES</th>
          
          
        </tr>
      </thead>
{
  carrito.map((item,pos) => (

      <tbody>
      
        <tr>
          <td>{pos+1}</td>
          <td>{item.title}</td>
          <td>{item.cantidad}</td>
          <td>{item.price}</td>
          <td>{item.cantidad*item.price}</td>
          <td><Button onClick={()=> removeItem(item.id)}>Borrar producto</Button> </td>
        </tr>
      </tbody>
))//FIN DEL MAP
} 

</Table>

<Table striped bordered hover size="sm" className='cartTable__cont'>
      <thead>
        <tr>
          <th colSpan={2} >TOTAL A PAGAR</th>
          </tr>
          <tr>
            <td>${totalPagar}</td>
          </tr>
        
      </thead>
</Table>

<div className='cart__buttonCont'>
<Button className={carrito.length==0?'cart__buttonFalse':'cart__button'}> <Link to='/checkout' className='cart__link'>Finalizar Compra</Link> </Button>
<Button onClick={clear} className={carrito.length==0?'cart__buttonFalse':'cart__button'}> Cancelar Compra </Button>
</div>


</div> 
  
    
    </>
  )

}

export default Cart