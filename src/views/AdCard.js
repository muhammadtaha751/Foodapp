import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function AdCard() {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Zinger Burger</MDBCardTitle>
        <MDBCardText>Special for you</MDBCardText>
       <img style={{width:150}}src='https://images.deliveryhero.io/image/fd-pk/LH/nqiz-listing.jpg'/>
      </MDBCardBody>
    </MDBCard>
  );
}