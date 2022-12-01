import React, { useState, createContext } from 'react';
import { useEffect } from 'react';


export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {

  const [carrito, setCarrito] = useState([]);
  const [totalPagar,setTotalPagar]= useState([])
  const [totalCount,setTotalCount]= useState([])


  function posInCart(id) {
    const pos = carrito.findIndex((item) => item.id == id);
    return pos;
  }

  function addItem(item, cantidad) {

    const pos = posInCart(item.id);
    if (pos) {

setCarrito([...carrito, { ...item,cantidad,stock:item.stock-cantidad }]);

} else {
        
        const carritoAux = [...carrito];
        carritoAux[pos] = { ...carritoAux[pos], cantidad: carritoAux[pos].stock + cantidad };
        setCarrito(carritoAux);
        
      }
  }

  function removeItem(id) {
    setCarrito(carrito.filter((product) => product.id !== id));
  }
  function clear() {
    setCarrito([]);
  }

  useEffect(()=>{
  setTotalCount(carrito.reduce((acc,item)=>acc+item.cantidad,0))
  setTotalPagar(carrito.reduce((acc,item)=> acc+item.cantidad*item.price,0));
},[carrito])


  return <contextoGeneral.Provider value={{ carrito, addItem, removeItem, clear,totalPagar,totalCount }}>{children}</contextoGeneral.Provider>;
}
