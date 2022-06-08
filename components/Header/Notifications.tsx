import { Menu, Transition } from '@headlessui/react';
import { HeartIcon, } from '@heroicons/react/outline'

const Notifications = () => {
    return (
        <Menu>
            <Menu.Button>
                <HeartIcon className='navBtn' />
            </Menu.Button>
            <Transition
                enter="transition duration-1000 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-1000 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Item as="div" className="absolute right-0 w-[27rem] mt-8 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                    <div className="px-4 py-1">
                        <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                            This Week
                        </p>
                    </div>

                    <Menu.Item as='div' className='flex justify-around items-center pr-3 py-2'>
                        <img className='h-12 w-12 rounded-full' alt='profile picture' src='https://cdn.drawception.com/images/avatars/545409-85F.jpg' />
                        <p className='text-sm'><span className='text-sm font-medium'>polsy_prvt</span> started following you. <span className='text-gray-400'>2d</span></p>
                        <div className='bg-blue-500 rounded-sm px-[5px]'>
                            <button className='text-sm text-white font-medium'>Follow</button>
                        </div>
                    </Menu.Item>
                                    
                    <Menu.Item as="div" className='flex justify-items-start items-center'>
                        <div className="px-4 py-[3px]">
                            <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                This Month
                            </p>
                        </div>
                    </Menu.Item>
                    <Menu.Item as="div" className='flex justify-around items-center pr-3 py-2'>
                        <img className='h-12 w-12 rounded-full' alt='profile picture' src='https://i1.sndcdn.com/avatars-000339084123-nag0p1-t500x500.jpg' />
                        <p className='text-sm'><span className='text-sm font-medium'>polsy_prvt</span> liked your photo. <span className='text-gray-400'>2w</span></p>
                        <img className='h-12 w-12' alt='your photo' src='https://cdn.realsport101.com/images/ncavvykf/epicstream/7b2b09c20531dab5c6ce455345ec3d6d50f8f813-760x400.jpg?rect=25,0,711,400&w=686&h=386&auto=format' />
                    </Menu.Item>
                </Menu.Item>
            </Transition>
        </Menu>

    )
}

export default Notifications
