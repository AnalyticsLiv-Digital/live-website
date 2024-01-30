'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [header, setHeader] = useState(false)

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)

        return () => {
            window.addEventListener('scroll', scrollHeader)
        }

    }, [])

    //  // //
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
        <div className={header ? "fixed w-full z-50 bg-[white] shadow-md" : "absolute w-full z-10"}>
            <nav className='navbr container mx-auto min-w-full z-50'>
                <div className='hidden lg:flex py-6 h-auto flex-wrap px-4 lg:flex-row items-center justify-between'>
                    <div className='bg-white rounded-[40px] py-1 px-2'>
                        <a href='/' className='text-2xl font-semibold flex items-center space-x-3 w-52 h-12'>
                            <Image
                                src="/analyticsLiv-logo.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                priority={true}
                            />
                        </a>
                    </div>
                    <div className='lg:flex lg:items-center text-center bg-white rounded-[40px] py-1 px-4'>
                        <ul className='lg:flex font-semibold text-left lg:text-center z-[-1] lg:z-auto lg:mr-4 lg:w-auto lg:space-x-6 items-center uppercase tracking-wide cursor-pointer'>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Services">Services</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Resources">Resources</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/About">About Us</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Contact">Contact</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Careers" className='text-[#BE123C] hover:text-amber-500'>WE ARE HIRING</Link>
                            </li>
                        </ul>
                        <a href="/" className='text-2xl font-semibold w-52 h-12'>
                            <Image
                                src="/google_cerified.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </a>
                    </div>
                </div>
                {/*  */}
                <div className='lg:hidden p-2 sticky top-0 left-0 right-0 z-30'>
                    <div className='relative flex items-center justify-between z-10'>
                        <div className='bg-white rounded-[40px] py-1 px-2'>
                            <a href="/">
                                <Image
                                    src="/analyticsLiv-logo.png"
                                    width={200}
                                    height={200}
                                    alt="Picture of the author"
                                    className='inline-block h-10 md:mx-4 cursor-pointer'
                                />
                            </a>
                            <button onClick={toggleMenu} className=' absolute inline-flex right-2 top-1 items-center justify-center p-2 rounded-md text-gray-400 hover:text-slate-900 focus:outline-none '>
                                {
                                    isMenuOpen ? (<FaXmark className='w-6 h-6 text-gray-400 hover:text-slate-900' />) : (<FaBars className='w-6 h-6 text-gray-400 hover:text-slate-900' />)
                                }
                            </button>
                        </div>
                    </div>

                    <div className={`space-y-4 px-4 pt-20 grid pb-5 bg-white ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        <ul className='rounded-[40px] py-1 px-4 text-2xl'>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Services">Services</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Resources">Resources</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/About">About Us</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Contact">Contact</Link>
                            </li>
                            <li className='relative hover:border-b-4 hover:border-cyan-400 duration-300 delay-75 ease-in-out py-2'>
                                <Link href="/Careers" className='text-[#BE123C] hover:text-amber-500'>WE ARE HIRING</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*  */}
            </nav>
        </div>
        </>
    )
}

export default Navbar