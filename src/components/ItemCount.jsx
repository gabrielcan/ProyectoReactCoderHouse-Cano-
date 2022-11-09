
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../components/contador.css';
import React, {useState,useEffect} from 'react'


    const ItemCount=({ stock, initial})=> {


    const [valorMostrar,setValorMostrar] = useState(initial)

    const onadd =()=>{
        return (
            valorMostrar>=stock?valorMostrar:setValorMostrar(valorMostrar+1)
            );
            
          } 

          const putOff =()=>{
            return (
                valorMostrar==0?valorMostrar:setValorMostrar(valorMostrar-1)
                );
                
              } 

          


  return (
    <div className='contador__Cont'>

        <Button variant="primary" className='contador__Button' onClick={()=>{
            onadd()

        }}>+</Button>
        <div className='contador__Valor' id='contador__print'> {valorMostrar} </div>

        <Button variant="primary"className='contador__Button' onClick={()=>{
            putOff()

        }}>-</Button>
        <Button variant="primary" className="contador__AddCarrito">Agregar Carrito</Button>
    </div>
  )
}

export default ItemCount