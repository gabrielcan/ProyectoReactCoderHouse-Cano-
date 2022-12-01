import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './item.css'



const Item = ({producto}) => {


        return(
         
    <div key={producto.id}>
      <Card className='card__cont'>
           
      <Card.Img variant="top" src={producto.pictureUrl} className='card__img'/>
      <Link to={"/item/"+producto.id} className="card__linkItem">
      <Card.Body className='card__cuerpo'>
        <Card.Title className='card__title'>{producto.title}</Card.Title>
      
      </Card.Body>
      </Link> 
      <div className='card__precio'> <h3>PRECIO</h3> <h3> ${producto.price}</h3></div>
      
    </Card>
    </div>
                   )
          }

export default Item