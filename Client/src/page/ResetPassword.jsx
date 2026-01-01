import React, { useState } from 'react';
import SecondFooter from '../Component/SecondFooter';
import { useDispatch, useSelector } from 'react-redux';
import { ResetpasswordFaild, ResetpasswordStart, ResetpasswordSuccess } from '../Redux/Auth/Authreducer';
import axios from 'axios';
import Loader from '../Component/Loader';
import { useNavigate } from 'react-router';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaEyeSlash } from 'react-icons/fa';

function ResetPassword() {
    let Dispatch = useDispatch();
    let navigate = useNavigate();
    let { isloading } = useSelector((store) => store.auth);
    let [Password, setPassword] = useState("");
    let [showPassword, setshowPassword] = useState(false);
    let [error, seterror] = useState("");

    async function handleEverify(e) {
        e.preventDefault();
        Dispatch(ResetpasswordStart());
        try {
            let res = await axios.post(`${import.meta.env.VITE_Base_URL}/users/passwordreset`, { Password }, {
                withCredentials: true
            });
            Dispatch(ResetpasswordSuccess());
            navigate("/Signin");
        } catch (error) {
            console.log(error);
            Dispatch(ResetpasswordFaild(error.response?.data?.message));
            seterror(error.response?.data?.message);
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
                <div className='w-full md:w-[50%] p-5 m-auto'>
                    <h2 className='pb-5 text-[22px] sm:text-[24px] font-semibold text-center md:text-left'>New Password</h2>

                    <form onSubmit={handleEverify} className='w-full max-w-[450px] mx-auto pt-6'>
                        <div className='relative mt-2'>
                            <input type={showPassword ? "text" : "password"} name="Password" value={Password} onChange={(e) => setPassword(e.target.value)} id="password"placeholder="Password"className={`${error? "w-full p-3 rounded-md border border-red-500 text-lg": "w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg" }`}
                            />
                            {showPassword ? (
                                <MdOutlineRemoveRedEye onClick={() => setshowPassword(false)} className='size-[20px] absolute top-[35%] right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer'/>
                            ) : (
                                <FaEyeSlash onClick={() => setshowPassword(true)} className='size-[20px] absolute top-[35%] right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer'/>
                            )}
                            {error && (
                                <p className='text-red-600 text-[15px] mt-2'>{error}</p>
                            )}
                        </div>

                        <button type='submit' className="w-full px-6 py-[15px] bg-[#0071E3] text-white rounded-[10px] mt-[30px] text-[14px] sm:text-[12px] font-semibold tracking-wide hover:bg-[#1d1d1f] transition-all duration-300 ease-in-out">
                            Continue
                        </button>
                    </form>
                </div>
            </div>

            <div className='mt-10'>
                <SecondFooter />
            </div>
        </div>
    );
}

export default ResetPassword;
