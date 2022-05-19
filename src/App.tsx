import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RegisterUSer from './components/RegisterUSer'
import Userlist from './components/Userlist'
import FoodList from './components/FoodList'
import Register from './featuretest/Register'
import { Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap'
import AddOrg from './components/AddOrg'
import OrgList from './components/OrgList'

function App() {
  const[show,setShow]=useState(true)
  return (
    <div className="App">
      <OrgList/>
    <AddOrg/>
     <RegisterUSer/>
     <Userlist/>
     <FoodList/>

     {/* <Register/> */}
    </div>
  )
}

export default App
