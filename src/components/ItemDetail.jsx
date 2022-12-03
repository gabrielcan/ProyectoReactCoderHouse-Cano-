import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount'
import './itemDetail.css'
import React, { useContext, useEffect, useState } from 'react';
import {contextoGeneral} from './CartContext' 
import { RotatingTriangles } from 'react-loader-spinner'




const ItemDetail = ({producto}) => {
  const {carrito, addItem, removeItem, clear} = useContext(contextoGeneral)


return (
 <>
      { producto.id?(

      <Card key={producto.id} className='itemDetail__cont'>
      <Card.Img variant="top" src={producto.pictureUrl} className='itemDetail__img' />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          {producto.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush itemDetail__inforView">
        <ListGroup.Item className='itemDetail__items'>STOCK {producto.stock}</ListGroup.Item>
        <ListGroup.Item className='itemDetail__items'>PRECIO ${producto.price}</ListGroup.Item>
       { <ItemCount producto={producto}/>}
      </ListGroup>
     
    </Card>
        ):(
          <div className='itemDetail__loading'>

          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
            colors={['#8c9a88', '#d1e2de', '#414649']}
            />
          </div>)
      }
  
      </>
      )
}

export default ItemDetail