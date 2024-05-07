import React from 'react'
import Logo from '../../../public/assets/Logo.png'
import Image from 'next/image'
type Props = {}

function SideBar({}: Props) {
  return (
    <div className='flex flex-col'>
        
        <div className='flex flex-col h-screen min-w-[230px] rounded-r-xl p-0 gap-4 justify-stretch'>
            
            <div className='max-h-[100] max-w-[100] px-7 py-5'>
            <Image src={Logo} alt='Logo' width={80} height={100}></Image>
            </div>

            <br/>


            <button className='flex px-8 py-3 self-start hover:bg-gray-400 min-w-[250px] rounded-lg min-h-[40px] text-gray-600 hover:text-white'>Home</button>

            <button className='flex px-8 py-3 self-start hover:bg-gray-400 rounded-lg min-w-[250px] min-h-[40px] text-gray-600 hover:text-white'>Discover</button>

            <button className='flex px-8 py-3 self-start hover:bg-gray-400 rounded-lg min-w-[250px] min-h-[40px] text-gray-600 hover:text-white'>Library</button>

            <button className='flex px-8 py-3 self-start hover:bg-gray-400 rounded-lg min-w-[250px] min-h-[40px] text-gray-600 hover:text-white'>Sign In</button>


            <button className='flex text-md justify-center p-4 rounded-r-lg hover:bg-[#226ce0] min-w-[10px] min-h-[40px] text-gray-600 hover:text-white'>Sign Up In April</button>
        </div>      
  

         
    </div>
  )
}

export default SideBar