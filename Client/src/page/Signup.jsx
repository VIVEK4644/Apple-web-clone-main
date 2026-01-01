import React, { useState } from 'react'
import { MdOutlineArrowOutward, MdOutlineRemoveRedEye } from 'react-icons/md'
import { Link, useNavigate } from 'react-router'
import { FaEyeSlash, FaRegQuestionCircle } from "react-icons/fa";
import SecondFooter from '../Component/SecondFooter';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Component/Loader';
import { SignupFaild, SignupStart, SignupSuccess } from '../Redux/Auth/Authreducer';


function Signup() {
  let [showPassword, setshowPassword] = useState(false);
  let [error, seterror] = useState(null);

  const [inputType, setInputType] = useState('text');
  let dispatch = useDispatch();
  let { isloading } = useSelector((store) => store.auth);
  
  let AuthDetailsobj = {
    UserName: "",
    Email: "",
    Password: "",
    Phonenumber: "",
    Birthdate: "",
    Country: "",
    ConfirmPassword: ""
  }
  let Navigate = useNavigate();

  let [SignupAuth, setSignupAuth] = useState(AuthDetailsobj);

  const handleFocus = () => {
    setInputType('date');
  };

  const handleBlur = () => {
    if (!SignupAuth.Birthdate) {
      setInputType('text');
    }
  };

  function handleChange(e) {
    setSignupAuth({ ...SignupAuth, [e.target.name]: e.target.value });
    if (error && error.field === e.target.name) seterror(null);
  }

  async function handleSignupsubmite(e) {
    e.preventDefault();
    dispatch(SignupStart());
    try {
      let res = await axios.post(`${import.meta.env.VITE_Base_URL}/users/signup`, SignupAuth, {
        withCredentials: true
      })
      console.log(res.data.message);
      dispatch(SignupSuccess());
      Navigate("/OTPVerify");
    } catch (err) {
      console.log(err)
      seterror(err.response.data);
      dispatch(SignupFaild(err.response.data.message));
    }
  }
 if (isloading) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-80 z-50 flex justify-center items-center">
      <Loader />
    </div>
  );
}
return (
  <div>
    <div className=' w-full h-auto min-h-screen'>

      <div className='max-w-[995px] h-full md:m-auto p-5 sm:m-auto '>
        <h1 className='hidden md:block md:text-[40px] w-full font-semibold text-left leading-[1.47] text-[#1d1d1f] mb-6'>Apple Account</h1>
        <div className='md:w-[450px]  md:h-auto md:m-auto md:pt-5 sm:pt-5 sm:h-[500px]' >
          <h2 className='pb-[20px] md:pb-[10px] text-[24px] font-[600] text-center '>Create Your Apple Account</h2>
          <h2 className='pb-[20px] md:pb-[15px] text-[17px] text-[1D1D1F] font-[400] text-center'>One Apple Account is all you need to access all Apple services.Already have an Apple Account? <Link to={"/signin"} className="cursor-pointer block sm:inline pt-[5px] text-[#0066CC] flex items-center justify-center sm:inline-flex sm:justify-start gap-1">Sign in <MdOutlineArrowOutward /></Link></h2>
          <form onSubmit={handleSignupsubmite} className='md:w-[450px] sm:w-[300px] w-full m-auto px-4'>
            <div className='pb-[20px] flex flex-col gap-[10px]'>
              <input type="text" name="UserName" value={SignupAuth.UserName} onChange={handleChange} id="firstname" placeholder="First Name" className={`${error?.field === "UserName" ? "w-full p-3 rounded-md border border-red-500 text-lg" : "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"}`} />
              {error?.field === "UserName" && <p className='text-red-600 text-[15px]'>{error.message}</p>}
              <select name="Country" value={SignupAuth.Country} onChange={handleChange} id="country" className={`${error?.field === "Country" ? "w-full p-3 rounded-md border border-red-500 text-lg" : "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"}`}>
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="japan">Japan</option>
                <option value="china">China</option>
                <option value="uae">UAE</option>
              </select>
              {error?.field === "Country" && <p className='text-red-600 text-[15px]'>{error.message}</p>}
              <div>
                <label htmlFor="birthday" className="block mb-2 font-semibold text-gray-700 text-left flex items-center gap-[10px]">Birthday <FaRegQuestionCircle /></label>
                <input id="birthday" type={inputType} name="Birthdate" value={SignupAuth.Birthdate} onChange={handleChange} placeholder="YYYY-MM-DD" onFocus={handleFocus} onBlur={handleBlur} className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <input type="email" name="Email" value={SignupAuth.Email} onChange={handleChange} id="email" placeholder="Enter Your Email" className={`${error?.field === "Email" ? "w-full p-3 rounded-md border border-red-500 text-lg" : "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"}`} />
              {error?.field === "Email" && <p className='text-red-600 text-[15px]'>{error.message}</p>}
              <div className='relative transition-all duration-500 ease-in-out opacity-100 mt-2'>
                <input type={showPassword ? "text" : "password"} name="Password" value={SignupAuth.Password} onChange={handleChange} id="password" placeholder="Password" className={`${error?.field === "Password" ? "w-full p-3 rounded-md border border-red-500 text-lg" : "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"}`} />
                {showPassword ? (
                  <MdOutlineRemoveRedEye onClick={() => setshowPassword(false)} className='size-[20px] absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer' />
                ) : (
                  <FaEyeSlash onClick={() => setshowPassword(true)} className='size-[20px] absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer' />
                )}
                {error?.field === "Password" && <p className='text-red-600 text-[15px]'>{error.message}</p>}
              </div>
              <div className='mt-2'>
                <input type="password" name="ConfirmPassword" value={SignupAuth.ConfirmPassword} onChange={handleChange} id="ConfirmPassword" placeholder="Confirm Password" className={`${error?.field === "ConfirmPassword" ? "w-full p-3 rounded-md border border-red-500 text-lg" : "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"}`} />
                {error?.field === "ConfirmPassword" && <p className='text-red-600 text-[15px]'>{error.message}</p>}
              </div>
              <input type="tel" name="Phonenumber" value={SignupAuth.Phonenumber} onChange={handleChange} id="Phonenumber" placeholder="Phone Number" className={`${error?.field === "Phonenumber" ? "w-full p-3 mt-[10px] rounded-md border border-red-500 text-lg" : "w-full p-3 mt-[10px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"}`} />
              {error?.field === "Phonenumber" && <p className='text-red-600 text-[15px]'>{error.message}</p>}
              <button type='submit' className="px-6 py-[15px] bg-[#0071E3] text-white rounded-full text-[14px] sm:text-[12px] font-semibold tracking-wide hover:bg-[#1d1d1f] transition-all duration-300 ease-in-out">Continue</button>
            </div>
          </form>
          <p className='text-[#424245] text-[16px]'>Be sure to enter a phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser. Messaging or data rates may apply.</p>
        </div>
      </div>
      <div className='SigninFooter '>
        <SecondFooter />
      </div>
    </div>
  </div>
)
}

export default Signup
