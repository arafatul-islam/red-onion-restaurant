import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from './../images/logo2.png'
import { FaCartArrowDown } from 'react-icons/fa'

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='white'
        variant='light'
        sticky='top'
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={Logo}
              width='150px'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            varient='white'
          />
          <Navbar.Collapse
            variant='dark'
            id='responsive-navbar-nav '
            className=' justify-content-end text-dark '
          >
            <Nav className=' col-lg-4  col-12  d-lg-flex   justify-content-between'>
              <Nav.Link as={Link} to='cart' className='text-center'>
                <FaCartArrowDown size={30} color='black' />
              </Nav.Link>
              <Nav.Link as={Link} to='login' className='text-center '>
                Login
              </Nav.Link>
              <Button variant='danger' size='lg' className='rounded-pill'>
                <Link
                  to='register'
                  className='text-white text-decoration-none  '
                >
                  Sign up
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
