import React from 'react'
import Item from './Item';


const ItemList = ({productos}) => {


  return (

    <div key={productos.id}>
      {!productos.length && 'Loading...'}
      {productos.map((item) => (
        <Item producto={item} />
      ))}
    </div>

  )
}

export default ItemList