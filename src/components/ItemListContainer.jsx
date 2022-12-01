//la linea de abajo sirve para verificar errores en el codigo
// @ts-check 

import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {

  const { idcateg } = useParams(); //tomamos el parametro de la ruta para compararlo con el array de prod
 
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    let productos;
    if (idcateg) {
      productos = query(collection(db, 'Productos'), where('categ', '==', idcateg));
    } else {
      productos = collection(db, 'Productos');
    }

    getDocs(productos).then((res) => {
     

      const arrayNorm = res.docs.map((element) => ({ id: element.id, ...element.data() }))
      setProductos(arrayNorm);
      });

    }, [idcateg]);
   
  return (
    <>
<ItemList productos={productos}/> 
    </>
        )


}

export default ItemListContainer