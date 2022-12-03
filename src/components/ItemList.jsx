import React from 'react'
import Item from './Item';
import { RotatingTriangles } from 'react-loader-spinner'
import './itemList.css'


const ItemList = ({productos}) => {


  return (

    <div key={productos.id}>
      {!productos.length && <div className='itemDetail__loading'>

                          <RotatingTriangles
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="rotating-triangels-loading"
                            wrapperStyle={{}}
                            wrapperClass="rotating-triangels-wrapper"
                            colors={['#8c9a88', '#d1e2de', '#414649']}
                            />
                                </div>
            }
      {productos.map((item) => (
        <Item producto={item} />
      ))}
    </div>

  )
}

export default ItemList