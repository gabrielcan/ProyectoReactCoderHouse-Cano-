import React,{useContext} from 'react'
import icono from '../IconoCarrito.svg'
import './navBar.css'
import './carWidget.css'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import {contextoGeneral} from './CartContext' //importo el contexto 

const CarWidget = () => {
  const {carrito,totalCount} = useContext(contextoGeneral)

  return (
  <>
   <Link to={'/cart'} className='iconCarr__cont'> <img className='IconCarrito' src={icono}></img><Badge bg="danger" className={carrito.length==0?'inconCarr__vacio':'iconCarr__burbuja'}>{totalCount} </Badge></Link>
   </>  
  )

}

export default CarWidget