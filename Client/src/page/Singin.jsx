import React, { useState } from 'react';
import { HiOutlineArrowRight } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import SecondFooter from '../Component/SecondFooter';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SigninFaild, SigninStart, SigninSucess } from '../Redux/Auth/Authreducer';

function Signin() {
    let [showPassword, setshowPassword] = useState(false);
    const [showPasswordField, setShowPasswordField] = useState(false);
    let [error, seterror] = useState(null);
    let Dispatch = useDispatch();
    let navigate=useNavigate();

    const Signinobj = {
        Email: "",
        Password: ""
    };
    let [SigninDetails, setSigninDetails] = useState(Signinobj);

    function handleChnage(e) {
        setSigninDetails({ ...SigninDetails, [e.target.name]: e.target.value });
    }

    async function handlesigninsubmit(e) {
        e.preventDefault();
        Dispatch(SigninStart());
        seterror(null);
        try {
            let res = await axios.post(`${import.meta.env.VITE_Base_URL}/users/signin`, SigninDetails, {
                withCredentials: true
            });

            Dispatch(SigninSucess(res.data));
            navigate("/");
        } catch (error) {
            console.log(error.response.data);
            seterror(error.response.data);
            Dispatch(SigninFaild(error.response.data));
        }
    }

    return (
        <div>
            <div className='w-full h-auto'>
                <div className='max-w-[995px] h-full md:m-auto p-5 sm:m-auto '>
                    <h1 className='hidden md:block md:text-[40px] w-full font-semibold text-left leading-[1.47] text-[#1d1d1f] mb-6'>Sign in for faster checkout.</h1>
                    <div className='md:w-[640px] md:h-[500px] md:m-auto md:pt-5 sm:pt-5 text-center sm:h-[500px] '>
                        <h2 className='pb-[20px] md:pb-[40px] text-[24px] font-[600]'>Sign in to Apple Store</h2>
                        <form onSubmit={handlesigninsubmit} className='md:w-[450px] sm:w-[300px] m-auto px-4'>
                            <div className='relative pb-[10px]'>
                                <input type="email" name="Email" value={SigninDetails.Email} onChange={handleChnage} id="email" placeholder="Enter Your Email" className={`${error?.field === "Email" ? "w-full p-3 rounded-md border border-red-500 text-lg" : "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"}`} />
                                <HiOutlineArrowRight onClick={() => setShowPasswordField(true)} className='size-[20px] absolute top-[40%] right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer' />
                            </div>
                            {error?.field === "Email" && <p className='text-red-600 text-[15px] text-left'>{error.message}</p>}
                            {showPasswordField && (
                                <div className='relative transition-all duration-500 ease-in-out opacity-100 mt-2'>
                                    <input type={showPassword ? "text" : "password"} name="Password" value={SigninDetails.Password} onChange={handleChnage} id="password" placeholder="Enter your Password" className={`${error?.field === "Password" ? "w-full p-3 rounded-md border border-red-500 text-lg" : "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"}`} />
                                    {showPassword ? (
                                        <MdOutlineRemoveRedEye onClick={() => setshowPassword(false)} className='size-[20px] absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer' />
                                    ) : (
                                        <FaEyeSlash onClick={() => setshowPassword(true)} className='size-[20px] absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer' />
                                    )}
                                </div>
                            )}
                            {error?.field === "Password" && <p className='text-red-600 text-[15px] text-left'>{error.message}</p>}
                            {error?.field !== "Email" && error?.field !== "Password" && error?.message && (
                                <p className='text-red-600 text-[15px] text-left'>{error.message}</p>
                            )}

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 w-full max-w-[450px] mx-auto mt-6">
                                <label className="flex items-center text-sm text-gray-600 cursor-pointer select-none">
                                    <input type="checkbox" className="accent-blue-600 w-4 h-4 mr-2 cursor-pointer" /> Remember me
                                </label>
                                <button type='submit' className="px-6 py-2 bg-black text-white rounded-full text-[14px] sm:text-[12px] cursor-pointer font-semibold tracking-wide hover:bg-[#1d1d1f] transition-all duration-300 ease-in-out">
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <div className='forgot'>
                            <Link to={"/EVerify"}><h2 className='mt-[25px] text-[#0066CC] flex items-center gap-[10px] justify-center cursor-pointer'>Forgot password <MdOutlineArrowOutward /></h2></Link>
                            <p className="pt-[10px] text-center ">Don’t have an Apple Account? <Link to={"/signup"} className="cursor-pointer block sm:inline pt-[5px] text-[#0066CC] flex items-center justify-center sm:inline-flex sm:justify-start gap-1">Create Your Apple Account <MdOutlineArrowOutward /></Link></p>
                        </div>
                    </div>
                </div>
                <hr className='border-t border-[#d2d2d7]' />
                <div className='SigninFooter '>
                    <SecondFooter />
                </div>
            </div>
        </div>
    );
}

export default Signin;
