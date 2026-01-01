import React from 'react'
import { IoMdClose } from "react-icons/io"; 
function Useraddress({ onClose }) {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-xl rounded-xl p-6 sm:p-10 relative">

        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          <IoMdClose />
        </button>

        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Edit your shipping address.
        </h2>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border rounded-md"
              defaultValue="raju"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border rounded-md"
              defaultValue="Shrivastav"
            />
          </div>

          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Street Address"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Apt, Suite, Building (Optional)"
            className="w-full px-4 py-2 border rounded-md"
          />

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Zip Code"
              className="w-1/2 px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="City, State"
              className="w-1/2 px-4 py-2 border rounded-md"
            />
          </div>

          <input
            type="text"
            placeholder="Country/Region"
            className="w-full px-4 py-2 border rounded-md"
            defaultValue="United States"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-md"
          />

          <p className="text-sm text-gray-500 mt-2">
            The phone number you enter can’t be changed after you place your order, so please make sure it’s correct.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-blue-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Useraddress
