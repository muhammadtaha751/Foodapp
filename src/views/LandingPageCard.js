import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
export default function LandingPageCard(){
    return(
        <MDBCard className='landingCard'>
      <MDBCardBody>
        <MDBCardTitle>List your restaurant or shop on foodpanda</MDBCardTitle>
        <MDBCardText>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!

It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!

Interested? Let's start our partnership today!</MDBCardText>
<MDBBtn>Get Started</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    )
}