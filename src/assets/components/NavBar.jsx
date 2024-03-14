import React from 'react'

function NavBar() {
  return (
    <nav 
    style={{justifyContent:'space-between'}} 
    className='h-14 w-screen bg-purple-900 flex'>
    
       <div 
       className="my-2 logo ">
         <span 
         className='text-2xl font-extrabold text-white  mx-5'>ToDo
         </span>
         </div>
    <div className="nav">
     <ul className='mx-6 flex gap-9 my-4'>
     <li className='cursor-pointer text-white font-medium hover:font-bold hover:text-[17px] transition-all delay-13'>Home
     </li>
     <li 
     className='text-white cursor-pointer font-medium hover:font-bold hover:text-[17px] transition-all delay-13'>AboutUs
     </li>
     <li className='cursor-pointer text-white font-medium hover:font-bold hover:text-[17px] transition-all delay-13'>ContactUs
     </li>
    </ul>
    </div>
    </nav>
  )
}

export default NavBar