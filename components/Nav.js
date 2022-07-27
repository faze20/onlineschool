import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useContext , useRef } from 'react';
import { BsList } from "react-icons/bs";
import {useOutsideClick } from './InfoBox';
import {Context} from "../context";



function Nav() {
    const {logout, authenticated ,user } = useContext(Context);
    const [showFlagMenu, setShowFlagMenu ] = useState(false)

    const dropFlagMenu = ()=>{
        setShowFlagMenu(prev => !prev)
    }
    const handleClickOutsideFlagMenu=()=>{
        setShowFlagMenu(false)
    }

    const flagRef = useOutsideClick(handleClickOutsideFlagMenu);


  return (
    <div className='bg-gray-100 p-2'>
        <div className="flex items-center justify-between ">
            <div className="flex items-center">
                <Link href='/'> 
                    <a className='mt-2'>
                        <Image
                        src='/logo.png'    
                        alt="logo" 
                        width={100}
                        height={50}
                        />
                    </a>
                </Link>
                <div>
                    <p className='font-bold italic text-2xl '>Aca<span className='text-orange-300'>demy</span>
                   
                     </p>
                </div>
            </div>
            <div>
                <div className='flex items-center text-sm mb-2'>
                    <div className='hidden lg:flex lg:items-center '>
                        <div>
                            <Link href='/'>
                                <a className='bg-gray-200 py-1 px-2 mr-4 rounded hover:underline border hover:border-orange-600'>Home</a>
                            </Link>
                        </div>
                        <div>
                            <Link href='/curriculum'>
                                <a className='bg-gray-200 py-1 px-2 mr-4 rounded hover:underline border hover:border-orange-600'>Curriculum</a>
                            </Link>
                        </div>
                        <div>
                            <Link href='/contact'>
                                <a className='bg-gray-200 py-1 px-2 mr-4 rounded hover:underline border hover:border-orange-600'>Contact Us</a>
                            </Link>
                        </div>
                        <div>
                            <Link href='/about'>
                                <a className='bg-gray-200 py-1 px-2 mr-4 rounded hover:underline border hover:border-orange-600'>About Us</a>
                            </Link>
                        </div>

                    </div>
                    <div className='flex items-center '>
                        <div className='lg:hidden '>
                            <BsList  className='text-2xl'/>
                        </div>
                        <span
                        ref={flagRef}
                        onClick={dropFlagMenu}  >
                            <a >
                                <Image
                                src='/usa.png'    
                                alt="logo" 
                                width={20}
                                height={20}
                                />
                            </a>                              
                        </span>
                        { showFlagMenu && 
                            <div className='absolute  bg-gray-400 top-10 w-24 right-0 flex flex-col items-center z-10 '>
                                <p className='text-xs'>select country</p>
                                <ul className='w-full text-center'>
                                    <li className='p-2 hover:bg-gray-200'>
                                      <a 
                                      onClick={()=>alert('CAD')}
                                      className='mt-2'>
                                            <Image
                                            src='/canada.png'    
                                            alt="flag" 
                                            width={30}
                                            height={30}
                                            />
                                        </a>     
                                    </li>
                                    <li className='p-2 hover:bg-gray-200'>
                                        <a
                                        onClick={()=>alert('GBP')}
                                        className='mt-2'>
                                            <Image
                                            src='/ukflag.png'    
                                            alt="flag" 
                                            width={30}
                                            height={30}
                                            />
                                        </a>     
                                    </li>
                                    <li className='p-2 hover:bg-gray-200'>
                                        <a 
                                        onClick={()=>alert('USD')}
                                        className='mt-2'>
                                            <Image
                                            src='/usa.png'    
                                            alt="flag" 
                                            width={30}
                                            height={30}
                                            />
                                        </a>     
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>

                </div>
                <div className='right-0'>
                    {
                    // authenticated
                    user.userName
                     ? 
                        <div className="flex justify-end">
                            <div>
                                 {/* //add query username */}
                                <Link href='/profile/classes'> 
                                    <a className='bg-green-900 p-1 mr-4 rounded'>Classes</a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/profile'>
                                    <a className='border border-green-900 p-1 mr-2 rounded'>{user.userName}&apos;s Profile</a>
                                </Link>
                            </div>
                            <div> <button onClick={logout} className=' border p-1 '>Logout</button></div>
                        </div>
                    : 
                        <div className="flex flex-col lg:flex-row justify-end">
                            <div>
                                <Link href='/login'>
                                    <a className='bg-orange-400 text-xs lg:text-base py-1 px-4 text-gray-100 hover:bg-gray-300 duration-300 hover:text-black mr-4 rounded'>Login</a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/register'>
                                    <a className='border border-orange-400 text-xs lg:text-sm hover:bg-gray-300  duration-300 p-1 rounded'>Create Account</a>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Nav