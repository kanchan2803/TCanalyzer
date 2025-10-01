import React from 'react'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import About from './pages/About'
import History from './pages/History'
import Login from './pages/Login'
import Footer from './components/layouts/Footer'
import Signup from './pages/Signup'
import PrivateContext from './context/privateContext'
import { AuthProvider } from './context/authContext'
import Settings from './pages/Settings'

export default function App() {
  
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/history' element={
          <PrivateContext>
            <History /> 
          </PrivateContext> } />
        
        <Route path='/settings' element={
          <PrivateContext>
            <Settings />
          </PrivateContext>
        } />
        </Routes>
      <Footer />
    </AuthProvider >
  )
}
