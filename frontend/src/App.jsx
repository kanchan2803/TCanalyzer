import React from 'react'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import About from './pages/About'
import History from './pages/History'
import Login from './pages/Login'
import Footer from './components/layouts/Footer'
import Signup from './pages/Signup'
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './context/authContext'
import Settings from './pages/Settings'

export default function App() {
  
  return (
    <>
      <Navbar />
      <main className='flex-grow'>

      <Routes>
        {/* public routes */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* private routes */}
        <Route path='/history' element={
          <PrivateRoute>
            <History /> 
          </PrivateRoute> } />
        
        <Route path='/settings' element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        } />
        </Routes>
        </main>
      <Footer />
    </ >
  )
}
