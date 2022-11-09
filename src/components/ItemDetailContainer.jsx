import { useParams } from "react-router-dom";
import React from 'react';


const ItemDetailContainer = () => {
const {iditem} = useParams();

  return (
    <div>
<h1>estoy en ItemDetailContainer </h1>
</div>)
}

export default ItemDetailContainer