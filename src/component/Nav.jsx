import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-[#00b53f] shadow-2xl sticky top-0 z-50'>
      <div className='flex justify-between'>
    <div className="ml-30">
      <img className='w-14 h-14' src='./assets/jiji.png' alt='jiji logo'/>
          </div>
          <div className='flex items-center mr-40 space-x-4'>
            <a className="text-white font-semibold text-xs"href='#' >Sign in</a>
            <span className="text-white font-semibold text-xs">|</span>
            <a className='text-white font-semibold text-xs' href='#' >Registration</a>
            <button className='bg-[#fea03c] px-8.5 py-2.5 shadow-2xs text-white font-bold text-xs rounded hover:bg-[rgb(218,124,23)]'>SELL </button>
          </div>
          </div>
    </nav>
  )
}

export default Nav