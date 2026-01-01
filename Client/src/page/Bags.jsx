import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router';

function Bags() {
  const { User } = useSelector((store) => store.auth);
  const [allorder, setallorder] = useState([]);
  const [Subtotal, setSubtotal] = useState()

  async function subtotal() {
    try {
      let res = await axios.get(`${import.meta.env.VITE_Base_URL}/order/amount/${User._id}`, {
        withCredentials: true
      })
      setSubtotal(res.data.subtotal);
    } catch (error) {
      console.log(error);
    }
  }

  async function getallorder() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_Base_URL}/order/totalorder/${User._id}`, {
        withCredentials: true,
      });
      subtotal();
      setallorder(res.data.Totalorder);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(orderId, pid) {
    console.log(orderId, pid)
    try {
      let res = await axios.delete(`${import.meta.env.VITE_Base_URL}/order/deleteorder/${User._id}/${pid}/${orderId}`, {
        withCredentials: true,
      });
      getallorder();
    } catch (error) {
      console.error(error);
    }
  }
  async function productorder(quantity, productId) {
    try {
      let res = await axios.post(`${import.meta.env.VITE_Base_URL}/order/orderplace/${User._id}/${productId}`, {
        quantity
      }, {
        withCredentials: true
      })
      getallorder();
    } catch (error) {
      console.log(error)
    }
  }







  useEffect(() => {
    getallorder();
    subtotal();
  }, []);

  return (
    <div className='w-full py-[40px] sm:py-[80px] bg-[#f5f5f7]'>
      <div className='Contain lg:w-[65%] md:w-[75%] w-[90%] m-auto h-full'>
        <div className='w-full mx-auto pb-[30px]'>
          <h1 className='text-[30px] md:text-[40px] text-[#1D1D1F] font-semibold leading-tight sm:text-left'>
            Review your bag.
          </h1>
          <p className='pt-[13px] text-[17px] text-[#1D1D1F]'>Free delivery and free returns.</p>
        </div>

        {/* Agar koi orders nahi hain to friendly message show karo */}
        {allorder.length === 0 ? (
          <div className='text-center py-20'>
            <p className='text-xl text-gray-600 font-medium'>No orders found.</p>
            <p className='text-gray-500 mt-2'>Start shopping to add products to your bag!</p>
          </div>
        ) : (
          <>
            {allorder.map((order, orderIndex) => (
              <div className="mb-8 p-6 " key={order._id || orderIndex}>
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <p className="text-sm sm:text-base text-gray-700">
                    <span className="font-semibold">Order ID:</span> {order._id}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mt-1 sm:mt-0">
                    <span className="font-semibold">Order Date:</span> {moment(order.createdAt).fromNow()}
                  </p>
                </div>

                {/* Payment & Order Status */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
                  <div>
                    <span className="font-semibold text-gray-700 mr-2">Payment Status:</span>
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-semibold text-sm ${order.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-800"
                        : order.paymentStatus === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                        }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700 mr-2">Order Status:</span>
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-semibold text-sm ${order.orderStatus === "Confirmed"
                        ? "bg-blue-100 text-blue-800"
                        : order.orderStatus === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.orderStatus === "Shipped"
                            ? "bg-indigo-100 text-indigo-800"
                            : order.orderStatus === "Delivered"
                              ? "bg-green-100 text-green-800"
                              : order.orderStatus === "Cancelled"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {order.orderStatus}
                    </span>
                  </div>
                </div>

                {/* Products List */}
                {order.Products.map((product, prodIndex) => (
                  <div
                    className="w-full border border-gray-300 rounded-xl p-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-50 shadow-sm"
                    key={product.productId || prodIndex}
                  >
                    <div className="w-[120px] h-[120px] flex-shrink-0 rounded-lg overflow-hidden bg-white shadow">
                      <img
                        src={`https://apple-web-be.onrender.com/Allproduct/${product.productimage}`}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-between w-full md:w-[60%]">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{product.name}</h2>
                      <button className="text-blue-600 text-sm mt-1 text-left hover:underline">
                        Show carrier plan details and charges
                      </button>
                    </div>
                    <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                      <select value={product.quantity} onChange={(e) => { productorder(e.target.value, product.productId) }} className="border border-gray-400 rounded-md px-3 py-1 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500" >
                        <option value={"1"} >1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"6"}>6</option>
                        <option value={"7"}>7</option>
                        <option value={"8"}>8</option>
                        <option value={"9"}>9</option>
                        <option value={"10"}>10+</option>
                      </select>
                      <span className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        ₹{product.selectedPrice}
                      </span>

                      {product.isCancelled ? (
                        <span className="text-red-600 font-semibold text-sm">Cancelled</span>
                      ) : order.orderStatus === "Confirmed" ? (
                        <button
                          onClick={() => {
                            // You can add your handleCancel logic here
                          }}
                          className="text-blue-600 text-sm mt-2 hover:underline"
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDelete(order._id, product.productId)}
                          className="text-red-600 text-sm mt-2 hover:underline"
                        >
                          Delete
                        </button>
                      )}

                      <button className="text-blue-600 text-sm mt-1 hover:underline">Save for later</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <div className='mt-10' >
              <div className='border-t border-gray-300 pt-6'>
                <div className='flex justify-between text-[17px] text-[#1d1d1f] mb-2'>
                  <span>Subtotal</span>
                  <span>$ {Subtotal}.00</span>
                </div>
                <div className='flex justify-between text-[17px] text-[#1d1d1f] mb-2'>
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className='flex justify-between text-[17px] text-[#1d1d1f] mb-2'>
                  <span>
                    Estimated tax for:{' '}
                    <span className='text-blue-600 underline cursor-pointer'>Enter zip code</span>
                  </span>
                  <span>$ –</span>
                </div>
                <div className='flex justify-between items-center mt-4 text-[22px] font-semibold'>
                  <span>Total</span>
                  <span>$ {Subtotal}.00</span>
                </div>
                <p className='text-blue-600 text-sm mt-1 cursor-pointer'>
                  Get Daily Cash with Apple Card <span>ⓘ</span>
                </p>
              </div>

              <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-[#f9f9f9] p-6 rounded-xl shadow-sm'>
                  <h3 className='text-[18px] font-semibold'>
                    Pay Monthly <br /> with Apple Card
                  </h3>
                  <p className='mt-1 text-[15px]'>$179.42/mo. at 0% APR</p>
                  <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-[15px] font-medium'>
                    Check Out with Apple Card Monthly Installments
                  </button>
                  <p className='text-sm text-center mt-2 text-gray-600'>
                    <span className='font-semibold'>$ {Subtotal}.00</span> due today, including one-time items,
                    shipping, and taxes.
                  </p>
                </div>
                <div className='bg-[#f9f9f9] p-6 rounded-xl shadow-sm'>
                  <h3 className='text-[18px] font-semibold'>Pay in Full</h3>
                  <p className='mt-1 text-[15px]'>$ {Subtotal}.00</p>
                  <Link to={"/Address"}>  <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-[15px] font-medium'>
                    Check Out
                  </button></Link>
                  <button className='mt-2 w-full bg-black text-white py-2 rounded-lg text-[15px] font-medium'>
                    Check Out with Apple Pay
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Bags;
