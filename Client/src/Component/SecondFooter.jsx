import React from 'react'

function SecondFooter() {
    return (
        <div className='w-full'>
            <div className='max-w-[995px] mx-auto p-5'>
                <h1 className='text-[17px] py-[10px] text-[#1D1D1F]'>Need some help? <span className='underline text-[#0066CC]'>Chat now</span> or call 1-800-MY-APPLE.</h1>
            </div>
            <div className="w-full bg-[#F5F5F7]">
                <div className="footer max-w-[995px] mx-auto p-5">
                    <p className="text-[12px] text-[#0000008F] py-[11px] border-b border-[#d2d2d7]">
                        The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our
                        <span className="underline text-[#000000B8]"> Security Policy</span>
                    </p>

                    <div className="pt-4 text-[12px] text-[#0000008F]">
                        <p className="text-center sm:text-left pb-2">More ways to shop:<span className='underline text-[#0066CC]'> Find an Apple Store</span> or <span className='underline text-[#0066CC]'> other retailer</span> near you. Or call 1‑800‑MY‑APPLE.</p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2 text-center sm:text-left">
                            <div className="flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1">
                                <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
                                <span className='cursor-pointer text-[#000000b8] hover:underline'>Privacy Policy</span>
                                <span>|</span>
                                <span className='cursor-pointer text-[#000000b8] hover:underline'>Terms of Use</span>
                                <span>|</span>
                                <span className='cursor-pointer text-[#000000b8] hover:underline'>Sales and Refunds</span>
                                <span>|</span>
                                <span className='cursor-pointer text-[#000000b8] hover:underline'>Legal</span>
                                <span>|</span>
                                <span className='cursor-pointer text-[#000000b8] hover:underline'>Site Map</span>
                            </div>
                            <div className="text-center sm:text-right text-[#000000b8] ">
                                <p>United States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SecondFooter
