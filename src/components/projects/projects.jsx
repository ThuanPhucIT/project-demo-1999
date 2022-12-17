import React from 'react'
import Projectpng from  '../../assets/Projectpng.jpg';

const Projects = () => {
  return (
    <div className='flex flex-col'>
      <div className='mb-10 flex flex-col justify-between items-center md:flex-row'>
        <div className="w-full hidden border-t-4 border-blue-400 md:block"></div>
        <p className="w-2/3 text-center text-3xl font-rubik text-blue-600 md:text-6xl md:text-end">PROJECT</p>
      </div>
      <div className='grid grid-cols-2 gap-10 mx-3 md:grid-cols-3 '>
        <div className='flex flex-col border-2 rounded-3xl border-double text-white border-black pb-7 bg-gradient-to-r from-blue-400 to-blue-500 transition hover:scale-100 hover:cursor-pointer shadow-sm hover:shadow-white'>
           <img className=' m-3 border-2 rounded-3xl border-white shadow-xl shadow-black md:m-7' src={Projectpng} alt="" />
           <div className='text-sm text-center'>
            <p className="">Hiện tại chưa có sản phẩm.</p>
           </div>
        </div>
        <div className='flex flex-col border-2 rounded-3xl border-double text-white border-black pb-7 bg-gradient-to-r from-blue-400 to-blue-500 transition hover:scale-100 hover:cursor-pointer shadow-sm hover:shadow-white'>
           <img className=' m-3 border-2 rounded-3xl border-white shadow-xl shadow-black md:m-7' src={Projectpng} alt="" />
           <div className='text-sm text-center'>
            <p className="">Hiện tại chưa có sản phẩm.</p>
           </div>
        </div>
        <div className='flex flex-col border-2 rounded-3xl border-double text-white border-black pb-7 bg-gradient-to-r from-blue-400 to-blue-500 transition hover:scale-100 hover:cursor-pointer shadow-sm hover:shadow-white'>
           <img className=' m-3 border-2 rounded-3xl border-white shadow-xl shadow-black md:m-7' src={Projectpng} alt="" />
           <div className='text-sm text-center'>
            <p className="">Hiện tại chưa có sản phẩm.</p>
           </div>
        </div>
        <div className='flex flex-col border-2 rounded-3xl border-double text-white border-black pb-7 bg-gradient-to-r from-blue-400 to-blue-500 transition hover:scale-100 hover:cursor-pointer shadow-sm hover:shadow-white md:hidden'>
           <img className=' m-3 border-2 rounded-3xl border-white shadow-xl shadow-black md:m-7' src={Projectpng} alt="" />
           <div className='text-sm text-center'>
            <p className="">Hiện tại chưa có sản phẩm.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Projects