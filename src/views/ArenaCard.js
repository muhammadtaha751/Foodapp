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
import { useNavigate } from 'react-router-dom';


export default function ArenaCard() {
const navigate = useNavigate()

  function adDetail(){
    navigate("/adDetail")
  }
  return (
    <MDBCard onClick={adDetail}>
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src='https://images.deliveryhero.io/image/fd-pk/LH/zw0m-listing.jpg' fluid alt='...' />
      <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a>
    </MDBRipple>
    <MDBCardBody>
      <MDBCardText>
      <h5>Mateen Foods</h5>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  );
}

