import React from 'react'

const Topbar = () => {
  return (
    <div>
      <div className="flex mb-6 ">
              <div className="bg-green-100 p-2 rounded-lg flex flex-col items-center justify-center text-center w-48 h-20 border border-green-300 relative overflow-visible">
                <img src="./src/assets/lapy.png" alt="Apply for job" className="w-16 h-16 absolute -top-4 left-1/2 -translate-x-1/2" />
                <p className="font-medium text-sm mt-10">Apply for job</p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg flex flex-col items-center justify-center w-48 h-20 text-center border border-green-300 ml-2 relative overflow-visible">
                <img src="./src/assets/money.png" alt="How to sell" className="w-14 h-14 absolute -top-3 left-1/2 -translate-x-1/2" />
                <p className="font-medium text-sm mt-8">How to sell</p>
              </div>
              <div className="bg-purple-100 p-2 rounded-lg flex flex-col items-center justify-center text-center w-48 h-20 border border-purple-300 ml-2 relative overflow-visible">
                <img src="./src/assets/cart-i.png" alt="How to buy" className="w-18 h-16 absolute -top-4 left-1/2 -translate-x-1/2" />
                <p className="font-medium text-sm mt-8">How to buy</p>
              </div>
            </div>

    </div>
  )
}

export default Topbar
