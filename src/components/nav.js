import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import { Offcanvas } from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import '../css/car.css'

function nav() {
    return (
        <div>
        <div >
          < Navbar bg="dark" variant="dark">
         <Container>
        <Nav className="ml-auto">
        <Nav.Link href="#home">Wishlist</Nav.Link>
          <Nav.Link href="#home">Shopping</Nav.Link>
        <Nav.Link href="#features">Cart</Nav.Link>
        <Nav.Link href="#pricing">Checkout</Nav.Link>
       </Nav>
    </Container>
  </Navbar>
  </div>
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><b>Dumdum.</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Categories</Nav.Link>
        <Nav.Link href="#" disabled>
          Contact
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search Products"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default nav
