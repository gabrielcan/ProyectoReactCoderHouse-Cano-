import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidget from './CarWidget';
import './navBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link to={'/'} className='nav-link nav__Logo'>SHOP-G</Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
             
            <Link className='nav-link' to={'/'}>Inicio</Link>
             <Link className='nav-link' to={'/contacto'}>Contacto</Link>
             <Link className='nav-link' to={'/gif'}>Gif de Navegacion</Link>
            <NavDropdown title='Categorias Productos' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/category/herramientas'>herramientas</NavDropdown.Item>
              <NavDropdown.Item href='/category/tecnologia'>
              tecnologia
              </NavDropdown.Item>
              <NavDropdown.Item href='/category/Libreria'>Libreria</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>
               Ver Lista completa
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='ContIconCarrito'>
        <CarWidget/>
          </div>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar