import React, { useState } from 'react'
import Header from '../components/Header'
// import { useSession } from 'next-auth/react'
import { CogIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router';
import Highlights from '../components/Profile/Highlight'
import Modal from '../components/Modals/Modal'
import ProfilePosts from '../components/Profile/ProfilePosts'
// import ProfileModal from '../components/ProfileModal';

function profile() {
    // const { data: session } = useSession();
    const [open, setOpen] = useState(false)
    const [categoryState, setCategoryState] = useState(1);
    const router = useRouter()

    const toggleCategory = (index) => {
        setCategoryState(index)
    }

    return (
        <div className='bg-gray-50 h-full'>
            <Header />
            <div className='flex justify-center items-center'>
                <div className='flex w-auto lg:w-3/6'>
                    <div className='m-6 pr-2 lg:m-16 lg:pr-8'>
                        {/* {session ? ( */}
                        <img alt='profile picture' src="https://scontent-sof1-2.xx.fbcdn.net/v/t1.18169-9/26992357_1743080209077496_7661103156531689506_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vKjfslBOZiQAX8HyFVp&_nc_ht=scontent-sof1-2.xx&oh=00_AT9Nx6QkJKYGcbqGpj6zaJpv_G2Cm29VLPYihY7vGZGWnA&oe=62B47902" className='h-20 w-24 rounded-full cursor-pointer lg:h-20 lg:w-20 xl:h-36 xl:w-36' />
                        {/* ) : <img alt='default profile pic' src='https://cdn130.picsart.com/344993131001211.png' className='h-auto w-auto rounded-full cursor-pointer sm:h-36 sm:w-36' />} */}
                    </div>
                    <div>
                        <div className='block mt-4 lg:mt-16'>
                            <div className='flex'>
                                <h1 className='text-3xl pr-1 lg:pr-3 xl:pr-5'>ivailotoshev</h1>
                                <button onClick={() => router.push('/settings')} className='hidden bg-white border  py-1 px-20 mt-3 text-sm font-semibold lg:block lg:p-1 lg:mt-0'>Edit Profile</button>
                                <CogIcon onClick={() => setOpen(true)} className='text-2xl cursor-pointer pl-[0.14rem] h-9 w-10 lg:pl-3' />
                            </div>

                            {/* Mobile Button */}
                            <div>
                                <button onClick={() => router.push('/settings')} className='block bg-white border rounded-sm py-1 px-20 mt-3 text-sm font-semibold lg:hidden lg:p-1 lg:mt-0'>Edit Profile</button>
                            </div>

                            {/* Profile Stats */}
                            <div className='hidden mt-5 mb-1 lg:flex'>
                                <h4 className='pr-12'><span className='font-semibold pr-1'>6</span>posts</h4>
                                <h4 className='pr-12'><span className='font-semibold pr-1'>835</span>followers</h4>
                                <h4><span className='font-semibold pr-1'>208</span>following</h4>
                            </div>
                        </div>
                        
                        {/* Name and Bio */}
                        <div className='relative text-sm right-28 mt-10 mb-6 lg:right-0 lg:mt-2 lg:block lg:text-base'>
                            <h3 className='font-semibold'>Ivailo Toshev</h3>
                            <p>SnapChat: ivotoshev 👻
                            Facebook: Ивайло Тошев❤️
                            19, Bulgaria
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* Highlights */}
            <div className='flex items-center justify-center'>
                <div className='flex w-auto px-8 lg:w-3/6'>
                    <Highlights img="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" heading='France🔱' />
                    <Highlights img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" heading='Travel' />
                    <Highlights img="https://media.istockphoto.com/photos/this-vacation-is-just-what-we-needed-picture-id639579050?b=1&k=20&m=639579050&s=170667a&w=0&h=eXDg8mhdvjn5jBxd5g3c1tt6D_ts9sVjtpF-FUBTq34=" heading='Babe <3' />
                    <Highlights img='https://s4.reutersmedia.net/resources/r/?m=02&d=20211007&t=2&i=1577163028&w=780&fh=&fw=&ll=&pl=&sq=&r=2021-10-07T190902Z_42063_MRPRC233Q9RO5TU_RTRMADP_0_RUSSIA-WEATHER' heading='Nature' />
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
                            <h4 className='text-sm font-semibold'>835</h4>
                        </div>
                        <h4 className='text-gray-400 text-sm'>followers</h4>
                    </div>
                    <div className=''>
                        <div className='flex justify-center'>
                            <h4 className='text-sm font-semibold'>208</h4>
                        </div>
                        <h4 className='text-gray-400 text-sm'>following</h4>
                    </div>
                </div>
            </div>

            {/* Post Categories */}
            <div className='hidden justify-center items-center mt-8 lg:flex'>
                <div className='border-t-2 border-gray-300 mt-3 w-3/6'></div>
            </div>
            <div className='justify-center items-center pt-4 lg:flex'>
                <div className='w-auto lg:w-1/6'>
                    <ul className='flex items-center justify-around lg:justify-between lg:w-auto'>
                        <li onClick={() => toggleCategory(1)} className={categoryState === 1 ? 'flex items-center cursor-pointer border-t-0 border-black pt-[15px] -mt-5 lg:border-t-2' : 'flex items-center cursor-pointer'}>
                            <svg aria-label="" className={categoryState === 1 ? 'text-blue-500 mr-1 h-6 lg:h-3 lg:text-black' : 'text-gray-400 mr-1 h-6 lg:h-3'} fill="#262626" role="img" viewBox="0 0 24 24"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                            <p className={categoryState === 1 ? 'hidden text-black text-sm font-semibold tracking-widest lg:block' : 'hidden text-gray-400 text-sm font-semibold tracking-widest lg:block'}>POSTS</p>
                            {/* Active categorie style: 
                                border-top: 1px solid black
                                color: black
                                margin-top: -1px
                            */}
                        </li>
                        <li onClick={() => toggleCategory(2)} className={categoryState === 2 ? 'flex items-center cursor-pointer border-t-0 border-black pt-[15px] -mt-5 lg:border-t-2' : 'flex items-center cursor-pointer'}>
                            <svg aria-label="" className={categoryState === 2 ? 'text-blue-500 mr-1 h-6 lg:h-3 lg:text-black' : 'text-gray-400 mr-1 h-6 lg:h-3'} fill="#8e8e8e" role="img" viewBox="0 0 24 24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                            <p className={categoryState === 2 ? 'hidden text-black text-sm font-semibold tracking-widest lg:block' : 'hidden text-gray-400 text-sm font-semibold tracking-widest lg:block'}>SAVED</p>
                        </li>
                        <li onClick={() => toggleCategory(3)} className={categoryState === 3 ? 'flex items-center cursor-pointer border-t-0 border-black pt-[15px] -mt-5 lg:border-t-2' : 'flex items-center cursor-pointer'}>
                            <svg aria-label="" className={categoryState === 3 ? 'text-blue-500 mr-1 h-6 lg:h-3 lg:text-black' : 'text-gray-400 mr-1 h-6 lg:h-3'} fill="#8e8e8e" role="img" viewBox="0 0 24 24"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
                            <p className={categoryState === 3 ? 'hidden text-black text-sm font-semibold tracking-widest lg:block' : 'hidden text-gray-400 text-sm font-semibold tracking-widest lg:block'}>TAGGED</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Posts */}
            <div className={categoryState === 1 ? "block" : "hidden"}>
                <ProfilePosts />
            </div>
            <div className={categoryState === 2 ? "flex justify-center items-center mt-4" : "hidden"}>
                <div>
                    <h1 className='text-gray-400'>Cooming Soon</h1>
                </div>
            </div>

            {/* <ProfileModal /> */}
            <Modal />
        </div>
    )
}

export default profile
