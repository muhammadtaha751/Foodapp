import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function Input() {
  return (
    <MDBInputGroup style={{width:700}}>
      <MDBInput label='Enter full address' />
      <MDBBtn rippleColor='dark'>
      <MDBBtn>Find Food</MDBBtn>
      </MDBBtn>
    </MDBInputGroup>
  );
}