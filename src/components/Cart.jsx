import React, {useContext } from 'react';
import {contextoGeneral} from './ContextContainer' //importo el contexto 
import { Link } from 'react-router-dom';

const Cart = () => {

const {carrito,removeItem,totalPagar,totalCount} = useContext(contextoGeneral)
  
  return (
   <> 
{
  carrito.map((item) => (
<>
<div>
{`${item.title} Cantidad:${item.cantidad} Precio: ${item.price} subtotal:${item.cantidad*item.price}`}
 <span onClick={()=> removeItem(item.id)} > BORRAR </span>
 <Link to="/checkout"> Terminar Compra </Link> 
</div>


</>


))}

    <div>
    tienes en el Carro: {totalCount} total a pagar {totalPagar}
    </div>
  
    
    </>
  )

}

export default Cart