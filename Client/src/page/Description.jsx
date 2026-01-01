import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Commentsec from "../Component/Comment"

function Description() {

    let { User } = useSelector((store) => store.auth);

    let { pid } = useParams();
    let [productdescription, setproductdescription] = useState({});
    let [commentText, setCommentText] = useState("");
    let [Comments, setComments] = useState([]);
    let [SelectedColor, setSelectedColor] = useState("");
    let [Error, setError] = useState("");

    async function description() {
        try {
            let res = await axios.get(`${import.meta.env.VITE_Base_URL}/product/description/${pid}`)
            setproductdescription(res.data.singleproduct);
        } catch (error) {
            console.log(error);
        }
    }

    async function showComment() {
        try {
            let res = await axios.get(`${import.meta.env.VITE_Base_URL}/comment/getallcomment/${pid}`, {
                withCredentials: true
            })
            setComments(res.data.allcommentonproduct);
        } catch (error) {
            console.log(error)
        }
    }

    async function Comment() {
        try {
            let res = await axios.post(`${import.meta.env.VITE_Base_URL}/comment/commentcreate/${pid}`, {
                Comment: commentText
            }, {
                withCredentials: true
            })
            showComment()
            setCommentText("");
        } catch (error) {
            console.log(error);
        }
    }

    let navigate = useNavigate();
    async function productorder() {
        try {
            let res = await axios.post(`${import.meta.env.VITE_Base_URL}/order/orderplace/${User._id}/${pid}`, {
                selectedColor: SelectedColor
            }, {
                withCredentials: true
            })
            console.log(res)
            navigate("/bag");
        } catch (error) {
            console.log(error)
            navigate("/Signin");
            setError(error.response.data);
        }
    }

    useEffect(() => {
        description();
        showComment();
    }, [Comments]);

    return (
        <div>
            {/* Promo Banner */}
            <div className='bg-[#f5f5f7] w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl shadow-sm mb-[50px]'>

                <div className='text-center'>
                    <p className='text-[#1D1D1F] px-4 cursor-pointer font-medium text-sm md:text-base'>
                        Carrier Deals at Apple
                    </p>
                </div>

                <div className='flex items-center gap-2 px-4 text-center'>
                    <img src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/desktop-bfe-iphone-step1-bugatti-banner-att?wid=50&hei=50&fmt=png-alpha&.v=TzV1eGptMmlJaEZCSkhzQ3pIcjZsZTZOS0o0MXlmT1JlbEw0UWJWRHBnMFVqVVhQVy9BdmxxWjFyYzZKOU5acDNOTU5ubi96dGN2SkpGNDlDVXBpdjhZaFBjb0p6TlNqdU1Rc0ZnV0VEbHlqYjRHdm5vVTFpYUpsdndFekZZVXE' alt='AT&T' className='w-6 h-6' />
                    <p className='text-[#1D1D1F] cursor-pointer text-sm md:text-base'>Get up to $441 in bill credit</p>
                </div>

                <div className='flex items-center gap-2 px-4 text-center'>
                    <img src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/desktop-bfe-iphone-step1-bugatti-banner-tmobile?wid=50&hei=50&fmt=png-alpha&.v=TzV1eGptMmlJaEZCSkhzQ3pIcjZsZTZOS0o0MXlmT1JlbEw0UWJWRHBnMjZEQTlXQkZmamdrZlJEMGxpL3BSNjV1Q3Jhdi9QR3k0ei9MZEFrRU5qL1o4TndFSGFWdWZMa21CRXlrUm45elkrcHM0Z2F3TEpiQXBnRGg5bjhjSWg' alt='T-Mobile' className='w-6 h-6' />
                    <p className='text-[#1D1D1F] cursor-pointer text-sm md:text-base'>Save up to $1000 after trade in</p>
                </div>

                <div className='px-4 text-center'>
                    <span className='text-[#0066CC] cursor-pointer font-semibold hover:underline text-sm md:text-base'>
                        Shop iPhone
                    </span>
                </div>
            </div>

            {/* Product Title */}
            <div className='Get-Mac w-[90%] mx-auto md:py-[40px] pt-[40px]'>
                <h1 className='text-[#1D1D1F] md:text-[56px] font-[600] text-[28px] sm:pb-[40px]'>Buy {productdescription.name}</h1>
            </div>

            {/* Product Main Section */}
            <div className="w-full">
                <div className="w-[95%] max-w-[1440px] m-auto flex flex-col lg:flex-row mb-[40px]">
                    {/* Image Carousel */}
                    <div className="w-full lg:w-[60%] mx-auto">
                        <div className="relative w-full px-4">
                            <Carousel opts={{ align: "start", loop: false }} className="w-full">
                                <CarouselContent>
                                    {productdescription?.image?.map((img, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="w-full"
                                        >
                                            <Card className="border-0 shadow-none bg-transparent w-full">
                                                <CardContent className="w-full flex items-center justify-center">
                                                    <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9]">
                                                        <img
                                                            src={`https://apple-web-be.onrender.com/Allproduct/${img}`}
                                                            alt={`product image ${index + 1}`}
                                                            className="w-full h-full object-contain rounded-[12px]"
                                                        />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Navigation Buttons */}
                                <CarouselPrevious className="absolute top-1/2 -left-[20%] -translate-y-1/2 z-10 bg-white/80 rounded-full shadow hover:bg-white transition" />
                                <CarouselNext className="absolute top-1/2 right-1 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow hover:bg-white transition" />
                            </Carousel>
                        </div>
                    </div>
                    <div className="w-full lg:w-[30%] bg-white md:py-10 md:px-4 py-2 px-2 space-y-6">
                        <h1 className="text-[#1D1D1F] text-[24px] font-bold">Model.<span className="text-[#86868b] font-normal"> Which is best for you?</span></h1>

                        <div className="border border-[#d2d2d7] rounded-xl p-4 cursor-pointer hover:border-blue-500 flex items-center justify-between">
                            <div>
                                <h2 className="text-[17px] text-[#1D1D1F] font-medium">{productdescription.name}</h2>
                                <p className="text-[#6e6e73] text-sm">{`${productdescription.space?.display}-inch display`}</p>
                            </div>
                            <div>
                                <p className="text-[#6e6e73] text-sm mt-2">INR {productdescription.Price}</p>
                            </div>
                        </div>

                        <div className="bg-[#f5f5f7] rounded-xl p-4 text-[#1d1d1f] text-sm">
                            <p className="font-semibold">Need help choosing a model?</p>
                            <p className="text-[#6e6e73]">Explore the differences in screen size and battery life.</p>
                        </div>

                        {/* Finish (Color Section with Dropdown) */}
                        <h1 className="text-[#1D1D1F] text-[24px] font-bold">Finish. <span className="text-[#86868b] font-normal">Pick your favorite.</span></h1>
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                {productdescription.color && productdescription.color.length > 0 ? (
                                    productdescription.color[0].split(',').map((colr, index) => (
                                        <span key={index} className="w-[20px] h-[20px] rounded-full border" style={{ backgroundColor: colr.trim() }} title={colr.trim()}></span>
                                    ))
                                ) : (
                                    <span className="text-gray-400 text-sm">No colors</span>
                                )}
                            </div>
                            <select
                                value={SelectedColor}
                                onChange={(e) => { setSelectedColor(e.target.value) }}
                                className={`w-full px-4 py-2 rounded-xl bg-white text-[#1D1D1F] focus:outline-none focus:ring-2 ${Error
                                    ? 'border border-red-500 focus:ring-red-500'
                                    : 'border border-[#d2d2d7] focus:ring-[#0066CC]'
                                    }`}
                            >
                                <option value="">Select a color</option>
                                {productdescription?.color &&
                                    productdescription.color[0]
                                        .split(',')
                                        .map((colr, index) => (
                                            <option key={index} value={colr.trim()}>
                                                {colr.trim()}
                                            </option>
                                        ))}
                            </select>
                        </div>

                        <h1 className="text-[#1D1D1F] text-[24px] font-bold">Model.<span className="text-[#86868b] font-normal"> Storage options.</span></h1>
                        <div className="border border-[#d2d2d7] rounded-xl p-4 cursor-pointer hover:border-blue-500 h-auto flex items-center justify-between ">
                            {productdescription.space?.storage === "NA"
                                ? <h2 className="text-[17px] text-[#1D1D1F] font-medium">{productdescription.name}</h2>
                                : <h2 className="text-[17px] text-[#1D1D1F] font-medium">{productdescription.space?.storage}GB</h2>}
                            <p className="text-[#6e6e73] text-sm ">INR {productdescription.Price}</p>
                        </div>

                        <div>
                            <p className='text-[14px] text-[#1D1D1F]'>{productdescription.description}</p>
                        </div>
                        <button onClick={productorder} className="px-6 py-3 bg-[#0066CC] rounded-full text-white font-medium text-base hover:bg-[#004A99] transition-colors duration-300 cursor-pointer">Add to Cart</button>
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <div className="w-[90%] max-w-[1440px] mx-auto mt-12 p-6 rounded-2xl bg-[#f5f5f7] shadow-md mb-[50px]">
                <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1D1D1F] mb-6">
                    Customer Reviews & Comments
                </h2>

                {/* Input Box */}
                <div className="flex items-start gap-4 mb-8">
                    <div className="min-w-[40px] min-h-[40px] rounded-full bg-[#ccc] flex items-center justify-center text-white font-semibold text-sm md:text-base">R</div>
                    <div className="flex-1">
                        <textarea
                            rows="3"
                            value={commentText}
                            onChange={(e) => { setCommentText(e.target.value) }}
                            placeholder="Share your thoughts about this product..."
                            className="w-full p-3 rounded-xl border border-[#d2d2d7] bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC] transition-all resize-none placeholder:text-[#999]"
                        ></textarea>
                        <p className="text-gray-800 small">{200 - commentText.length} characters remaining</p>
                        <div className="flex justify-end mt-2">
                            <button type="button" onClick={Comment} className="bg-[#0066CC] text-white font-medium px-6 py-2 rounded-full hover:bg-[#004A99] transition-colors">Post</button>
                        </div>
                    </div>
                </div>

                {/* Comments List */}
                <h5 className='pb-[10px]'>Comments ({Comments.length})</h5>
                {Comments.length === 0 ? (
                    <p className='text-center'>No comments yet!</p>
                ) : (Comments.map((comment) => (
                    <Commentsec key={comment._id} comments={comment} />
                )))}
            </div>
        </div>
    )
}

export default Description;
