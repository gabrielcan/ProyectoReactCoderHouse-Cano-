import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './item.css'



const Item = ({productos}) => {


     
return (
    <div>
    {
        productos&&productos.map(productosJson=>{ //realizamos el map con un previo control para asegurarnos que traiga datos
        
        return(
         
        
            <Card className='card__cont' key={productosJson.id}>
           
      <Card.Img variant="top" src={productosJson.pictureUrl} className='card__img'/>
      <Link to={"/item/"+productosJson.id} className="card__linkItem">
      <Card.Body className='card__cuerpo'>
        <Card.Title className='card__title'>{productosJson.title}</Card.Title>
      
      </Card.Body>
      </Link> 
      <div className='card__precio'> <h3>PRECIO</h3> <h3> ${productosJson.price}</h3></div>
      <Button variant="primary" className='card__button'>Agregar</Button>
    </Card>
       )
        })


    }
    </div>
    )

}

export default Item