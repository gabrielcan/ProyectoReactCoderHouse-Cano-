import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import React,{useState,useEffect} from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {

const { iditem } = useParams(); //tomamos el parametro de la ruta para compararlo con el array de prod
 
  const [producto, setProducto] = useState({});
  
  useEffect(() => {
    const db = getFirestore();

    let docSinNorm = doc(db, 'Productos', iditem);

    getDoc(docSinNorm).then((item) => {
      setProducto({ id: item.id, ...item.data() });
    });
  }, [iditem]);

  return (
    
<ItemDetail producto={producto}/>

    
    )
}

export default ItemDetailContainer