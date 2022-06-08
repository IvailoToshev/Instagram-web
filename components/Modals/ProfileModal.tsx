import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
// import { signOut, useSession } from 'next-auth/react'

function ProfileModal() {
    // This state needs State Management - GraphQL coockie session
    const [open, setOpen] = useState(false);
    const router = useRouter()
    // const { data: session } = useSession();

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen}>
                <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal content */}
                    <span
                        className='hidden sm:inline-block sm:align-middle sm:h-screen'
                        aria-hidden='true'
                    >
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-1 pb-1 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-2'>
                            <div onClick={() => router.push('/settings')} className='text-sm cursor-pointer pb-3 pt-2 border-b-[1px]'>
                                <h1>Change Password</h1>
                            </div>
                            <div className='text-sm cursor-pointer py-3 border-b-[1px]'>
                                <h1>Professional Account</h1>
                            </div>
                            <div className='text-sm cursor-pointer py-3 border-b-[1px]'>
                                <h1>Nametag</h1>
                            </div>
                            <div className='text-sm cursor-pointer py-3 border-b-[1px]'>
                                <h1>Apps and Websites</h1>
                            </div>
                            <div className='text-sm cursor-pointer py-3 border-b-[1px]'>
                                <h1>Notifications</h1>
                            </div>
                            <div className='text-sm cursor-pointer py-3 border-b-[1px]'>
                                <h1>Privacy and Security</h1>
                            </div>
                            <div className='text-sm cursor-pointer py-3 border-b-[1px]'>
                                <h1>Login Activity</h1>
                            </div>
                            <div className='text-sm cursor-pointer py-3 border-b-[1px]'>
                                <h1>Emails from Instagram</h1>
                            </div>
                            <div className='text-sm cursor-pointer py-3 border-b-[1px]'>
                                <h1>Report a Problem</h1>
                            </div>
                            {/* onClick={signOut} - paste it in the div for logout */}
                            <div className='text-sm cursor-pointer py-3 border-b-[1px]'>
                                <h1>Log Out</h1>
                            </div>
                            {/* onClick={setOpen} - It gives error but I think this is the way of closing the modal */}
                            <div className='text-sm cursor-pointer pt-3 pb-2'>
                                <h1>Cancel</h1>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
            
        </Transition.Root>

    )
}

export default ProfileModal