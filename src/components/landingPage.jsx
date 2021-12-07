import React from 'react'
import Carousel from './carousel'
import Nav from './nav' 
import Footer from './footer'
import '../css/car.css'
import {Button} from 'react-bootstrap'

function landingPage() {
    return (
        <div>
            <Nav/>
            <div className='back'>
            <h5>50% Discount</h5>
            <h1>Winter Collection</h1>
            <h6>Best cloth collection by 2022</h6>
            <Button href="#" style={{borderRadius:'3px'}}>shop now</Button> 
            </div>
            <h1 style={{paddingTop:'2.5rem'}}>Shop By Category</h1>
            <Carousel/>
            <Footer/>
            
        </div>
    )
}

export default landingPage
