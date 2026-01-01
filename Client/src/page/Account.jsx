import React, { useState } from 'react';
import { FaApple, FaUser } from 'react-icons/fa';
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { Link } from 'react-router';
import { useSelector } from 'react-redux';

function Account() {
    let { User } = useSelector((store) => store.auth);
    return (
        <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
            <div className="max-w-4xl mx-auto px-4 py-10">
                {/* Top Header */}
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-xl font-medium">Account</h2>
                </div>
                <h1 className="text-3xl font-semibold mt-6">Hi, {User.UserName}</h1>
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-2">You are not currently signed in to any devices.</h2>
                    <p className="text-gray-600">Don’t see your device here? To link a device or make changes, view your{' '}
                        <a href="#" className="text-blue-600 hover:underline">Apple Account settings</a>.
                    </p>
                </div>

                {/* Trade-in Info with Icon */}
                <div className="mt-10 border-t pt-6">
                    <div className="flex items-start gap-3">
                        <FaUser className="text-2xl text-gray-700 mt-1" />
                        <p className="text-gray-700">See the trade-in value of your device instantly. Trade it in for credit toward a new purchase,an Apple Store Gift Card or recycle it for free with Apple Trade In.{' '}
                            <a href="#" className="text-blue-600 hover:underline">See how it works</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto mb-[60px]">
                <Carousel
                    opts={{ align: "start", loop: false }}
                    className="w-[85.40%] m-auto"
                >
                    <CarouselContent className="flex gap-x-7">

                        {/* Card 1 - Apple Account Balance */}
                        <CarouselItem className="flex-shrink-0 w-full sm:w-[300px] md:w-[360px] lg:basis-auto mb-[10px] mt-[10px]">
                            <Card className="border-0 shadow-md cursor-pointer h-[240px] px-6 py-5">
                                <CardContent className="p-0">
                                    <h1 className="text-[20px] font-[600] text-[#1D1D1F]">Your Apple Account Balance: $0.00</h1>
                                    <p className="text-gray-600 mt-2">Redeem Apple Gift Cards into your account or add money directly anytime.Then use your balance to buy all things Apple — products, accessories,apps, games, music, movies, TV shows, iCloud, and more.</p>
                                    <a href="#" className="text-[#0071E3] font-medium mt-3 inline-block">Manage balance +</a>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        {/* Card 2 - Your Orders */}
                        <CarouselItem className="flex-shrink-0 w-full sm:w-[300px] md:w-[360px] lg:basis-auto mb-[10px] mt-[10px]">
                            <Card className="border-0 shadow-md cursor-pointer h-[240px] px-6 py-5">
                                <CardContent className="p-0">
                                    <h1 className="text-[20px] font-[600] text-[#1D1D1F]">Your Orders</h1>
                                    <p className="text-gray-600 mt-2">Track, modify, or cancel an order or make a return.</p>
                                    <Link to={"/bag"}><p className="text-[#0071E3] font-medium mt-3 inline-block">See your order history &gt;</p></Link>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="flex-shrink-0 w-full sm:w-[300px] md:w-[360px] lg:basis-auto mb-[10px] mt-[10px]">
                            <Card className="border-0 shadow-md cursor-pointer h-[240px] px-6 py-5">
                                <CardContent className="p-0">
                                    <h1 className="text-[20px] font-[600] text-[#1D1D1F]">Your Saves</h1>
                                    <p className="text-gray-600 mt-2">Whether you’re shopping online or in the Apple Store, you can easily save products you’re interested in and follow up on your progress here.</p>
                                    <a href="#" className="text-[#0071E3] font-medium mt-3 inline-block">See Your Saves &gt;</a>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                </Carousel>
            </div>
           
        </div>
    );
}

export default Account;
