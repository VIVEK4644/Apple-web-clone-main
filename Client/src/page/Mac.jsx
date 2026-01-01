import React, { useEffect, useRef, useState } from 'react'
import { FaLaptop, FaDesktop, FaHeadphones, FaPause, FaPlay } from "react-icons/fa";
import { MdCompare } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";
import { PiMonitorDuotone } from "react-icons/pi";
import { SiMacos } from "react-icons/si";
import macvideo from "../assets/Video/xlarge_2x.mp4";
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import iphonecard40 from "../assets/Image/mac_intelligence_siri__do2ke43yic02_xlarge_2x.jpg";
import ipadcard40 from "../assets/Image/mac_performance__dh5hyac1zf8m_xlarge_2x.jpg";
import i40 from "../assets/Image/mac_iphone__gh1tblkt6bqm_xlarge_2x.jpg";
import iphnoe40 from "../assets/Image/mac_compatibility__cu59oukz81ci_xlarge_2x.jpg";
import gov from "../assets/Image/mac_security__gfwda10khdym_xlarge_2x.jpg";
import vite from "../assets/Image/mac_durability__epiwcuk7zkeq_xlarge_2x.jpg"
import axios from 'axios';
import { Link } from 'react-router';

function Mac() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [Macbook, setmackbook] = useState([]);

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


  async function MacApi() {
    try {
      let res = await axios.get(`${import.meta.env.VITE_Base_URL}/product/allproduct`);

      let Macfilltermatch = res.data.Allproduct.filter((products) => {
        return products.category === "Mac"
      })
      setmackbook(Macfilltermatch);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    MacApi();
  }, [])
  return (
    <div className='bg-[#FAFAFA]'>
      <div className="w-full px-4 py-8 bg-[#FAFAFC]">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center text-center w-[90px]">
            <FaLaptop className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">MacBook Air</div>
            <span className="text-[11px] text-[#bf4800] mt-0.5">New</span>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <FaLaptop className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">MacBook Pro</div>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <FaDesktop className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">iMac</div>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <FaDesktop className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Mac mini</div>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <FaDesktop className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Mac Studio</div>
            <span className="text-[11px] text-[#bf4800] mt-0.5">New</span>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <FaDesktop className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Mac Pro</div>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <GoQuestion className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Help Me Choose</div>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <MdCompare className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Compare</div>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <PiMonitorDuotone className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Displays</div>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <FaHeadphones className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Accessories</div>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <SiMacos className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Sequoia</div>
          </div>
          <div className="flex flex-col items-center text-center w-[90px]">
            <AiOutlineShoppingCart className="text-2xl" />
            <div className="text-[13px] text-[#1d1d1f] font-medium mt-1">Shop Mac</div>
          </div>
        </div>
      </div>
      <div className='bg-[#f5f5f7]'>
        <p className='text-[#1D1D1F] py-[16px] text-center cursor-pointer'>
          Buy Mac with education savings. <span className='text-[#0066CC]'>Shop</span>
        </p>
      </div>
      <div className='container w-full py-[40px] sm:py-[80px]'>
        <div className='Contain w-[90%] m-auto h-full pb-[30px]'>
          <div className='w-full  mx-auto flex flex-col md:flex-row  justify-between gap-4'>

            <h1 className='text-[60px] md:text-[80px] text-[#1D1D1F] font-semibold leading-tight sm:text-left'>
              Mac
            </h1>

            <div className='w-full md:w-[300px] text-left'>
              <p className='text-[20px] md:text-[28px] text-[#1D1D1F] leading-snug font-[600]'>
                If you can dream it, Mac can do it.
              </p>
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
            <source src={macvideo} type="video/mp4" />
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
          <h1 className='text-[#1D1D1F] md:text-[56px] font-[600] text-[28px] pb-[40px]'>Get to know Mac.</h1>
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
                    <CardContent className="flex flex-col items-left justify-center px-[30px]">
                      <p className='text-[18px] font-[400] text-[#1D1D1F] font-[600]'>Apple Interlligence and macOs</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${ipadcard40})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center px-[30px]">
                      <h1 className='text-[20px] text-[#FFFFFF] font-[600] leading-[1]'>Performance and Battery Life</h1>
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1] pt-[10px]'>Go Fast.Go far.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${i40})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center px-[30px]">
                      <h1 className='text-[20px] text-[#1D1D1F] font-[600] leading-[1]'>Mac and iPhone</h1>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1] pt-[10px]'>Dream team.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${iphnoe40})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  px-[30px]">
                      <h1 className='text-[20px] text-[#1D1D1F] font-[600] leading-[1]'>Compatibility</h1>
                      <h1 className='text-[28px] text-[#1D1D1F] font-[600] leading-[1] pt-[10px]'>Mac runs your<br></br>favorite apps.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${gov})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center px-[30px]">
                      <h1 className='text-[20px] text-[#FFFFFF] font-[600] leading-[1]'>Privacy and Security</h1>
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1] pt-[10px]'>Your business is nobody else's.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[400px] lg:basis-auto  mb-[10px] mt-[10px]">
                <div className="slider w-full sm:w-[309px] md:w-[400px]  mx-auto">
                  <Card style={{ backgroundImage: `url(${vite})` }} className=" border-0 shadow-md cursor-pointer w-full sm:w-[309px] md:w-[400px] h-[500px] mx-auto transform bg-cover bg-center  transition-shadow  transition-transform duration-300 hover:scale-101 hover:shadow-md  ">
                    <CardContent className="flex flex-col items-left justify-center  py-[10px] px-[30px]">
                      <h1 className='text-[20px] text-[#FFFFFF] font-[600] leading-[1]'>Durability</h1>
                      <h1 className='text-[28px] text-[#FFFFFF] font-[600] leading-[1] pt-[10px]'>Built to stand the test of time.</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        <div className='Get-Mac w-[90%] mx-auto md:py-[40px] pt-[40px]'>
          <h1 className='text-[#1D1D1F] md:text-[56px] font-[600] text-[28px] pb-[40px]'>Help me choose.</h1>
        </div>
        <div className='w-full bg-[#f5f5f7] py-16 rounded-3xl'>
          <div className='w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>
            <div className='flex-1 text-center md:text-left'>
              <h2 className='text-[28px] sm:text-[36px] md:text-[40px] text-[#1D1D1F] font-semibold mb-6'>
                Answer a few questions to find <br className='hidden md:block' />
                the best Mac for you.
              </h2>
              <button className='bg-[#0071e3] hover:bg-[#005bb5] text-white py-2 px-6 rounded-full text-[16px] font-medium'>
                Get started
              </button>
            </div>
            <div className='flex-1 flex items-center justify-center gap-6 flex-wrap'>
              <img
                src='https://www.apple.com/v/mac/best-mac/d/assets/images/help-me-choose-ww/overview/hero_imac__bz56zn289jzm_large_2x.png'
                alt='iMac'
                className='w-[150px] sm:w-[180px] md:w-[200px]'
              />
              <img
                src='https://www.apple.com/v/mac/best-mac/d/assets/images/help-me-choose-ww/overview/hero_mbp__cp7rtok0ohpy_large_2x.png'
                alt='MacBook Pro'
                className='w-[150px] sm:w-[180px] md:w-[200px]'
              />
              <img
                src='https://www.apple.com/v/mac/best-mac/d/assets/images/help-me-choose-ww/overview/hero_mac_studio__buhe8rogw44i_large_2x.png'
                alt='Mac Studio'
                className='w-[150px] sm:w-[180px] md:w-[200px]'
              />
            </div>
          </div>
        </div>
        <div className='w-[90%] mx-auto pt-[40px] md:py-[40px] flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <h1 className='text-[#1D1D1F] text-[28px] md:text-[56px] font-[600] md:text-left md:mb-0'>
            Explore the lineup.
          </h1>
          <div className='min-w-[300px] h-[50px]  text-[17px] text-[#0066CC] flex gap-[20px] items-center '>
            <h1 className='hover:underline cursor-pointer'>Help me choose</h1>
            <h1 className='hover:underline cursor-pointer'>Compare all models</h1>
          </div>
        </div>
        <div className='w-full h-[1300px]'>
          <Carousel opts={{
            align: "start",
            loop: false,
          }}
            className="w-[85.40%] m-auto "
          >
            <CarouselContent className="flex gap-x-7">
              {Macbook.map((product, index) => {
                return (
                  <CarouselItem className="flex-shrink-0 w-full sm:w-[309px] md:w-[372px] lg:basis-auto my-2" key={index}>
                    <div className="slider w-full sm:w-[309px] md:w-[372px] mx-auto">
                      <Card className="shadow-none border-0 cursor-pointer w-full sm:w-[309px] md:w-[372px] h-auto mx-auto transform transition-transform duration-300 hover:scale-101 bg-white rounded-lg">
                        <CardContent className="flex flex-col items-center justify-center px-6 py-6 text-center">
                          <img src={`https://apple-web-be.onrender.com/Allproduct/${product.image[0]}`} alt={product.name} className="w-full object-contain mb-6" />
                          <div className="flex items-center justify-center space-x-2 mb-4">
                            {product.color && product.color.length > 0 ? (
                              product.color[0].split(',').map((colr, index) => (
                                <span key={index} className="w-[15px] h-[15px] rounded-full" style={{ backgroundColor: colr.trim() }} title={colr.trim()}></span>
                              ))
                            ) : (
                              <span className="text-gray-400 text-sm">No colors</span>
                            )}
                          </div>
                          <h1 className="text-[#1D1D1F] font-semibold text-[28px] mb-2">{product.name}</h1>
                          <p className="text-[#1D1D1F] text-[17px] font-medium mb-1">{product.model}</p>
                          <p className="text-[#1D1D1F] text-[17px] font mb-4 max-w-[320px] mx-auto">Strikingly thin and fast so you can work, play, or create anywhere.</p>
                          <p className="font-semibold text-lg mb-6">{`INR ${product.Price}.00`}</p>
                          <Link to={`/Description/${product._id}`}><button className="px-6 py-3 bg-[#0066CC] rounded-full text-white font-medium text-base mb-8 hover:bg-[#004A99] transition-colors duration-300 cursor-pointer">Buy Now</button></Link>
                          <hr className="w-full border-gray-300 mb-6" />
                          <p className="text-[#1D1D1F] font-semibold text-[28px] mb-1">{`${product.space.display} inches`}</p>
                          <p className="text-[#1D1D1F] text-[12px] mb-6">Liquid Retina XDR display with up to 1600 nits peak brightness, 1,000,000:1 contrast ratio, and up to 120Hz refresh rates.</p>
                          <div className="flex flex-col items-center gap-2 mb-4">
                            <img src="https://www.apple.com/v/mac/home/cg/images/overview/select/product_tile_icon_m4__dneah1uqjlme_large_2x.png" alt="Apple M4 chip" className="w-[38px] h-[56px]" />
                            <p className="text-[#1D1D1F] text-[12px]  text-center">{product.space.Processor}</p>
                          </div>
                          <div className="flex flex-col items-center gap-2 mb-4">
                            <img src="https://www.apple.com/v/mac/home/cg/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large_2x.png" alt="Apple Intelligence" className="w-[56px] h-[56px]" />
                            <p className="text-[#1D1D1F] text-[12px]  text-center">Apple Intelligence</p>
                          </div>
                          <div className="mb-4 text-center">
                            <p className='text-[12px]  text-[#1D1D1F] text-center'>Up to</p>
                            <h2 className="text-[28px] text-[#1D1D1F] font-semibold text-gray-800">{`${product.space.bettery} Hours`}</h2>
                            <p className="text-[12px]  text-[#1D1D1F] text-center">battery life</p>
                          </div>
                          {(() => {
                            const otherData = product.space.otherfeature[0].split(',');
                            const weight = otherData[0];
                            const ports = otherData[1];
                            return (
                              <>
                                <div className="mb-4 text-center">
                                  <p className="text-[#1D1D1F] font-medium text-[28px] pb-[10px]">{ports} ports</p>
                                  <p className="text-[#1D1D1F] text-[12px]">2x Thunderbolt 4 (USB‑C), headphone jack, MagSafe</p>
                                </div>
                                <div className="mb-4 text-center">
                                  <p className="text-[28px] text-[#1D1D1F] font-medium">{weight}</p>
                                  <p className="text-[12px] text-[#1D1D1F]">Weight</p>
                                </div>
                              </>
                            );
                          })()}
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
            <h1 className="text-[#1D1D1F] text-[28px] md:text-[56px] font-[600] md:text-left">Mac essentials.</h1>
            <div className="min-w-[300px] h-[50px] text-[17px] text-[#0066CC] flex gap-[20px] items-center">
              <h1 className="hover:underline cursor-pointer">Help me choose</h1>
              <h1 className="hover:underline cursor-pointer">Compare all models</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f7] rounded-2xl text-center pt-6 px-4 pb-8 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-1">Mac accessories</h2>
                <p className="text-[#6e6e73] text-[17px] mb-3">Explore keyboards, mice, and other essentials.</p>
                <a href="https://www.apple.com/us/shop/goto/mac/accessories" className="text-[#0066cc] text-[17px] font-medium hover:underline" target="_blank" rel="noopener noreferrer">Shop Mac accessories &rsaquo;</a>
              </div>
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/essentials/essentials_accessories__dglhsic54owi_xlarge_2x.jpg" alt="Mac Accessories" className="mt-6 rounded-b-2xl w-full object-cover" />
            </div>
            <div className="bg-[#f5f5f7] rounded-2xl text-center pt-6 px-4 pb-8 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-1">Studio Display</h2>
                <p className="text-[#6e6e73] text-[17px] mb-3">The 27-inch 5K Retina display pairs beautifully with any Mac.</p>
                <a href="https://www.apple.com/mac/studio-display/" className="text-[#0066cc] text-[17px] font-medium hover:underline" target="_blank" rel="noopener noreferrer">Learn more &rsaquo;</a>
              </div>
              <img src="https://www.apple.com/v/mac/home/cg/images/overview/essentials/essentials_display__bk3i351qm0c2_xlarge_2x.jpg" alt="Studio Display" className="mt-6 rounded-b-2xl w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="w-[95%] m-auto py-16 px-4 md:px-12">
          <h1 className="text-[56px] md:text-5xl font-semibold text-[#1d1d1f] mb-[53px]">
            Mac
          </h1>

          <div className="flex gap-[40px] sm:grid-cols-2 md:grid-cols-3 gap-8 text-[#1d1d1f]">
            {/* Column 1: Explore Mac */}
            <div>
              <h3 className="text-[#6E6E73] text-[14px] mb-2">Explore Mac</h3>
              <ul className="space-y-1 font-semibold text-[20px]">
                <li className='cursor-pointer text-[#333336]'>Explore All Mac</li>
                <li className='cursor-pointer text-[#333336]'>MacBook Air</li>
                <li className='cursor-pointer text-[#333336]'>MacBook Pro</li>
                <li className='cursor-pointer text-[#333336]'>iMac</li>
                <li className='cursor-pointer text-[#333336]'>Mac mini</li>
                <li className='cursor-pointer text-[#333336]'>Mac Studio</li>
                <li className='cursor-pointer text-[#333336]'>Mac Pro</li>
                <li className='cursor-pointer text-[#333336]'>Displays</li>
              </ul>
              <ul className="space-y-2 mt-4 font-normal text-[13px]">
                <li className='cursor-pointer text-[#333336]'>Compare Mac</li>
                <li className='cursor-pointer text-[#333336]'>Switch from PC to Mac</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#6E6E73]  text-[14px] mb-2">Shop Mac</h3>
              <ul className="space-y-1 text-[14px] font-[500] text-[#333336]">
                <li className='cursor-pointer text-[#333336]'>Shop Mac</li>
                <li className='cursor-pointer text-[#333336]'>Help Me Choose</li>
                <li className='cursor-pointer text-[#333336]'>Mac Accessories</li>
                <li className='cursor-pointer text-[#333336]'>Apple Trade In</li>
                <li className='cursor-pointer text-[#333336]'>Financing</li>
              </ul>
            </div>

            <div>
              <h3 className="ttext-[#6E6E73] text-[14px] mb-2">More from Mac</h3>
              <ul className="space-y-1 text-[14px]  font-[500]">
                <li className='cursor-pointer text-[#333336]'>Mac Support</li>
                <li className='cursor-pointer text-[#333336]'>AppleCare+ for Mac</li>
                <li className='cursor-pointer text-[#333336]'>macOS Sequoia</li>
                <li className='cursor-pointer text-[#333336]'>Apple Intelligence</li>
                <li className='cursor-pointer text-[#333336]'>Apps by Apple</li>
                <li className='cursor-pointer text-[#333336]'>Continuity</li>
                <li className='cursor-pointer text-[#333336]'>iCloud+</li>
                <li className='cursor-pointer text-[#333336]'>Mac for Business</li>
                <li className='cursor-pointer text-[#333336]'>Education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mac;
