import React from 'react'
import Bkg from '../assets/Bkg.webp'
import { MdOutlineSearch } from "react-icons/md";
import Item from './Item';
const Products = () => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <div className='h-min w-full'>
      <div className='flex relative justify-center items-center w-full h-96 bg-center bg-cover' style={{ backgroundImage: `url(${Bkg})`}}>
        <form action="" className='w-6/12 relative flex justify-center items-center'>
          <input type="text" id="large-input" className="p-2.5 w-full bg-gray-50 rounded-2xl sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl shadow-2xl " placeholder='Busca tu prenda favorita' />
          <MdOutlineSearch className='absolute right-4 h-7 w-7 text-gray-400 cursor-pointer' />
        </form>
      </div>
      <div className='flex gap-12 bg-transparent m relative justify-center flex-wrap h-min w-full bg transform -translate-y-20 z-10' >
        {array.map((item, index)=> <Item key={index}/>)}
      </div>
    </div>
  )
}

export default Products