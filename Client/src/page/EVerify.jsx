import React, { useState } from 'react';
import SecondFooter from '../Component/SecondFooter';
import profilelogo from '../assets/Image/profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { EmverifyFaild, EmverifyStart, EmverifySucces } from '../Redux/Auth/Authreducer';
import axios from 'axios';
import Loader from '../Component/Loader';
import { useNavigate } from 'react-router';

function EVerify() {


    let Dispatch = useDispatch();
    let navigate = useNavigate();
    let { isloading } = useSelector((store) => store.auth);
    let [EMail, setEmail] = useState("");
    let [error, seterror] = useState("");
    async function handleEverify(e) {
        e.preventDefault();
        Dispatch(EmverifyStart());
        try {
            let res = await axios.post(`${import.meta.env.VITE_Base_URL}/users/emailverify`, { Email: EMail }, {
                withCredentials: true
            })
            Dispatch(EmverifySucces());
            navigate("/OTPVerify", { state: { from: "Forgot" } });
        } catch (error) {
            console.log(error); 
            Dispatch(EmverifyFaild(error.response.data.message));
            seterror(error.response.data.message);
            
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
        <div className='w-full min-h-screen flex flex-col justify-between'>
            <div className='w-full max-w-[990px] flex flex-col md:flex-row md:h-auto m-auto pt-10 px-4'>
                <div className='w-full md:w-[50%] md:border-r-[1px] right-1 p-5 flex flex-col justify-center'>
                    <h2 className='pb-5 text-[22px] sm:text-[24px] font-semibold text-center md:text-left'> Reset Your Password</h2>
                    <h2 className='pb-4 text-[16px] sm:text-[17px] text-[#1D1D1F] font-normal text-center md:text-left'>Enter your email address that you use with your account to continue.</h2>
                    <form onSubmit={handleEverify} className='w-full max-w-[450px] mx-auto pt-6'>
                        <input type="email" name="Email" value={EMail} onChange={(e) => setEmail(e.target.value)} id="Email" placeholder="Email" className={`${error && error.includes("Email") ? "w-full p-3 rounded-md border border-red-500 text-lg" : "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"}`} />
                        {error && (
                            <p className='text-red-600 text-[15px]'>{error}</p>
                        )}

                        <button type='submit' className="w-full px-6 py-[15px] bg-[#0071E3] text-white rounded-[10px] mt-[30px] text-[14px] sm:text-[12px] font-semibold tracking-wide hover:bg-[#1d1d1f] transition-all duration-300 ease-in-out">Continue</button>
                    </form>
                </div>
                <div className='hidden md:flex w-full md:w-[50%]  p-5 flex  gap-[10px] justify-center items-center'>
                    <img src={profilelogo} alt="Profile" className='w-[60px] h-[60px] ' />
                    <p className='text-[14px] text-[#6E6E73] font-normal text-left'>You’ve come to the right place to reset a forgotten password. For your security, we’ll ask you a few questions to verify that you’re the owner of this account.</p>
                </div>
            </div>
            <div className='mt-10'>
                <SecondFooter />
            </div>
        </div>
    );
}

export default EVerify;
