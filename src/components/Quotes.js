import React from 'react'
import { TextField } from '@mui/material'
import { Button } from 'react-bootstrap'
import { Divider } from '@mui/material'
import '../css/car.css'

export default function Quotes() {
    return (
        <div style={{height:'420px', width:'100%'}}>
       <Divider style={{width:'30%',float:'left',marginLeft:'50px',marginTop:'1rem'}}/> <h3 style={{float:'left',marginLeft:'70px'}}>REQUEST FOR QUOTATION</h3><Divider style={{width:'25%',float:'right',marginRight:'50px',marginTop:'1rem'}}/>
        <div className='pie'>
            <h3 style={{paddingTop:'2rem'}}>Global Sourcing Marketplace</h3><br></br><br></br>
            <h4>40000+ RFQs</h4>
           <h4>Avg Quotation Duration</h4>
           <h4>160000+ Active Suppliers</h4>
           <h4>4000 Industries</h4>
            </div>
            <div className='chick'>
             <div className='ts'>
             <h2 style={{paddingTop:'1.5rem'}}> One Request, Multiple Quotes</h2>
             <br></br>
             <p>Phone cases received 2 quotations</p>

             <TextField  style={{width:'75%'}} label="What are you looking for" />
             <br></br><br></br>
             <TextField  style={{width:'40%',float:'left',marginLeft:'90px'}} label="Quantity" />
             <TextField  style={{width:'30%',float:'right',marginRight:'80px'}} label="Quantity"/>
             <br></br><br></br><br></br>
             <Button style={{width:'50%',backgroundColor:'rgb(197, 109, 193)',borderBlockColor:'rgb(197, 109, 193)'}}>Request for Quotation</Button>
             </div>
            </div>
        </div>
    )
}
