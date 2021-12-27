import React from 'react'
import Carousel from '../components/Carousel'
import Nav from '../components/Nav' 
import Footer from '../components/Footer'
import Icons from '../components/Icons'
import '../css/car.css'
import Quotes from '../components/Quotes'
import {Button} from 'react-bootstrap'

function LandingPage() {
    return (
        <div>
            <Nav/>
            <div className='back'>
            <h5>50% Discount</h5>
            <h1>Winter Collection</h1>
            <h6>Best cloth collection by 2022</h6>
            <Button href="#" style={{borderRadius:'3px'}}>shop now</Button> 
            </div>
            <h1 style={{paddingTop:'2.5rem',fontFamily:'cursive'}}>Popular Categories</h1>
            <Carousel/>
            <h3>Shop By Category</h3>
            <Icons/>
            <br></br><br></br>
            
            <Quotes/>
            <br></br>
            <Footer/>
            
        </div>
    )
}

export default LandingPage
