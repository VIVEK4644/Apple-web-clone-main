import React from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import SecondFooter from '../Component/SecondFooter'
import { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { OTPVerifyFaild, OTPVerifyStart, OTPVerifySuccess } from '../Redux/Auth/Authreducer';
import { useLocation, useNavigate } from 'react-router';
import Loader from '../Component/Loader';

function OTPVerify() {
    let [Otp, setOtp] = useState("");
    let Dispatch = useDispatch();
    let navigate = useNavigate();
    let { isloading } = useSelector((store) => store.auth);
    let location = useLocation();
    let from = location.state?.from
    console.log(from);
    let [error, seterror] = useState("");
    async function handleOTPSubmit(e) {
        e.preventDefault();
        Dispatch(OTPVerifyStart());
        try {
            let routes = from == "Forgot" ? `${import.meta.env.VITE_Base_URL}/users/otpverify` : `${import.meta.env.VITE_Base_URL}/users/verify`;

            let res = await axios.post(routes, { Otp }, {
                withCredentials: true
            })
            console.log(res);
            Dispatch(OTPVerifySuccess(res.data.message));
            from === "Forgot" ? navigate("/Resetpassword") : navigate("/Signin");
        } catch (error) {
            Dispatch(OTPVerifyFaild(error.response?.data?.message));
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
        <div className="min-h-screen flex flex-col justify-between">
            <div className="max-w-[995px] w-full mx-auto p-5 flex flex-col items-center">
                <h1 className="hidden md:block md:text-[40px] w-full font-semibold text-left leading-[1.47] text-[#1d1d1f] mb-6">Apple Account</h1>
                <div className="w-full max-w-[450px] pt-5 mt-10 md:mt-20">
                    <h2 className="pb-[20px] md:pb-[10px] text-[24px] font-[600] text-center">Verify Email Address</h2>
                    <p className="pb-[20px] md:pb-[25px] text-[17px] text-[#1D1D1F] font-[400] text-center">Enter the verification code sent to Email</p>
                    <div className="w-[70%] m-auto">
                        <form onSubmit={handleOTPSubmit} className="w-full max-w-sm flex justify-center">
                            <div className="space-y-2 m-auto">
                                <InputOTP maxLength={6} value={Otp} onChange={(value) => { setOtp(value) }}>
                                    <InputOTPGroup >
                                        <div className="w-full flex justify-between gap-2 pb-[10px]">
                                            <InputOTPSlot index={0} className={error && error.includes("OTP") ? "border border-[red] text-[#0071E3] rounded-md text-[15px] outline-none " : "border border-[#0071E3] text-[#0071E3] rounded-md text-[15px] outline-none focus:outline-none focus:ring-0"} />
                                            <InputOTPSlot index={1} className={error && error.includes("OTP") ? "border border-[red] text-[#0071E3] rounded-md text-[15px] outline-none " : "border border-[#0071E3] text-[#0071E3] rounded-md text-[15px] outline-none focus:outline-none focus:ring-0"} />
                                            <InputOTPSlot index={2} className={error && error.includes("OTP") ? "border border-[red] text-[#0071E3] rounded-md text-[15px] outline-none " : "border border-[#0071E3] text-[#0071E3] rounded-md text-[15px] outline-none focus:outline-none focus:ring-0"} />
                                            <InputOTPSlot index={3} className={error && error.includes("OTP") ? "border border-[red] text-[#0071E3] rounded-md text-[15px] outline-none " : "border border-[#0071E3] text-[#0071E3] rounded-md text-[15px] outline-none focus:outline-none focus:ring-0"} />
                                            <InputOTPSlot index={4} className={error && error.includes("OTP") ? "border border-[red] text-[#0071E3] rounded-md text-[15px] outline-none " : "border border-[#0071E3] text-[#0071E3] rounded-md text-[15px] outline-none focus:outline-none focus:ring-0"} />
                                            <InputOTPSlot index={5} className={error && error.includes("OTP") ? "border border-[red] text-[#0071E3] rounded-md text-[15px] outline-none " : "border border-[#0071E3] text-[#0071E3] rounded-md text-[15px] outline-none focus:outline-none focus:ring-0"} />
                                        </div>
                                    </InputOTPGroup>

                                </InputOTP>
                                {error && (
                                    <p className='text-red-600 text-[15px] '>{error}</p>
                                )}

                                <button type="submit" className="w-full px-6 py-[15px] bg-[#0071E3] text-white rounded-[10px] text-[14px] sm:text-[15px] font-semibold tracking-wide">Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="SigninFooter mt-[50px]">
                <SecondFooter />
            </div>
        </div>
    )
}

export default OTPVerify
