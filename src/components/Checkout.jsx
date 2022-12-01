import React, { useState, useContext } from 'react';
import {contextoGeneral} from './ContextContainer' //importo el contexto 
import {addDoc,collection,getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom';


const Checkout = () => {
const {carrito, totalPagar,clear} = useContext(contextoGeneral)
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [tel,setTel]=useState("");
const [orderId,setOrderId]=useState("")

function ctrlForm(){
const order={
  buyer:{name,tel,email},
  totalPagar,
  carrito,
};

const db=getFirestore();
const orders= collection(db,"orders");
addDoc(orders,order).then(({id})=>{setOrderId(id)})
clear()

}

if(carrito.length==0){
  return(<> <h1>NO HAY NADA PARA PAGAR </h1> <Link to="/">volver a la lista de Productos </Link></>)
} 

  return (
    <>
    {orderId?`GRACIAS POR TU COMPRA. EL ID DE TU COMPRA ES ${orderId}`:(


    <div key={carrito.id}>
      <h1>TERMINAR COMPRA</h1>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Nombre"/>
      <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="correo electronico"/>
      <input type="tel" onChange={(e)=>{setTel(e.target.value)}} placeholder="telefono"/>

      <button onClick={ctrlForm}>TERMINAR COMPRA</button>
      
    </div>

    )}
    </>
  )
}

export default Checkout