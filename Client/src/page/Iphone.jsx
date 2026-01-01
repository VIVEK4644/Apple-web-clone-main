import React, { useEffect, useRef, useState } from 'react'
import { FaApple, FaPause, FaPlay } from "react-icons/fa";
import { BsEarbuds, BsPhone, BsPhoneFill } from "react-icons/bs";
import { MdCompare, MdPhoneIphone, MdShoppingCart } from "react-icons/md";
import { RiSimCardLine } from "react-icons/ri";
import { SiIos, SiApplemusic } from "react-icons/si";
import iphonevideo from "../assets/Video/Iphone.mp4";
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import axios from 'axios';
import { Link } from 'react-router';

function Iphone() {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [iPoneProduct, setiPhoneProduct] = useState([]);
  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  async function IphoneFetchApi() {
    try {
      let res = await axios.get(`${import.meta.env.VITE_Base_URL}/product/allproduct`)

      let Iphonematch = res.data.Allproduct.filter((products) => {
        return products.category === "iPhone"
      })
      setiPhoneProduct(Iphonematch);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    IphoneFetchApi();
  }, [])






  return (
    <div className='bg-[#FAFAFA]'>
      <div className="w-full px-4 py-8 bg-[#f9f9f9]">
        <div className="flex flex-wrap justify-center gap-6">

          <div className="flex flex-col items-center text-center w-[90px]">
            <BsPhoneFill className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">iPhone 16 Pro</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <MdPhoneIphone className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">iPhone 16</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <RiSimCardLine className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">iPhone 16e</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <BsPhone className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">iPhone 15</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <MdCompare className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Compare</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <BsEarbuds className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">AirPods</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <FaApple className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">AirTag</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <MdShoppingCart className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Accessories</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <SiApplemusic className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Apple Card</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <SiIos className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">iOS 18</div>
          </div>

          <div className="flex flex-col items-center text-center w-[90px]">
            <MdPhoneIphone className="text-[28px] text-black" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Shop iPhone</div>
          </div>

        </div>
      </div>
      <div className='bg-[#f5f5f7]'>
        <p className='text-[#1D1D1F] py-[16px] px-[10px] text-center cursor-pointer'>
          Now through June 18, get extra trade‑in credit toward a new iPhone <span className='text-[#0066CC]'>Shop iPhone</span>
        </p>
      </div>
      <div className='container w-full py-[40px] sm:py-[80px] '>
        <div className='Contain w-[90%] m-auto h-full pb-[30px]'>
          <div className='w-full  mx-auto flex flex-col md:flex-row  justify-between gap-4'>
            <h1 className='text-[60px] md:text-[80px] text-[#1D1D1F] font-semibold leading-tight sm:text-left'>iPhone</h1>
            <div className='w-full md:w-[300px] text-left'>
              <p className='text-[20px] md:text-[28px] text-[#1D1D1F] leading-snug font-[600]'>Designed to be loved.</p>
            </div>
          </div>
        </div>
        <div className='w-[90%] mx-auto rounded-[30px] overflow-hidden relative'>
          <video
            ref={videoRef}
            className='w-full h-[680px] object-cover'
            loop
            muted
            playsInline
          >
            <source src={iphonevideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={handleToggle}
            className='absolute bottom-4 right-4 bg-white/80 p-2 rounded-full text-black hover:bg-white transition'
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
        <div className='Get-Mac w-[90%] mx-auto md:py-[40px] pt-[40px]'>
          <h1 className='text-[#1D1D1F] md:text-[56px] font-[600] text-[28px] pb-[40px]'>Get to know iPhone.</h1>
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
                  <Card style={{ backgroundImage: `url(https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge_2x.jpg)` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center px-[30px]">
                      <h1 className='text-[20px] text-[#FFFFFF] font-[600] leading-[1]'>Apple Intelligence</h1>
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1] pt-[10px]'>AI-opening possibilities</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(https://www.apple.com/v/iphone/home/cb/images/overview/consider/camera__exi2qfijti0y_xlarge_2x.jpg)` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center px-[30px]">
                      <h1 className='text-[20px] text-[#FFFFFF] font-[600] leading-[1]'>Cutting-Edge Cameras</h1>
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1] pt-[10px]'>Picture your best Photos and videos.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(https://www.apple.com/v/iphone/home/cb/images/overview/consider/battery__2v7w6kmztvm2_xlarge_2x.jpg)` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  px-[30px]">
                      <h1 className='text-[20px] text-[#FFFFFF] font-[600] leading-[1]'>Chip and Battery Life</h1>
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1] pt-[10px]'>Fast that lasts.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(https://www.apple.com/v/iphone/home/cb/images/overview/consider/innovation__os9bmmo3mjee_xlarge_2x.jpg)` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center px-[30px]">
                      <h1 className='text-[20px] text-[#1D1D1F] font-[600] leading-[1]'>Innovation</h1>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1] pt-[10px]'>Beautiful and durable.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(https://www.apple.com/v/iphone/home/cb/images/overview/consider/environment__e3v3gj88dl6q_xlarge_2x.jpg)` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[20px] text-[#1D1D1F] font-[600] leading-[1]'>Environment</h1>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1] pt-[10px]'>Recycle.Reuse.Repeat.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(https://www.apple.com/v/iphone/home/cb/images/overview/consider/privacy__ckc0wa30o55y_xlarge_2x.jpg)` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[20px] text-[#FFFFFF] font-[600] leading-[1]'>Privacy</h1>
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1] pt-[10px]'>Your data.<br></br>Just where you want it.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(https://www.apple.com/v/iphone/home/cb/images/overview/consider/personalize__dwg8srggrbo2_xlarge_2x.jpg)` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[20px] text-[#FFFFFF] font-[600] leading-[1]'>Customize Your iPhone</h1>
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1] pt-[10px]'>Make it you.<br></br>Through and through.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(https://www.apple.com/v/iphone/home/cb/images/overview/consider/safety__bwp7rsowtjiu_xlarge_2x.jpg)` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[20px] text-[#FFFFFF] font-[600] leading-[1]'>Peace of Mind</h1>
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1] pt-[10px]'>Helpful feature.<br></br>On and off the grid.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className='w-[90%] mx-auto pt-[40px] md:py-[40px] flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <h1 className='text-[#1D1D1F] text-[28px] md:text-[56px] font-[600] md:text-left md:mb-0'>
            Explore the lineup.
          </h1>
        </div>
        <div className='w-full'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85.40%] m-auto "
          >
            <CarouselContent className="flex gap-x-7">
              {iPoneProduct.map((product, index) => {
                return (
                  <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[372px] lg:basis-auto my-2" key={index}>
                    <div className="slider w-full sm:w-[309px] md:w-[372px] mx-auto">
                      <Card className="shadow-none border-0 cursor-pointer w-full sm:w-[309px] md:w-[372px] h-auto mx-auto transform transition-transform duration-300 hover:scale-101 bg-white rounded-lg">
                        <CardContent className="flex flex-col items-center justify-center px-6 py-6 text-center">
                          <img src={`https://apple-web-be.onrender.com/Allproduct/${product.image[0]}`} alt={product.name} className="w-full object-contain mb-6" />
                          <div className="flex items-center justify-center space-x-2 mb-4 pb-[10px]">
                            {product.color && product.color.length > 0 ? (
                              product.color[0].split(',').map((colr, index) => (
                                <span key={index} className="w-[12px] h-[12px] rounded-full" style={{ backgroundColor: colr.trim() }} title={colr.trim()}></span>
                              ))
                            ) : (
                              <span className="text-gray-400 text-sm">No colors</span>
                            )}
                          </div>
                          <h1 className="text-[#1D1D1F] font-semibold text-[28px] mb-2 pb-[10px]">{product.name}</h1>
                          <p className="text-[#1D1D1F] text-[17px]  mb-1 pb-[10px]">{product.model}</p>
                          <p className="font-semibold text-lg mb-6">{`INR ${product.Price}.00`}</p>
                         <Link to={`/Description/${product._id}`}><button className="px-6 py-3 bg-[#0066CC] rounded-full text-white font-medium text-base mb-8 hover:bg-[#004A99] transition-colors duration-300 cursor-pointer">Buy Now</button></Link>
                          <hr className="w-full border-gray-300 mb-6" />
                          <p className="text-[#1D1D1F] font-semibold text-[28px] mb-1">{`${product.space.display} inches`}</p>
                          <p className="text-[#1D1D1F] text-[12px] mb-6 w-[150px]">{product.space.sortdescription}</p>
                          <div className="flex flex-col items-center gap-2 mb-4">
                            <img src="https://www.apple.com/v/mac/home/cg/images/overview/select/product_tile_icon_m4__dneah1uqjlme_large_2x.png" alt="Apple M4 chip" className="w-[38px] h-[56px]" />
                            <p className="text-[#1D1D1F] text-[12px]  text-center">{product.space.Processor}</p>
                          </div>
                          <div className="flex flex-col items-center gap-2 mb-4">
                            <img src="https://www.apple.com/v/mac/home/cg/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large_2x.png" alt="Apple Intelligence" className="w-[56px] h-[56px]" />
                            <p className="text-[#1D1D1F] text-[12px]  text-center">Apple Intelligence</p>
                          </div>
                          <div className="flex flex-col items-center gap-2 mb-4">
                            <img src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadpro13.gen7.camera_elevated_8b1ecd6e5.svg" alt="Apple M4 chip" className="w-[38px] h-[56px]" />
                            <p className="text-[#1D1D1F] text-[12px]  text-center w-[250px]">{product.Camera}</p>
                          </div>
                          <div className="flex flex-col items-center gap-2 mb-4">
                            <img src="https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large_2x.png" alt="Apple M4 chip" className="w-[38px] h-[56px]" />
                            <p className="text-[#1D1D1F] text-[12px]  text-center w-[200px]">{product.space.bettery}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className="w-[90%] mx-auto my-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-[#1D1D1F] text-[28px] md:text-[56px] font-[600] md:text-left">iPhone essentials.</h1>
            <div className="min-w-[300px] h-[50px] text-[17px] text-[#0066CC] flex gap-[20px] items-center">
              <h1 className="hover:underline cursor-pointer">All iPhone accessories</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f7] rounded-2xl text-center pt-6 px-4 pb-8 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-1">iPhone accessories</h2>
                <p className="text-[#6e6e73] text-[17px] mb-3">Explore colorful cases, USB‑C power adapters,MagSafe accessories, and more.</p>
                <a href="https://www.apple.com/us/shop/goto/mac/accessories" className="text-[#0066cc] text-[17px] font-medium hover:underline" target="_blank" rel="noopener noreferrer">Shop iPhone accessories</a>
              </div>
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/essentials/magsafe__dac2joyve8wi_xlarge_2x.jpg" alt="Mac Accessories" className="mt-6 rounded-b-2xl w-full object-cover" />
            </div>
            <div className="bg-[#f5f5f7] rounded-2xl text-center pt-6 px-4 pb-8 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-1">AirTag</h2>
                <p className="text-[#6e6e73] text-[17px] mb-3 ">Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app.</p>
                <a href="https://www.apple.com/mac/studio-display/" className="text-[#0066cc] text-[17px] font-medium hover:underline" target="_blank" rel="noopener noreferrer">By</a>
              </div>
              <img src="https://www.apple.com/v/iphone/home/cb/images/overview/essentials/airtag__furx99ax8rm2_xlarge_2x.jpg" alt="Studio Display" className="mt-6 rounded-b-2xl w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="w-[95%] m-auto py-16 px-4 md:px-12">
          <h1 className="text-[56px] md:text-5xl font-semibold text-[#1d1d1f] mb-[53px]">
            iPhone
          </h1>

          <div className="flex gap-[40px] sm:grid-cols-2 md:grid-cols-3 gap-8 text-[#1d1d1f]">
            {/* Column 1: Explore Mac */}
            <div>
              <h3 className="text-[#6E6E73] text-[14px] mb-2">Explore iPhone</h3>
              <ul className="space-y-1 font-semibold text-[20px]">
                <li className='cursor-pointer text-[#333336]'>Explore All iPhone</li>
                <li className='cursor-pointer text-[#333336]'>iPhone 16 Pro</li>
                <li className='cursor-pointer text-[#333336]'>iPhone 16 </li>
                <li className='cursor-pointer text-[#333336]'>iPhone 16e</li>
                <li className='cursor-pointer text-[#333336]'>iPhone 15</li>
              </ul>
              <ul className="space-y-2 mt-4 font-normal text-[13px]">
                <li className='cursor-pointer text-[#333336]'>Compare iPhone</li>
                <li className='cursor-pointer text-[#333336]'>Switch from Android</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#6E6E73]  text-[14px] mb-2">Shop iPhone</h3>
              <ul className="space-y-1 text-[14px] font-[500] text-[#333336]">
                <li className='cursor-pointer text-[#333336]'>Shop iPhone</li>
                <li className='cursor-pointer text-[#333336]'>iPhone Accessories</li>
                <li className='cursor-pointer text-[#333336]'>Apple Trade In</li>
                <li className='cursor-pointer text-[#333336]'>Carriern Deals at Apple</li>
                <li className='cursor-pointer text-[#333336]'>Financing</li>
              </ul>
            </div>

            <div>
              <h3 className="ttext-[#6E6E73] text-[14px] mb-2">More from iPhone</h3>
              <ul className="space-y-1 text-[14px]  font-[500]">
                <li className='cursor-pointer text-[#333336]'>iPhone Support</li>
                <li className='cursor-pointer text-[#333336]'>AppleCare+ for iPhone</li>
                <li className='cursor-pointer text-[#333336]'>iOS 18</li>
                <li className='cursor-pointer text-[#333336]'>Apple Intelligence</li>
                <li className='cursor-pointer text-[#333336]'>Apps by Apple</li>
                <li className='cursor-pointer text-[#333336]'>iCloud+</li>
                <li className='cursor-pointer text-[#333336]'>Wallet,Pay,Card</li>
                <li className='cursor-pointer text-[#333336]'>Education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Iphone
