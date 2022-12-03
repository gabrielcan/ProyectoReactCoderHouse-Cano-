import React, { useState, useContext,useEffect } from 'react';
import {contextoGeneral} from './CartContext' //importo el contexto 
import {addDoc,collection,getFirestore} from 'firebase/firestore'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './checkout.css'
import Swal from 'sweetalert2'






const Checkout = () => {
const {carrito, totalPagar,clear} = useContext(contextoGeneral)
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [email2,setEmail2]=useState("");

const [tel,setTel]=useState("");
const [orderId,setOrderId]=useState("")
let ctrlEmail=false;

function ctrlForm(){

if(email==email2&&email!=""&&email2!=""&&name!=""&&tel!=""){

const order={
  buyer:{name,tel,email},
  totalPagar,
  carrito,
};

const db=getFirestore();
const orders= collection(db,"orders");
addDoc(orders,order).then(({id})=>{setOrderId(id)})
setTimeout(() => {
  clear()  
}, 1000);
  

}else{
  alert('Controle los mails ingresados, deben ser iguales || NO PUEDES TENER CAMPOS VACIOS')
}
}

function alertaMsj(){
 
  Swal.fire({
    title: 'GRACIAS POR TU COMPRA',
    text:`EL ID DE TU ORDEN DE COMPRA ES ${orderId}`,
    icon: 'success',
  })

}




  return (
 <>
 {carrito.length==0&&!orderId? <div className='checkout__msj'><h1>NO TIENES NADA PARA PAGAR</h1> <Link to={'/'}>Regresa al Listado de Productos</Link></div>:
    orderId?
    <>
    {alertaMsj()}<Link to={'/'}>Continua comprando</Link>
    </>
    :(

      <div className='checkout__cont' key={carrito.id}>
       <h1>TERMINAR COMPRA</h1>
       
       <form className='checkout__cont_form'>
<fieldset className='checkout__cont_form'>
<input type={'text'} placeholder='Ingresar Nombre' className='checkout__input' onChange={(e)=>{setName(e.target.value)}} required/>
<input type={'tel'} placeholder='Ingresar telefono' className='checkout__input' onChange={(e)=>{setTel(e.target.value)}} required/>
<input type={'email'} placeholder='Ingresar mail' className='checkout__input'  onChange={(e)=>{setEmail(e.target.value)}} required/>
<input type={'email'} placeholder='Confirmar mail' className='checkout__input' onChange={(e)=>{setEmail2(e.target.value)}} required/>

</fieldset>

       </form>
        
        <Button variant="primary" onClick={ctrlForm}>TERMINAR COMPRA</Button>



      </div>


      )
      

      }
    </> 


  )


} //fin del componente

export default Checkout