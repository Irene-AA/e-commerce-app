import React from 'react'
import { ListGroupItem,Card,ListGroup } from 'react-bootstrap'
import Nav from '../components/Nav'
import '../css/misc.css'

function Misc() {
    return (
        <div>
        <Nav/>
            <div className='sss'>
            <Card style={{ width: '20rem',}}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" height={'300px'}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
            </div>
        </div>
    )
}

export default Misc
