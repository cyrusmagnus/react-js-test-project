import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width: '500px'}}>
        <h1 className='text-center'>Contact us</h1>
        <Form.Group controllId='formBasicEmail'>
          <Form.Label>Email addres</Form.Label>
          <Form.Control type='email' placeholder='Enter email'/>
          <Form.Text>
            lorem lorem lorem lorem lorem lorem lorem loremlorem
          </Form.Text>
        </Form.Group>

        <Form.Group controllId='formBasicPassword'>
          <Form.Label>Enter textarea</Form.Label>
          <Form.Control as='textarea' rows='3'></Form.Control>
        </Form.Group>

        <Form.Group controllId='formBasicCheckbox'>
          <Form.Check as='checkbox' label='Check'></Form.Check>
        </Form.Group>
        <Button variant='primary' type='submit'>Submit</Button>
      </Container>
    )
  }
}
