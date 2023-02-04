import React, { Component } from 'react'
import { Button, FormControl, Nav, Container, Navbar, Form } from 'react-bootstrap'
import logo from './logo192.png'

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand href='/'>
              <img 
              src={logo}
              height='30'
              width='30'
              className='d-inline-block align-top'
              alt='logo'
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-between'>
              <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link href='/contacts'>Contacts</Nav.Link>
                <Nav.Link href='/blog'>Blog</Nav.Link>
              </Nav>
              <Form className='d-flex gap-2'>
                <FormControl 
                  type='text'
                  placeholder='Search'
                  className='mr-sm-2'
                />
                <Button variant='outline-info'>Search</Button>
              </Form>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
