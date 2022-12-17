import React from 'react'
import logoU from  '../../assets/logoU.png';
import {HiOutlinePlus} from 'react-icons/hi';
import CardsData from './cardsData';

const Cards = () => {
  return (
    <div className="">
      <div className='mb-10 flex flex-col items-center md:flex-row'>
        <p className="w-2/3 text-center text-3xl font-rubik text-blue-600 md:text-6xl md:text-start">GIỚI THIỆU</p>
        <div className="w-full hidden border-t-4 border-blue-400 md:block"></div>
      </div>
      <div className=" flex flex-col items-center md:grid md:grid-cols-5 md:gap-5 md:items-stretch ">
      {CardsData.map((Card) => { 
        return(
          <div className='text-white my-4 w-1/2 rounded-2xl flex flex-col border-2 border-double border-white pb-5  transition hover:scale-102 hover:cursor-pointer shadow-sm hover:shadow-white md:my-0 md:w-full bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvsMZhzV5uEwnZ0xn5RK9nKDkezRbChnZ7IvfEIKqgjejXmzCDqfRl8Ffei0H3S3HyqU&usqp=CAU")] '>
            <div className='flex items-center m-2 '>
              <img className='w-9 h-9 mr-2 bg-white rounded-3xl' src={logoU} alt="" />
              <p>UNIVERSITY OF SCIENCE</p>
            </div>
            <img className='self-center mt-2 mb-5 rounded-full w-28 h-28 p-0.5 border-solid border-2 border-white text-center shadow-2xl shadow-gray-700 ' src={Card.img} alt="" />
            <div className='text-sm text-center'>
              <p className="text-lg font-bold ">{Card.fullname}</p>
              <p className="text-xs font-light">{Card.id}</p>
            </div> 
          </div>
        )})} 
        <div className='justify-center hidden text-white rounded-2xl  border-2 border-double border-white pb-5 md:flex bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvsMZhzV5uEwnZ0xn5RK9nKDkezRbChnZ7IvfEIKqgjejXmzCDqfRl8Ffei0H3S3HyqU&usqp=CAU")] transition hover:scale-102 hover:cursor-pointer shadow-sm hover:shadow-white'>
         <button className='text-8xl self-center'><HiOutlinePlus/></button>
        </div>
     </div>
    </div>
    
  )
}

export default Cards