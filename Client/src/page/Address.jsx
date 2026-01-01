import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {  toast } from 'react-toastify';

function Address() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderid, setorderid] = useState('');

  let { User } = useSelector((store) => store.auth);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };
let Navigate = useNavigate();
  const handlePlaceOrder = async () => {
    try {
      const payload = {
        ShippingAddress: form,
        paymentMethods: paymentMethod,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_Base_URL}/order/create/${User._id}`,
        payload,
        { withCredentials: true }
      );

      const newOrderId = res.data.order._id;
      setorderid(newOrderId);
      handlepayment(newOrderId);
    } catch (error) {
      const errMsg = error.response?.data?.message;
      console.error("Order error:", errMsg);
    }
  };

  const handlepayment = async (id) => {
    try {
      let res = await axios.post(
        `${import.meta.env.VITE_Base_URL}/order/payment/${User._id}/${id}`,
        {},
        { withCredentials: true }
      );

      let { orderId, amount, currency } = res.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "Apple",
        description: "Order Payment",
        order_id: orderId,
        handler: async function (response) {
          try {
            const verifyPayload = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };
            
            const verfyres=await axios.post(`${import.meta.env.VITE_Base_URL}/order/verify-payment`,verifyPayload,{
              withCredentials:true
            }) 
            Navigate("/bag")
            if(verfyres.data.message==="Payment Verified"){
             Navigate("/bag")
             toast.success(verfyres.data.message); 
            }
            else{
              toast.error(verfyres.data.message); 
            }
          } catch (error) {
            console.log(error);
          }
        },
        prefill: {
          name: User.Username,
          email: User.Email,
          contact: User.Phonenumber,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex justify-center items-center">
      <div className="w-full max-w-4xl  p-10 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Delivery Address & Payment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Form inputs with your style */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Roshan Kumar"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pincode
            </label>
            <input
              type="text"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              placeholder="110001"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Delhi"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="Delhi"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Address
            </label>
            <textarea
              name="street"
              value={form.street}
              onChange={handleChange}
              placeholder="House No, Street, Area, Landmark..."
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Payment Method</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-blue-500 focus:border-blue-500 outline-none">
            <option value="" disabled> Select Payment Mode</option>
            <option value="UPI">UPI</option>
            <option value="Cash on Delivery">Cash On Delivery</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              handlePlaceOrder();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-xl transition duration-300"
          >
            Place Order
          </button></div>
      </div>
    </div>
  );
}

export default Address;
