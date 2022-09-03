import React, {useState} from 'react'
import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag} from 'react-icons/ai';
import {TbTruckDelivery} from 'react-icons/tb'
import{FaUserFriends,FaWallet} from 'react-icons/fa'
import{BsFillSaveFill,BsFillCartFill} from 'react-icons/bs'
import{MdHelp,MdFavorite } from 'react-icons/md'

const Navbar = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className='max-w-[1640px] flex justify-between mx-auto items-center p-4'>
      {/* left side */}
    <div className='flex items-center'> 
      <div className='cursor-pointer' onClick={()=>setnav(!nav)}> 
        <AiOutlineMenu size={30}/>
      </div>

      <h1 className='text-2xl sm:text-3xl lg:4xl px-2'>Best 
        <span className='font-bold '>Eats</span>
        </h1>

      <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
        <p className="bg-black text-white rounded-full p-2">Delivery</p>
        <p className="p-2 ">pickup</p>
        </div>
      </div>
{/* search input */}
<div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
<AiOutlineSearch size={25}/>
<input  className="bg-transparent p-2 focus:outline-none" type="text"  placeholder='search foods'/>
{/* cart button */}

</div>
<button  className='border border-black py-1 px-5 bg-black rounded-full text-white 
md:flex hidden items-center'>
    <BsFillCartFill size={20} className='mr-2'/>Cart 
</button>
{/* mobile menu */}
{ nav?
<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" onClick={()=>{setnav(!nav)}}></div>
:''
}

{/* Side Drawer */}  
<div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
  <AiOutlineClose size={30} className="absolute right-4 top-5 cursor-pointer" onClick={()=>{setnav(!nav)}}/>
  <h2 className="text-2xl p-4">Best<span className='font-bold'>Eats</span></h2>
  <nav>
    <ul className='flex flex-col p-4 text-gray-800'>
      <li  className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/> Orders</li>
      <li  className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/>Favorite</li>
      <li  className='text-xl py-4 flex'><FaWallet size={25} className='mr-4'/>Wallet</li>
      <li  className='text-xl py-4 flex'><MdHelp size={25} className='mr-4'/>Help</li>
      <li  className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4'/>Promotion</li>
      <li  className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4'/>Best Ones </li>
      <li  className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
    </ul>
  </nav>
</div>
     </div>

  )

}

export default Navbar