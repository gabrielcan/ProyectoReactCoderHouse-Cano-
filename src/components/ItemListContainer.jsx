
import ItemList from './ItemList'
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import ProductosJson from '../productos.json'


const ItemListContainer = ({greeting}) => {

  const { idcateg } = useParams(); //tomamos el parametro de la ruta para compararlo con el array de prod
 
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(ProductosJson);
      }, 2000);
    });

    productosPromise.then((res) => {
      if (idcateg) {
        setProductos(res.filter((item) => item.categ == idcateg));
      } else {
        setProductos(res);
      }
    });
  }, [idcateg]);
   
  return (
    <>

{/* <ItemCount stock={5} initial={1}/> */}
<ItemList productos={productos}/> 

    </>
        )


}

export default ItemListContainer