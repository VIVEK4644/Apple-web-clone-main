import React, { useState } from 'react';
import { IoLogoApple } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { DiCodepen } from "react-icons/di";
import { CgPentagonUp } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router';

import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt4 } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Signinlogout } from '../Redux/Auth/Authreducer';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(null);
    let [MobailDropdown, setMobailDropdown] = useState(false);
    let { User } = useSelector((store) => store.auth);
    let navigate=useNavigate();
    let dispatch=useDispatch();


    async function handlelogout(){
        try {
            let res =await axios.get(`${import.meta.env.VITE_Base_URL}/users/logout`,{
                withCredentials:true
            });
            console.log(res);
            dispatch(Signinlogout(res.data.message))
            navigate("/Signin");
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-[100%] bg-[#f5f5f7] relative z-[100] sticky top-0 " onMouseLeave={() => setShowDropdown(null)}>
            <div className="h-[44px] z-[110] relative bg-[#f5f5f7]  hidden md:block">
                <div className="max-w-[995px] h-full m-auto items-center hidden md:flex">
                    <ul className="flex justify-between items-center w-full text-[#1d1d1f] text-[13px] font-[490] tracking-[-0.022em] leading-[1.4705882353] not-italic">
                        <li className="text-[20px] cursor-pointer"><IoLogoApple /></li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("Store")}><Link to={"/"}>Store</Link></li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("Mac")}><Link to={"/Mac"}>Mac</Link></li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("iPad")}><Link to={"/Ipad"}>iPad</Link></li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("iPhone")}><Link to={"/Iphone"}>iPhone</Link></li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("Watch")}><Link to={"/Watch"}>Watch</Link></li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("Vision")}><Link to={"/Vision"}>Vision</Link></li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("AirPods")}><Link to={"/Aitpods"}>AirPods</Link></li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("TV & Home")}><Link to={"/Tv"}>TV & Home</Link></li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("Entertainment")}>Entertainment</li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("Accessories")}>Accessories</li>
                        <li className="cursor-pointer relative" onMouseEnter={() => setShowDropdown("Support")}>Support</li>
                        <li className="text-[18px] cursor-pointer relative" onClick={() => setShowDropdown("CiSearch")}><CiSearch /></li>
                        <li className="relative flex items-center justify-center text-[18px] cursor-pointer" onClick={() => setShowDropdown("RiShoppingBagLine")}>
                            <RiShoppingBagLine />
                            <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] px-[5px] rounded-full">1</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`fixed inset-0 bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 ease-in-out pointer-events-none ${showDropdown ? "opacity-100 pointer-events-auto" : "opacity-0"}`} style={{ zIndex: 90 }}></div>
            <div className={`absolute top-[44px] left-0 w-full bg-[#f5f5f7] overflow-hidden transition-all duration-300 ease-in-out ${showDropdown ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-3"}`} style={{ zIndex: 100 }}>
                <div className="max-w-[995px] m-auto mt-[40px] text-black overflow-y-auto max-h-[calc(100vh-44px)] scroll-smooth">
                    {showDropdown === "Store" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Shop the Latest</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Mac</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPad</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPhone</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Watch</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Vision Pro</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Accessories</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Quick Link</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Find a Store</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Order Status</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Trade In</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iPhone</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Finacing</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Personal Setup</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop Special Stores</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className=" pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Certified Refurbished</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Eduction</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Business</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Veterans and Military</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Government</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "Mac" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore Mac</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Explore All Mac</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">MacBook Air</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">MackBook Pro</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iMac</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Mac mini</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Mac Studio</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Mac Pro</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Displays</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop Mac</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop Mac</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Help Me Choose</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Mac Accessorics</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Trade In</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Finacing</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">More from Mac</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className=" pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Mac Support</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AppleCare+ for Mac</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">macOs Sequoia</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Intelligence</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apps by Apple</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Continulty</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iCloud+</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Mac For Business</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Education</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "iPad" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore iPad</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Explore All iPad</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPad Pro</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPad Air</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPad</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPad mini</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Pencil</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Keyboards</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop iPad</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop iPad</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iPad Accessorics</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Trade In</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Finacing</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">More from iPad</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className=" pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iPad Support</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AppleCare+ for iPad</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iPadOS 18</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Intelligence</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apps by Apple</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iCloud+</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Education</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "iPhone" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore iPhone</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Explore All iPhone</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPhone 16 Pro</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPhone 16</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPhone 16e</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPhone 15</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop iPhone</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop iPhone</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iPhone Accessorics</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Trade In</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Carrier Deals at Apple</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Finacing</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">More from iPhone</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className=" pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iPhone Support</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AppleCare+ for iPhone</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iOS 18</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Intelligence</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apps by Apple</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iPhone Privacy</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">iCloud+</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Wallet, Pay, Card</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Siri</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "Watch" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore Watch</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Explore All Apple Watch</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Watch Series 10</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Watch Ultra 2</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Watch SE</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Watch Nike</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Watch Hermes</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop Watch</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop Apple Watch</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Watch Studio</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Watch Bands</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Watch Accessories</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Trade In</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Finacing</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">More from Watch</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className=" pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Watch Support</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AppleCare+</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">WatchOS 11</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Watch For Your Kids</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apps by Apple</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Fitness+</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "Vision" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore Vision</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Explore All Vision Pro</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop Vision</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop Apple Vision Pro</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Vision Pro Accessories</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Book a Demo</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Finacing</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">More from Vision</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className=" pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Vision Pro Support</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AppleCare+</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">VisionOS 2</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "AirPods" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore AirPods</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Explore All AirPods</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">AirPods 4</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">AirPods Pro 2</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">AirPods Max</li>

                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop AirPods</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop AirPods</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AirPods Accessories</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">More from AirPods</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className=" pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AirPods Support</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AppleCare+ for Headphones</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Hearing Health</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Music</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "TV & Home" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore TV & Home</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Explore TV & Home</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple TV 4K</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">HomePod</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">HomePod mini</li>

                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop TV & Home</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop Apple TV 4K</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop HomePod</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop HomePod mini</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Shop Siri Remote</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">TV & Home Accessories</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">More from TV & Home</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className=" pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple TV Support</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">HomePod Support</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AppleCare+</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple TV+</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Home app</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Music</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Siri</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AirPlay</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "Entertainment" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore Entertainment</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Explore Entertainment</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple One</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple TV+</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Music</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Arcade</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Fitness+</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple News+</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Prodcasts</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Books</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">APple Store</li>

                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Support</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple TV+Support</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Music Support</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "Accessories" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Shop Accessories</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Shop All Accessories</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Mac</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPad</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPhone</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Watch</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Vision Pro</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">AirPods</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">TV & Home</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore Accessories</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Made by Apple</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Bears by De. Dre</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">AirTag</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Assistive Technologies</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "Support" && (
                        <div className="w-full h-auto flex pb-[50px]">
                            <div className="w-[30%]  px-4 ">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Explore Support</p>
                                <ul className="text-[#333336] text-[20px] font-[600]">
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPhone</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Mac</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">iPad</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Watch</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Apple Vision Pro</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">AirPods</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">Music</li>
                                    <li className="pt-[7px] pb-[11px] cursor-pointer">TV</li>

                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Get Help</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className="pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Community</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Check Coverage</li>
                                    <li className="pt-[4px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Repair</li>
                                </ul>
                            </div>
                            <div className="w-[18%]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] block text-[rgba(110,110,115,1)]">Helpful Topics</p>
                                <ul className="text-[#333336] text-[12px] font-[600]">
                                    <li className=" pt-[7px] pb-[4px]  text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Get AppleCare+</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Apple Account and Password</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Billing & Subscriptions</li>
                                    <li className="pt-[4px] pb-[4px] text-[12px] leading-[1.33337] font-semibold tracking-[-0.01em] cursor-pointer">Accessibility</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {showDropdown === "CiSearch" && (
                        <>
                            <div className='w-full h-[50px] mb-[50px] relative'>
                                <input
                                    type="text"
                                    className="w-full h-full p-2 pl-[30px] text-[25px] outline-none text-[#1d1d1f]"
                                    placeholder="Search apple.com"
                                    style={{
                                        fontWeight: 600,
                                        lineHeight: "1.3333733333",
                                        letterSpacing: "-.01em",
                                        fontFamily: "SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif"
                                    }} />
                                <CiSearch className='absolute top-[14px] left-[0px] size-[20px] text-[rgb(110,110,115)]' />
                            </div>
                            <div className="w-[18%] mb-[20px]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] text-[rgba(110,110,115,1)] mb-2">Quick Link</p>
                                <ul className="text-[#333336] text-[12px] font-semibold space-y-[4px]">
                                    <li className="flex items-center gap-2 cursor-pointer"><FaArrowRight /> Find a Store</li>
                                    <li className="flex items-center gap-2 cursor-pointer"><FaArrowRight /> Apple Vision Pro</li>
                                    <li className="flex items-center gap-2 cursor-pointer"><FaArrowRight /> AirPods</li>
                                    <li className="flex items-center gap-2 cursor-pointer"><FaArrowRight /> Apple Intelligence</li>
                                </ul>
                            </div>
                        </>
                    )}
                    {showDropdown === "RiShoppingBagLine" && (
                        <div className='mb-[40px]'>
                            <div className='w-[30%] h-[100px] flex  items-center gap-[10px]'>
                                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-select-11in-cell-spacegray-202405?wid=200&hei=200&fmt=png-alpha&.v=MHJ3M044Wm5ySDVTUVJHY090MTFQUTRlejdNZHFOcWljcEk4UnVSYWJ1elN5Q1ZzVW1xZmRBeUtJVlhqWi9YZTNsVkdpZ0NIa1JqWGtCb3ZQTVd1QmtYMlF5cDZzVmlmTlArTlFQdmlob3VvcisvbitmUHd1Vks3OHVpTHdLK3Y" alt="" width={100} height={100} />
                                <h2>Name</h2>
                            </div>
                            <div className='w-[30%] h-[100px] flex  items-center gap-[10px]'>
                                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-select-11in-cell-spacegray-202405?wid=200&hei=200&fmt=png-alpha&.v=MHJ3M044Wm5ySDVTUVJHY090MTFQUTRlejdNZHFOcWljcEk4UnVSYWJ1elN5Q1ZzVW1xZmRBeUtJVlhqWi9YZTNsVkdpZ0NIa1JqWGtCb3ZQTVd1QmtYMlF5cDZzVmlmTlArTlFQdmlob3VvcisvbitmUHd1Vks3OHVpTHdLK3Y" alt="" width={100} height={100} />
                                <h2>Name</h2>
                            </div>
                            <div className='w-[30%] h-[100px] flex  items-center gap-[10px]'>
                                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-select-11in-cell-spacegray-202405?wid=200&hei=200&fmt=png-alpha&.v=MHJ3M044Wm5ySDVTUVJHY090MTFQUTRlejdNZHFOcWljcEk4UnVSYWJ1elN5Q1ZzVW1xZmRBeUtJVlhqWi9YZTNsVkdpZ0NIa1JqWGtCb3ZQTVd1QmtYMlF5cDZzVmlmTlArTlFQdmlob3VvcisvbitmUHd1Vks3OHVpTHdLK3Y" alt="" width={100} height={100} />
                                <h2>Name</h2>
                            </div>
                            <p className='text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] text-[rgba(110,110,115,1)] mb-2 pt-[10px]'>3 More item in Your Bage</p>
                            <div className="w-[18%] mb-[20px] mt-[20px]">
                                <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] text-[rgba(110,110,115,1)] mb-2">My Profile</p>
                                <ul className="text-[#333336] text-[12px] font-semibold space-y-[4px]">
                                    <Link to={"/bag"}><li className="flex items-center gap-2 cursor-pointer pb-[5px]"><DiCodepen className='size-[15px] color-[rgba(110,110,115,1)]' /> Order</li></Link>
                                    <li className="flex items-center gap-2 cursor-pointer pb-[5px]"><CgPentagonUp className='size-[15px] color-[rgba(110,110,115,1)]' /> Your Saves</li>
                                   <Link to={"/account"}> <li className="flex items-center gap-2 cursor-pointer pb-[5px]"><IoSettingsOutline className='size-[15px] color-[rgba(110,110,115,1)]' /> Account</li></Link>
                                    {User==="Logged out successfull" ? <Link to={"signin"} onClick={() => setMobailDropdown(false)}><li className="flex items-center gap-2 cursor-pointer pb-[5px]"><VscAccount className='size-[15px] text-[rgba(110,110,115,1)]' /> Sign In</li></Link> : <li className="flex items-center gap-2 cursor-pointer pb-[5px]" onClick={handlelogout}><VscAccount className='size-[15px] text-[rgba(110,110,115,1)]' /> Sign out {User?.UserName}</li>}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="h-[50px] bg-[#f5f5f7] flex justify-between items-center px-4 md:hidden sticky top-0">
                <IoLogoApple className="text-[25px] text-black cursor-pointer" />
                <div className="flex items-center gap-5">
                    <ul className="flex justify-between gap-[15px] items-center w-full text-[#1d1d1f] text-[13px] font-[490] tracking-[-0.022em] leading-[1.4705882353] not-italic">
                        <li className="text-[25px] cursor-pointer relative" onClick={() => setMobailDropdown("CiSearch")}><CiSearch /></li>
                        <li className="relative flex items-center justify-center text-[25px] cursor-pointer" onClick={() => setMobailDropdown("RiShoppingBagLine")}> <RiShoppingBagLine /> <span className="absolute -top-0 -right-1 bg-black text-white text-[10px] px-[5px] rounded-full">1</span> </li>
                        <li className="text-[18px] cursor-pointer relative" onClick={() => setMobailDropdown("GiHamburgerMenu")}><HiMenuAlt4 className="text-[25px] text-[#000] cursor-pointer" /></li>
                    </ul>
                </div>
                <div className={`fixed inset-0  bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${MobailDropdown ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} style={{ zIndex: 90 }}>
                    <RxCross2 className="absolute top-4 right-4 text-[rgba(110,110,115,1)] text-3xl cursor-pointer" onClick={() => setMobailDropdown(false)} />
                </div>
                {MobailDropdown === "GiHamburgerMenu" && (
                    <div className="w-full h-full bg-[#f5f5f7]  flex flex-col md:hidden  pb-[50px] z-[100] fixed top-[50px] left-0">
                        <div className="px-4 pt-4">
                            <ul className="text-[#333336] text-[20px] font-[600]">
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}><Link to={"/"}>Store</Link></li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}><Link to={"/Mac"}>Mac</Link></li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}><Link to={"/Ipad"}>iPad</Link></li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}><Link to={"/Iphone"}>iPhone</Link></li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}><Link to={"/Watch"}>Watch</Link></li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}><Link to={"/Vision"}>Vision</Link></li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}><Link to={"/Airpods"}>AirPods</Link></li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}><Link to={"/Tv"}>TV & Home</Link></li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}>Enterainment</li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}>Accessories</li>
                                <li className="py-[7px] cursor-pointer" onClick={() => setMobailDropdown(false)}>Support</li>
                            </ul>
                        </div>
                    </div>
                )}
                {MobailDropdown === "CiSearch" && (
                    <div className="w-full h-full bg-[#f5f5f7]  flex flex-col md:hidden  pb-[50px] z-[100] fixed top-[50px] left-0">                       <div className='w-full h-[50px] mb-[50px] relative'>
                        <input
                            type="text"
                            className="w-full h-full p-2 pl-[30px] text-[25px] outline-none text-[#1d1d1f]"
                            placeholder="Search apple.com"
                            style={{
                                fontWeight: 600,
                                lineHeight: "1.3333733333",
                                letterSpacing: "-.01em",
                                fontFamily: "SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif"
                            }} />
                        <CiSearch className='absolute top-[14px] left-[0px] size-[20px] text-[rgb(110,110,115)]' />
                    </div>
                        <div className="px-4 pt-4">
                            <p className="text-[12px] leading-[1.33337] font-normal tracking-[-0.01em] text-[rgba(110,110,115,1)] mb-2">Quick Link</p>
                            <ul className="text-[#333336] text-[14px] font-[600]">
                                <li className="flex items-center gap-2 pb-[5px] cursor-pointer" ><FaArrowRight className='text-[12px]' /> Find a Store</li>
                                <li className="flex items-center gap-2 pb-[5px cursor-pointer"><FaArrowRight className='text-[12px]' /> Apple Vision Pro</li>
                                <li className="flex items-center gap-2 pb-[5px cursor-pointer"><FaArrowRight className='text-[12px]' /> AirPods</li>
                                <li className="flex items-center gap-2 pb-[5px cursor-pointer"><FaArrowRight className='text-[12px]' /> Apple Intelligence</li>
                            </ul>
                        </div>
                    </div>
                )}
                {MobailDropdown === "RiShoppingBagLine" && (
                    <div className='mb-[40px] h-full bg-[#f5f5f7]    z-[100] fixed top-[50px] left-0 px-4 w-full pb-[50px]'>
                        {/* Product Items */}
                        <div className='w-[30%] h-[100px] flex items-center gap-[10px]'>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-select-11in-cell-spacegray-202405?wid=200&hei=200&fmt=png-alpha&.v=MHJ3M044Wm5ySDVTUVJHY090MTFQUTRlejdNZHFOcWljcEk4UnVSYWJ1elN5Q1ZzVW1xZmRBeUtJVlhqWi9YZTNsVkdpZ0NIa1JqWGtCb3ZQTVd1QmtYMlF5cDZzVmlmTlArTlFQdmlob3VvcisvbitmUHd1Vks3OHVpTHdLK3Y" width={100} height={100} />
                            <h2>Name</h2>
                        </div>
                        <p className='text-[12px] ... pt-[10px]'>3 More item in Your Bag</p>
                        <div className="w-[18%] my-[20px]">
                            <p className="text-[12px] text-[rgba(110,110,115,1)] mb-2">My Profile</p>
                            <ul className="text-[#333336]  w-[200px] text-[12px] font-semibold space-y-[4px]">
                                <Link to={"/bag"}><li className="flex items-center gap-2 cursor-pointer pb-[5px]" onClick={() => setMobailDropdown(false)}><DiCodepen className='size-[15px] text-[rgba(110,110,115,1)]' /> Order </li></Link>
                                <li className="flex items-center gap-2 cursor-pointer pb-[5px]" onClick={() => setMobailDropdown(false)}><CgPentagonUp className='size-[15px] text-[rgba(110,110,115,1)]' /> Saves</li>
                                <Link to={"/account"}><li className="flex items-center gap-2 cursor-pointer pb-[5px]" onClick={() => setMobailDropdown(false)}><IoSettingsOutline className='size-[15px] text-[rgba(110,110,115,1)]' /> Account</li></Link>
                                {User==="Logged out successfull" ? <Link to={"signin"} onClick={() => setMobailDropdown(false)}><li className="flex items-center gap-2 cursor-pointer pb-[5px]"><VscAccount className='size-[15px] text-[rgba(110,110,115,1)]' /> Sign In</li></Link> : <li className="flex items-center gap-2 cursor-pointer pb-[5px]" onClick={handlelogout}><VscAccount className='size-[15px] text-[rgba(110,110,115,1)]' /> Sign out {User?.UserName}</li>}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
