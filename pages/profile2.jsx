import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
// import { useSession } from 'next-auth/react'
import { DotsHorizontalIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import Highlights from '../components/profile/Highlight'

function profile() {
    // const { data: session } = useSession();
    return (
        <div className='bg-gray-50 h-full'>
            <Header />
            <div className='flex justify-center items-center'>
                <div className='flex w-auto lg:w-3/6'>
                    <div className='m-6 pr-2 lg:m-16 lg:pr-8'>
                        <img alt='default profile pic' src='https://cdn130.picsart.com/344993131001211.png' className='h-auto w-auto rounded-full cursor-pointer sm:h-36 sm:w-36' />
                        {/* p-[3px] border-2 border-t-2 sm:h-40 sm:w-40 - Style for story */}
                    </div>
                    <div className='block mt-4 lg:mt-16'>
                        <div className='flex'>
                            <h1 className='text-3xl pr-1 lg:pr-5'>username</h1>
                            <button className='hidden bg-blue-500 border rounded-md px-4 text-sm text-white font-semibold mr-2 lg:block'>Follow</button>
                            <div className='hidden w-9 mr-2 lg:block'>
                                <ChevronDownIcon className='bg-blue-500 border rounded-md px-3 w-11 h-9 text-white font-semibold active:bg-blue-400' />
                            </div>
                            <DotsHorizontalIcon className='cursor-pointer pl-3 h-9 w-10' />
                        </div>

                        {/* Mobile Button */}
                        <div className='flex'>
                            <div className='flex justify-center items-center'>
                                <button className='block bg-blue-500 text-white border rounded-sm py-1 px-20 mt-3 mr-2 text-sm font-semibold lg:hidden lg:p-1 lg:mt-0'>Follow</button>
                                <div className='flex items-center w-11 mr-2 lg:hidden'>
                                    <ChevronDownIcon className='bg-blue-500 border px-3 rounded-sm mt-3 w-11 h-[1.85rem] text-white font-semibold active:bg-blue-400' />
                                </div>
                            </div>
                        </div>

                        {/* Profile Stats */}
                        <div className='hidden mt-5 mb-1 lg:flex'>
                            <h4 className='pr-12'><span className='font-semibold pr-1'>6</span>posts</h4>
                            <h4 className='pr-12'><span className='font-semibold pr-1'>0</span>followers</h4>
                            <h4><span className='font-semibold pr-1'>0</span>following</h4>
                        </div>

                        {/* Name and Bio */}
                        <div className='relative text-sm right-32 mt-14 mb-4 lg:right-0 lg:mt-2 lg:block lg:text-base'>
                            <h3 className='font-semibold'>Name</h3>
                            <p>Just a normal BIO
                                btw you can subscribe for my yt: <a className='text-blue-900' href="https://www.youtube.com/c/TheClashers">https://www.youtube.com/c/TheClashers</a>
                            </p>
                        </div>

                        <div className='relative text-sm right-32 mt-1 mb-6 lg:right-0 lg:mt-6 lg:block'>
                            <p className='text-xs text-gray-500 font-medium'>Followed by <span className='text-black'>mirella_k.24, ___yaniii__, justme.gabo</span> +2 more</p>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* Highlights */}
            <div className='flex items-center justify-center'>
                <div className='flex w-auto px-8 lg:w-3/6'>
                    <Highlights img="https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg" heading='France🔱' />
                    <Highlights img="http://img.timeinc.net/time/pictures_of_the_year/pictures_of_the_year_01.jpg" heading='Travel' />
                    <Highlights img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4WzGyyywyq8954SJO3O4RM0UrOPMeUYoQg&usqp=CAU" heading='Grozna Krava' />
                    <Highlights img='https://cdn.pocket-lint.com/r/s/1200x630/assets/images/133879-phones-feature-well-timed-and-accidental-phone-pictures-that-will-make-you-look-twice-image1-gvyypiubpl.jpg ' heading='Love' />
                </div>
            </div>

            {/* Mobile Profile Stats */}
            <div className='w-full mt-3'>
                <div className='flex justify-around mt-5 p-3 mb-1 border lg:hidden'>
                    <div className=''>
                        <div className='flex justify-center'>
                            <h4 className='text-sm font-semibold'>6</h4>
                        </div>
                        <h4 className='text-gray-400 text-sm'>posts</h4>
                    </div>
                    <div className=''>
                        <div className='flex justify-center'>
                            <h4 className='text-sm font-semibold'>0</h4>
                        </div>
                        <h4 className='text-gray-400 text-sm'>followers</h4>
                    </div>
                    <div className=''>
                        <div className='flex justify-center'>
                            <h4 className='text-sm font-semibold'>0</h4>
                        </div>
                        <h4 className='text-gray-400 text-sm'>following</h4>
                    </div>
                </div>
            </div>

            {/* Post Categories */}
            <div className='hidden lg:flex justify-center items-center mt-8'>
                <div className='border-t-2 border-gray-300 mt-3 w-3/6'></div>
            </div>
            <div className='justify-center items-center pt-4 lg:flex'>
                <div className='w-auto lg:w-1/6'>
                    <ul className='flex items-center justify-around lg:justify-between lg:w-auto'>
                        <li className='flex items-center cursor-pointer'>
                            <svg aria-label="" className='text-gray-400 mr-1 h-6 lg:h-3' fill="#262626" role="img" viewBox="0 0 24 24"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                            <p className='hidden text-gray-400 text-sm font-semibold tracking-widest lg:block'>POSTS</p>
                        </li>
                        <li className='flex items-center cursor-pointer'>
                            <svg aria-label="" className='text-gray-400 mr-1 h-6 lg:h-3' fill="#8e8e8e" role="img" viewBox="0 0 24 24"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                            <p className='hidden text-gray-400 text-sm font-semibold tracking-widest lg:block'>TAGGED</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Posts */}
            <div className='flex justify-center items-center mt-5 lg:mt-8'>
                <div className='grid grid-cols-3 gap-1 w-auto lg:gap-5 lg:w-3/6'>
                    <div className=''>
                        <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/One-Piece-Most-Memorable-Characters.jpg" alt="post pic" /> 
                    </div>
                    <div>
                        <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://data.whicdn.com/images/351268117/original.jpg" alt="post pic" /> 
                    </div>
                    <div>
                        <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://cdn.realsport101.com/images/ncavvykf/epicstream/7b2b09c20531dab5c6ce455345ec3d6d50f8f813-760x400.jpg?rect=25,0,711,400&w=686&h=386&auto=format" alt="post pic" /> 
                    </div>
                    <div className=''>
                        <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://cdn.realsport101.com/images/ncavvykf/epicstream/7b2b09c20531dab5c6ce455345ec3d6d50f8f813-760x400.jpg?rect=25,0,711,400&w=686&h=386&auto=format" alt="post pic" /> 
                    </div>
                    <div className=''>
                        <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/One-Piece-Most-Memorable-Characters.jpg" alt="post pic" /> 
                    </div>
                    <div className=''>
                        <img className='cursor-pointer object-cover h-36 lg:h-72 w-76 mb-8' src="https://data.whicdn.com/images/351268117/original.jpg" alt="post pic" /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile