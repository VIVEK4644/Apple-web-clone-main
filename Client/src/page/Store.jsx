import React, { useEffect, useState } from 'react'
import girl from '../assets/Image/images.jpeg'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Mac from '../assets/Image/store-card-13-mac-nav-202503.png';
import iphone from '../assets/Image/store-card-13-iphone-nav-202502_GEO_US.png';
import ipad from '../assets/Image/store-card-13-ipad-nav-202405.png';
import Applewatch from '../assets/Image/store-card-13-watch-nav-202409.png';
import Vision from '../assets/Image/store-card-13-vision-pro-nav-202401.png';
import Airpods from '../assets/Image/store-card-13-airpods-nav-202409.png';
import Airtag from '../assets/Image/store-card-13-airtags-nav-202108.png';
import AppleTV from '../assets/Image/store-card-13-appletv-nav-202210.png';
import Homepod from '../assets/Image/store-card-13-homepod-nav-202301.png';
import Accessories from '../assets/Image/store-card-13-accessories-nav-202503.png';
import Applegift from '../assets/Image/store-card-13-holiday-giftcards-asit-agc-nav-202111.png';
import maccard from "../assets/Image/store-card-40-macbook-air-202503.jpeg";
import Iphonecard from '../assets/Image/store-card-40-iphone-16-pro-202409_GEO_US.jpeg';
import Trading from "../assets/Image/iphone-card-40-tradein-202505.png";
import Ipadcard from "../assets/Image/store-card-40-ipad-air-202405.jpeg";
import Watchcard from "../assets/Image/store-card-40-watch-pride-202505.png";
import Watchcard1 from "../assets/Image/store-card-40-watch-s10-202409.jpeg";
import Iphone16card from "../assets/Image/store-card-40-iphone-16e-202502_GEO_US.jpeg";
import Ipad from "../assets/Image/store-card-40-ipad-202503.jpeg";
import Macstudio from '../assets/Image/store-card-40-mac-studio-202503.jpeg';
import Iphone16e from "../assets/Image/store-card-40-iphone-16-202409_GEO_US.jpeg";
import Ultra from "../assets/Image/store-card-40-watch-ultra-202409_GEO_US.jpeg";
import earthhelp from "../assets/Image/store-card-50-earth-day-specialist-help-202504.jpeg";
import spacehelp from "../assets/Image/store-card-50-specialist-video-202409.jpeg";
import intelligencehelp from "../assets/Image/store-card-50-taa-202505.jpeg";
import accessiblityhelp from "../assets/Image/store-card-50-taa-gaad-202505.jpeg";
import GEO from "../assets/Image/store-card-50-personal-setup-202408_GEO_US.jpeg";
import Reactcard from "../assets/Image/store-card-50-genius-202108.jpeg";
import { BsTruck } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { BsCreditCard } from "react-icons/bs";
import { IoBagAddOutline } from "react-icons/io5";
import { ImHappy } from "react-icons/im";
import { FaApple } from "react-icons/fa";
import storecrad from '../assets/Image/store-card-50-apple-intelligence-202503.jpeg';
import storecard1 from '../assets/Image/store-card-50-applecare-202503.jpeg';
import storecard2 from '../assets/Image/store-card-50-applepay-202503_GEO_US.jpeg';
import storecard3 from '../assets/Image/store-card-50-foy-202505.jpeg';
import storecard4 from '../assets/Image/store-card-50-homekit-202405_GEO_US.jpeg';
import storecard5 from '../assets/Image/store-card-50-mothers-day-gifting-202504.jpeg';
import storecard6 from '../assets/Image/store-card-50-subscriptions-202108_GEO_US.jpeg';
import iphonecard40 from "../assets/Image/iphone-card-40-carriertrade-202409.jpeg";
import ipadcard40 from "../assets/Image/store-card-40-bts-edu-macbook-air-ipad-air-202503.jpeg";
import i40 from "../assets/Image/store-card-40-refurb-202408.jpeg";
import iphnoe40 from "../assets/Image/iphone-card-40-business-202409.jpeg";
import gov from "../assets/Image/store-card-40-gov-202503.jpeg";
import vite from "../assets/Image/store-card-40-veteran-202503.jpeg"
import axios from 'axios'
import { Link } from 'react-router';


function Store() {

  let [accessories, setaccessories] = useState([]);
  let [airpods, setairpods] = useState([]);

  async function productFetchapi() {
    try {
      let res = await axios.get(`${import.meta.env.VITE_Base_URL}/product/allproduct`, {
        withCredentials: true
      });

      const matchaccessories = res.data.Allproduct.filter((products) => {
        return products.category === "Accessories"
      })

      const matchairpods = res.data.Allproduct.filter((products) => {
        return products.category === "AirPods"
      })
      setaccessories(matchaccessories);
      setairpods(matchairpods);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    productFetchapi();
  }, []);



  return (
    <div className='w-full h-full '>
      <div className='w-full h-[65px] '>
        <h4 className='md:flex md:justify-center items-center text-[#1D1D1F] md:py-[20px] h-full text-center md:px-2 px-5 text-[15px] py-[10px]    gap-1'>Now through June 18, get extra trade-in credit toward a new iPhone.<span className='text-[#0066CC] hover:underline cursor-pointer'>Learn more</span></h4>
      </div>
      <div className='w-full h-full bg-[#f5f5f7] '>
        <div className='md:w-[85%] md:h-full  m-auto md:py-[80px] py-[40px] md:flex md:flex-row md:justify-between px-[20px] '>
          <div className='md:w-[60%] md:h-full pb-[20px] '>
            <h1 className='md:text-[45px] text-[32px] font-[600] text-[#6e6e73] leading-[1.0834933333] '><span className='text-[#1d1d1f] '>Store</span> The best way to buy the products you love.</h1>
          </div>
          <div className='md:w-[25%] md:h-full  flex flex-col md:items-end  gap-[15px] '>
            <div className='w-[70%] h-full flex flex-row gap-[20px]'>
              <div className='image w-[35px] h-[35px] '>
                <img src={girl} alt={girl} className='w-[100%] h-[100%]' />
              </div>
              <div className='content'>
                <p className='text-[#1D1D1F] text-[14px] font-[500] text-base'>Need Shopping help?</p>
                <a href="" className='flex items-center gap-[5px] text-[#0066CC] hover:underline '>Ask a Specialist <MdOutlineArrowOutward /></a>
              </div>
            </div>
            <div className='w-[70%] h-full  flex flex-row gap-[20px]'>
              <div className='image w-[35px] h-[35px] '>
                <img src={girl} alt={girl} className='w-[100%] h-[100%]' />
              </div>
              <div className='content'>
                <p className='text-[#1D1D1F] text-[14px] font-[500] text-base'>Visit an Apple Store</p>
                <a href="" className='flex items-center gap-[5px] text-[#0066CC] hover:underline '>Find one near You <MdOutlineArrowOutward /></a>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full h-[150px] mb-[62px]'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85%] m-auto "
          >
            <CarouselContent >
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={Mac}
                        alt="Mac"
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        Mac
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/4 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={iphone}
                        alt={iphone}
                        className="w-[120px] h-[78px] md:w-[120px] mnd:h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        iPhone
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* iPad */}
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={ipad}
                        alt={ipad}
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        iPad
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* Apple Watch */}
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={Applewatch}
                        alt={Applewatch}
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        Apple Watch
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              {/* Apple Vision Pro */}
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={Vision}
                        alt={Vision}
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        Apple Vision Pro
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* AirPods */}
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={Airpods}
                        alt={Airpods}
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        AirPods
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* AirTag */}
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={Airtag}
                        alt={Airtag}
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        AirTag
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* Apple TV 4K */}
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={AppleTV}
                        alt={AppleTV}
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        Apple TV 4K
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* HomePod */}
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={Homepod}
                        alt={Homepod}
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        HomePod
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* Accessories */}
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src={Accessories}
                        alt={Accessories}
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        Accessories
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              {/* MacBook */}
              <CarouselItem className="basis-1/2 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center space-y-4 ">
                      <img
                        src={Applegift}
                        alt="Mac"
                        className="w-[120px] h-[78px] sm:w-[100px] sm:h-[60px] object-contain"
                      />
                      <span className="text-[18px] font-medium text-[#1D1D1F] text-center">
                        Apple Gift Card
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className='w-[85%] h-full m-auto '>
          <h1 className='md:text-[28px] text-[28px] font-[600] text-[#6e6e73] leading-[1.0834933333] pb-[15px]'><span className='text-[#1d1d1f] '>The latest.</span> Take a look at What's new,right now</h1>
        </div>
        <div className='w-full h-[500px] mb-[60px]'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85.40%] m-auto "
          >
            <CarouselContent className="flex gap-x-7">
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${maccard})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600]'>MacBook Air</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500]'>Apple Intelligence</p>
                      <p className='text-[14px] font-[400] '>From $999 or $83.25/mo. for 12 mo.<sup>+</sup></p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Iphonecard})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600]'>iPhone 16 Pro</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500]'>Apple Intelligence</p>
                      <p className='text-[14px] font-[400] text-[#FFFFFF] '>From $999 or $41.62/mo. for 24 mo.<sup>+</sup></p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Trading})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <p className='text-[14px] font-[400] text-[#B64400] '>OFFER END 6.18</p>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.1]'>Get $200-$600 in Credit toward a new iPhone when you trade in iPhone 12 or higher.<sup>°</sup></h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Ipadcard})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600]'>iPad Air</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500]'>Apple Intelligence</p>
                      <p className='text-[14px] font-[400] '>From $599 or $49.91/mo. for 12 mo.<sup>+</sup></p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Watchcard})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.1]'>Apple Watch Pride Edition Sport Band</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500] '>Show Your stripes</p>
                      <p className='text-[14px] font-[400] '>$49</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Watchcard1})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.1]'>Apple Watch Series 10</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500] '>Thinstant classic</p>
                      <p className='text-[14px] font-[400]  '>From $399 or $33.25/mo. for 12 mo.<sup>+</sup></p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Iphone16card})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.1]'>iPhone 16e</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500] '>Apple Interlligence</p>
                      <p className='text-[14px] font-[400]  '>From $599 or $24.95/mo. for 24 mo.<sup>*</sup></p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Ipad})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.1]'>iPad</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500] '>Love. Drawable. Magical</p>
                      <p className='text-[14px] font-[400]  '>From $349 or $29.08/mo. for 12 mo.<sup>+</sup></p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Macstudio})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.1]'>Mac Studio</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500] '>Apple Intelligence</p>
                      <p className='text-[14px] font-[400]  '>From $1999 or $168.58/mo. for 12 mo.<sup>+</sup></p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Iphone16e})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1.1]'>iPhone 16</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500] '>Apple Intelligence</p>
                      <p className='text-[14px] font-[400]  text-[#FFFFFF]'>From $799 or $33.29/mo. for 24 mo.<sup>*</sup></p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Ultra})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1.1]'>Apple Watch Ultra 2</h1>
                      <p style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[17px] font-[500] '>New finish. Never quit.</p>
                      <p className='text-[14px] font-[400]  text-[#FFFFFF]'>From $799 or $66.58/mo. for 12 mo.<sup>+</sup></p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className='w-[85%] h-full m-auto '>
          <h1 className='md:text-[28px] text-[28px] font-[600] text-[#6e6e73] leading-[1.0834933333] pb-[15px]'><span className='text-[#1d1d1f] '>Help is here.</span> Whenever and however you need it.</h1>
        </div>
        <div className='w-full h-[500px] mb-[60px]'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85.40%] m-auto "
          >
            <CarouselContent className="flex gap-x-7">
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${earthhelp})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <p className='text-[14px] font-[400] '>APPLE SPECIALIST</p>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.2]'>Shop one on one with a Specialist. Online or in a store.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${spacehelp})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600]  leading-[1.2]'>Shop with a Specialist over video.</h1>
                      <p className='text-[17px] text-[#1D1D1F] font-[400] '>Choose your next device in a guided, one-way video sesion.</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${intelligencehelp})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <p className='text-[14px] text-[#1D1D1F] font-[400] '>TODAY AT APPLE</p>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600]'>Explore Apple Interlligence</h1>
                      <p className='text-[17px] text-[#1D1D1F] font-[400] '>Come try for yourself in free session at the Apple Store</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${accessiblityhelp})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <p className='text-[14px] text-[#1D1D1F] font-[400] '>TODAY AT APPLE</p>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.2]'>Book an accessibility session for your group.</h1>
                      <p className='text-[17px] text-[#1D1D1F] font-[400] '>Reserve a free session and discover built-in features that make Apple devices work for everyone.</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${GEO})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <p className='text-[14px] text-[#1D1D1F] font-[400] '>PERSONAL SETUP</p>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.2]'>Set up your new device with help from a Specialist.</h1>
                      <p className='text-[17px] text-[#1D1D1F] font-[400] '>Let us guide you through data transfer, the lastest features, and more in an online, one-on-one session.</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${Reactcard})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.2]'>Get expert service and support at the Genius Bar</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className='w-[85%] h-full m-auto '>
          <h1 className='md:text-[28px] text-[28px] font-[600] text-[#6e6e73] leading-[1.0834933333] pb-[15px]'><span className='text-[#1d1d1f] '>The Apple Store difference.</span> Even more reasons to shop with us.</h1>
        </div>
        <div className='w-full h-[250px] mb-[60px]'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85.40%] m-auto "
          >
            <CarouselContent className="flex gap-x-7">
              <CarouselItem className="flex-shrink-0 w-full sm:w-[215px] md:w-[313px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[215px] md:w-[313px]  mx-auto">
                  <Card className=" border-0 shadow-md cursor-pointer w-full sm:w-[215px] md:w-[313px] h-[240px] mx-auto transform   transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <BsTruck className='size-[50px] text-[#008009] pb-[10px]' />
                      <h1 className='text-[24px] text-[#1D1D1F] font-[600] leading-[1.2]'>Enjoy <span className=' text-[#008009]'>two-hour delivery</span> from an Apple Store, <span className=' text-[#008009]'>free delivery, </span> or <span className=' text-[#008009]'>easy pickup.<sup>2</sup></span></h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[215px] md:w-[313px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[215px] md:w-[313px]  mx-auto">
                  <Card className=" border-0 shadow-md cursor-pointer w-full sm:w-[215px] md:w-[313px] h-[240px] mx-auto transform   transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <LiaLaptopCodeSolid className='size-[50px] text-[#007AFF] pb-[10px]' />
                      <h1 className='text-[24px] text-[#1D1D1F] font-[600] leading-[1.2]'><span className=' text-[#007AFF]'>Trade i Your current device.</span> Get credit toward a new one.<sup>3</sup></h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[215px] md:w-[313px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[215px] md:w-[313px]  mx-auto">
                  <Card className=" border-0 shadow-md cursor-pointer w-full sm:w-[215px] md:w-[313px] h-[240px] mx-auto transform   transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <BsCreditCard className='size-[50px] text-[#008009] pb-[10px]' />
                      <h1 className='text-[24px] text-[#1D1D1F] font-[600] leading-[1.2]'>pay in full or <span className=' text-[#008009]'>pay over time.</span> Your Choice.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[215px] md:w-[313px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[215px] md:w-[313px]  mx-auto">
                  <Card className=" border-0 shadow-md cursor-pointer w-full sm:w-[215px] md:w-[313px] h-[240px] mx-auto transform   transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <IoBagAddOutline className='size-[50px]  text-[#007AFF] pb-[10px]' />
                      <h1 className='text-[24px] text-[#1D1D1F] font-[600] leading-[1.2]'>Get a  <span className='  text-[#007AFF]'>personalized shopping</span> experience in the  <span className=' text-[#007AFF]'>Apple Store app. </span></h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[215px] md:w-[313px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[215px] md:w-[313px]  mx-auto">
                  <Card className=" border-0 shadow-md cursor-pointer w-full sm:w-[215px] md:w-[313px] h-[240px] mx-auto transform   transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <ImHappy className='size-[50px] text-[#AC39FF] pb-[10px]' />
                      <h1 className='text-[24px] text-[#1D1D1F] font-[600] leading-[1.2]'>Make them yours.<span className=' text-[#AC39FF]'>Engrave a mix of emoji,names, and numbers for free.</span></h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[215px] md:w-[313px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[215px] md:w-[313px]  mx-auto">
                  <Card className=" border-0 shadow-md cursor-pointer w-full sm:w-[215px] md:w-[313px] h-[240px] mx-auto transform   transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[15px] px-[25px]">
                      <FaApple className='size-[50px]  pb-[10px]' />

                      <h1 className='text-[24px] text-[#1D1D1F] font-[600] leading-[1.2]'><span style={{
                        backgroundImage:
                          "linear-gradient(to right, #f8ab5e 0, #f36961 20%, #a176c8 40%, #759beb 60%, #65beb3 80%, #70db96 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}>Customize</span> your Mac and create your own style of Apple Watch</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className='w-[85%] h-full m-auto '>
          <h1 className='md:text-[28px] text-[28px] font-[600] text-[#6e6e73] leading-[1.0834933333] pb-[15px]'><span className='text-[#1d1d1f] '>Accessories.</span> Essentials that pair perfectly with your favorite devices.</h1>
        </div>
        <div className='w-full h-[500px] mb-[60px]'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85.40%] m-auto "
          >
            <CarouselContent className="flex gap-x-7">

              {accessories.map((product, index) => {
                return (<CarouselItem key={index} className="flex-shrink-0 w-full sm:w-[313px] md:w-[313px] lg:basis-auto mb-[10px] mt-[10px]">
                  <div className="slider w-full sm:w-[309px] md:w-[400px] mx-auto">
                    <Card className="border-0 shadow-md cursor-pointer px-[20px] py-[25px] w-full sm:w-[313px] md:w-[313px] h-auto rounded-[20px] bg-white transition-transform duration-300 hover:scale-101">
                      <CardContent className="flex flex-col items-center justify-between h-full">
                        <div className=" w-full h-[250px] flex items-center justify-center rounded-lg mb-5">
                          <img src={`https://apple-web-be.onrender.com/Allproduct/${product.image[0]}`} alt="Case" className="w-[180px] h-auto object-contain" />
                        </div>
                        <div className="flex items-center justify-center space-x-2 mb-4">
                          {product.color && product.color.length > 0 ? (
                            product.color[0]
                              .split(',')
                              .map((colr, index) => (
                                <span
                                  key={index}
                                  className="w-[10px] h-[10px] rounded-full"
                                  style={{ backgroundColor: colr.trim() }}
                                  title={colr.trim()}
                                ></span>
                              ))
                          ) : (
                            <span className="text-gray-400 text-sm">No colors</span>
                          )}
                          <span className="text-[#1D1D1F] text-sm font-medium">+</span>
                        </div>
                        <div className="w-full text-left">
                          <p className="text-[13px] text-[#BF4800] font-semibold mb-[6px]">New</p>
                          <h2 className="text-[16px] text-[#1D1D1F] font-semibold leading-tight mb-[6px]">
                            {product.name}
                          </h2>
                          <p className="text-[14px] text-[#1D1D1F] font-normal mt-1 mb-[20px]">INR {product.Price}.00</p>
                         <Link to={`/Description/${product._id}`}><button className="px-6 py-2 bg-[#0066CC]  rounded-full text-white font-medium text-base mb-8 hover:bg-[#004A99] transition-colors duration-300 cursor-pointer">Buy Now</button></Link>
                        </div>

                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>);
              })}

            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className='w-[85%] h-full m-auto '>
          <h1 className='md:text-[28px] text-[28px] font-[600] text-[#6e6e73] leading-[1.0834933333] pb-[15px]'><span className='text-[#1d1d1f] '>Loud and clear.</span> Unparalleled choices for rich, high-quality sound.</h1>
        </div>
        <div className='w-full h-[500px] mb-[60px]'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85.40%] m-auto "
          >
            <CarouselContent className="flex gap-x-7">

              {airpods.map((product, index) => {
                return (<CarouselItem key={index} className="flex-shrink-0 w-full sm:w-[313px] md:w-[313px] lg:basis-auto mb-[10px] mt-[10px]">
                  <div className="slider w-full sm:w-[309px] md:w-[400px] mx-auto">
                    <Card className="border-0 shadow-md cursor-pointer px-[20px] py-[25px] w-full sm:w-[313px] md:w-[313px] h-auto rounded-[20px] bg-white transition-transform duration-300 hover:scale-101">
                      <CardContent className="flex flex-col items-center justify-between h-full">
                        <div className=" w-full h-[250px] flex items-center justify-center rounded-lg mb-5">
                          <img src={`https://apple-web-be.onrender.com/Allproduct/${product.image[0]}`} alt="Case" className="w-[180px] h-auto object-contain" />
                        </div>
                        <div className="flex items-center justify-center space-x-2 mb-4">
                          {product.color && product.color.length > 0 ? (
                            product.color[0]
                              .split(',')
                              .map((colr, index) => (
                                <span
                                  key={index}
                                  className="w-[10px] h-[10px] rounded-full"
                                  style={{ backgroundColor: colr.trim() }}
                                  title={colr.trim()}
                                ></span>
                              ))
                          ) : (
                            <span className="text-gray-400 text-sm">No colors</span>
                          )}
                          <span className="text-[#1D1D1F] text-sm font-medium">+</span>
                        </div>
                        <div className="w-full text-left">
                          <p className="text-[13px] text-[#BF4800] font-semibold mb-[6px]">New</p>
                          <h2 className="text-[16px] text-[#1D1D1F] font-semibold leading-tight mb-[6px]">
                            {product.name}
                          </h2>
                          <p className="text-[14px] text-[#1D1D1F] font-normal mt-1 mb-[20px]">INR {product.Price}.00</p>
                          <Link to={`/Description/${product._id}`}><button className="px-6 py-2 bg-[#0066CC]  rounded-full text-white font-medium text-base mb-8 hover:bg-[#004A99] transition-colors duration-300 cursor-pointer">Buy Now</button></Link>
                        </div>

                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>);
              })}

            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className='w-[85%] h-full m-auto '>
          <h1 className='md:text-[28px] text-[28px] font-[600] text-[#6e6e73] leading-[1.0834933333] pb-[15px]'><span className='text-[#1d1d1f] '>The Apple exprience.</span> Do even more with Apple products and services.</h1>
        </div>
        <div className='w-full h-[500px] mb-[60px]'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85.40%] m-auto "
          >
            <CarouselContent className="flex gap-x-7">
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${storecrad})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 style={{ backgroundImage: 'linear-gradient(108deg, #006bb9 0%, #903fcf 32%, #cf0f3c 84%, #b84100 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }} className='text-[25px] font-[700]'>Apple Intelligence</h1>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>Write, express yourself, and get things done effortlessly.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${storecard5})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>Let them know it’s on the way.</h1>
                      <p className='text-[14px] font-[400] text-[#1D1D1F] pt-[5px] '>Send a digital gift message that’s easy to schedule, fun to give, and fun to get.</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${storecard3})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>Get 3 months of Apple TV+ free when you buy an Apple device.<sup>++</sup></h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${storecard6})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>Six Apple services. One easy subscription.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${storecard1})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.1]'>We’ve got you covered.</h1>
                      <p className='text-[14px] font-[400] text-[#1D1D1F] pt-[5px] '>AppleCare+ now comes with unlimited repairs for accidental damage protection.</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${storecard2})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>Discover all the ways to use Apple Pay.  </h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${storecard4})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>See how one app can control your entire home.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className='w-[85%] h-full m-auto '>
          <h1 className='md:text-[28px] text-[28px] font-[600] text-[#6e6e73] leading-[1.0834933333] pb-[15px]'><span className='text-[#1d1d1f] '>Special Savings.</span> iPhone carrier deals and exclusive savings for school,bussiness,and more.</h1>
        </div>
        <div className='w-full h-[500px]'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85.40%] m-auto "
          >
            <CarouselContent className="flex gap-x-7">
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${iphonecard40})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>Apple. Your one‑stop shop for incredible carrier deals.</h1>
                      <p className='text-[14px] font-[400] text-[#1D1D1F] pt-[5px] '>Get up to $1000 in credit on a new iPhone with AT&T, Boost Mobile, T‑Mobile, or Verizon. Trade‑in may be required.</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${ipadcard40})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>Buy a new Mac or iPad with education savings.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${i40})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>Shop refurbished Apple products backed by a one‑year warranty.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${iphnoe40})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1]'>From enterprise to small business, we’ll work with you.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${gov})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[30px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1.1]'>Special pricing is available for state, local, and federal agencies.<sup>1</sup></h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${vite})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1]'>Active and veteran members may be eligible for exclusive savings.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Store
