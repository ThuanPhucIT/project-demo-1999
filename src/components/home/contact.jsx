import React from 'react'
import {RiCloseLine} from 'react-icons/ri';



const Contact = () => {
  return (
     <div>
      <div className='h-screen w-screen flex justify-center items-center'>
       <form action="" className='flex flex-col h-2/3 w-2/3  justify-center items-center bg-blue-400 border-2 border-black p-4'>
        <input type="text" placeholder='Name' className='w-full m-2 outline-none p-2' />
        <input type="email" placeholder='Email' className='w-full m-2 outline-none p-2'/>
        <input type="text" placeholder='Subject' className='w-full m-2 outline-none p-2'/>
        <textarea name="" placeholder='Content' id="" cols="30" rows="10" className='w-full m-2 outline-none p-2'></textarea>
        <button className='rounded-3xl block border-2  border-black bg-white py-2 px-10 hover:border-black hover:bg-white hover:rounded-3xl hover:shadow-2xl hover:shadow-gray-600'>SEND</button>
       </form>
      </div>
     </div>
  )
}

export default Contact