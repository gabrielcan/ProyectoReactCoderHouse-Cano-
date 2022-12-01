import React,{useContext} from 'react'
import icono from '../IconoCarrito.svg'
import './navBar.css'
import './carWidget.css'
import { Link } from 'react-router-dom';
import {contextoGeneral} from './ContextContainer' //importo el contexto 

const CarWidget = () => {
  const {carrito} = useContext(contextoGeneral)

  return (
  <>
   <Link to={'/cart'} className='iconCarr__cont'> <img className='IconCarrito' src={icono}></img><div className='iconCarr__burbuja'>{carrito.length}</div></Link>
   </>  
  )

}

export default CarWidget