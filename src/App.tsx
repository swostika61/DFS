import React,{ useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RegisterUSer from './components/RegisterUSer'
import Userlist from './components/Userlist'
import FoodList from './components/FoodList'
import Register from './featuretest/Register'
import { Container, Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap'
import AddOrg from './components/AddOrg'
import OrgList from './components/OrgList'
import Styledtest from './featuretest/styledcomponent/Styledtest'

import styled from 'styled-components';

const StyledContainer=styled.div`
background:blue;
width:100%;
height:100%;
color:white;
font-size:20px;
`


const App=()=> {
  return (
<<<<<<< HEAD
    <div className="App">
     <Styledtest/>
    </div>
=======
     <Container className='bg-secondary'>
       <StyledContainer>
         This is working fine
       </StyledContainer>
     </Container>
     
     
     
   

 
>>>>>>> 464088e05493954278201bb0bfddaa8af1853588
  )
}

export default App
