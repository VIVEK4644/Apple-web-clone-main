import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Allroutes from './Routes/Allroutes'


function App() {

  const location = useLocation()

  const hideFooterPaths = ['/signup', '/signin', '/OTPVerify', '/EVerify',"/ResetPassword"]
  return (
    <>
      <Navbar />

      <Allroutes />
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  )
}

export default App
