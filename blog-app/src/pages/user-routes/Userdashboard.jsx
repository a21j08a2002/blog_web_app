import React from 'react'
import { Container } from 'reactstrap'
import AddPost from '../../components/AddPost'
import Base from '../../components/Base'

//  this is the functional component
const Userdashboard=()=> {
  return (
    <Base>
    <div> 
    
    <Container> 
      <AddPost />
    </Container>
   </div>
    
    </Base>
  )
}

export default Userdashboard