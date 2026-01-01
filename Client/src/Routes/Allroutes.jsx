import React from 'react'
import { Route, Routes } from 'react-router'
import Store from '../page/Store'
import Singin from '../page/Singin'
import Signup from '../page/Signup'
import OTPVerify from '../page/OTPVerify'
import EVerify from '../page/EVerify'
import ResetPassword from '../page/ResetPassword'
import Mac from '../page/Mac'
import Ipad from '../page/Ipad'
import Iphone from '../page/Iphone'
import Watch from '../page/Watch'
import Vision from '../page/Vision'
import Airpods from '../page/Airpods'
import Tv from '../page/Tv'
import Description from '../page/Description'
import bag from '../page/Bags'
import Bags from '../page/Bags'
import Address from '../page/Address'
import Account from '../page/Account'

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Store />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Singin />}></Route>
        <Route path='/OTPVerify' element={<OTPVerify />}></Route>
        <Route path='/EVerify' element={<EVerify />}></Route>
        <Route path='/Resetpassword' element={<ResetPassword />}></Route>
        <Route path='/Mac' element={<Mac />}></Route>
        <Route path='/Ipad' element={<Ipad />}></Route>
        <Route path='/Iphone' element={<Iphone />}></Route>
        <Route path='/Watch' element={<Watch />}></Route>
        <Route path='/Vision' element={<Vision />} ></Route>
        <Route path='/Airpods' element={<Airpods />}></Route>
        <Route path='/Tv' element={<Tv />}></Route>
        <Route path='/Description/:pid' element={<Description />}></Route>
        <Route path='/bag' element={<Bags/>}></Route>
        <Route path='/Address' element={<Address/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
