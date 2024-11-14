import React from 'react'

const Sub = () => {
  return (


<div>

<div class="subscribe bg-white rounded-lg shadow-md p-5 w-80 h-48 relative">
  <p class="text-center font-bold text-lg leading-7 tracking-wider">SUBSCRIBE</p>
  <input 
    type="email" 
    name="email" 
    placeholder="Your e-mail" 
    class="absolute bottom-7 w-3/4 border-b border-gray-300 focus:border-blue-700 focus:outline-none p-2 bg-transparent transition-all duration-300 ease-in-out"
  />
  <div 
    class="absolute right-0 bottom-0 bg-blue-900 text-white rounded-3xl rounded-tr-none py-2 px-6 font-bold text-sm tracking-widest cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-800 shadow-md"
  >
    SUBMIT
  </div>
</div>


</div>


  )
}

export default Sub