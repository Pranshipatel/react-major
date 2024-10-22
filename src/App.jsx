import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import ChatSection from './Components/ChatSection'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const notify = () => toast("easy easy")
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>

      <Route path='/' element={<Signup />}/>
      <Route path='/signin' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/chat' element={<ChatSection />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
