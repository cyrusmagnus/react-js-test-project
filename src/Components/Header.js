import React, { Component } from 'react'
import { Button, FormControl, Nav, Container, Navbar, Form } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from './logo192.png'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar sticky='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
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
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/about'>About</Nav.Link>
                  <Nav.Link as={Link} to='/contacts'>Contacts</Nav.Link>
                  <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
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

          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contacts' element={<Contacts/>}/>
            <Route exact path='/blog' element={<Blog/>}/>
          </Routes>
        </Router>
      </>
    )
  }
}
