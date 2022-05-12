import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RegisterUSer from './components/RegisterUSer'
import Userlist from './components/Userlist'
import FoodList from './components/FoodList'

function App() {
  return (
    <div className="App">
     <RegisterUSer/>
     <Userlist/>
     <FoodList/>
    </div>
  )
}

export default App
