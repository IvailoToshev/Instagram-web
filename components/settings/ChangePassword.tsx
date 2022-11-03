// import { useSession } from 'next-auth/react'

const ChangePassword = () => {
    // const { data: session } = useSession()
    
    return (
        <div className="flex flex-col justify-center p-20 w-[50rem]">
            <div className="flex ml-28 mb-8">
                <div className="mr-10">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5oc9cfL5pAMnxKY3Jv6Td9FEAm4BgxQU2Q&usqp=CAU' className='rounded-full h-10 w-10' alt="profile pic" />
                </div>
                <div>
                    <h4 className="text-2xl">ivailotoshev</h4>
                </div>
            </div>

            <div>
                <form className='block'>
                    <div>
                        <div className='flex items-center mb-4'>
                            <div className='w-[30%]'>
                                <label className='mr-16 font-semibold' htmlFor="oPassword">Old Password</label>
                            </div>
                            <div className='w-[70%]'>
                                <input className='bg-gray-100 rounded-md w-full h-10' type="password" />
                            </div>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div className='w-[30%]'>
                                <label className='mr-14 font-semibold' htmlFor="newPassword">New Password</label>
                            </div>
                            <div className='w-[70%]'>
                                <input className='bg-gray-100 rounded-md w-full h-10' type="password" />
                            </div>
                        </div>
                        <div className='flex items-center mb-10'>
                            <div className='w-[30%] pr-6'>
                                <label className='font-semibold' htmlFor="confirmNewPassword">Confirm New Password</label>
                            </div>
                            <div className='w-[70%]'>
                                <input className='bg-gray-100 rounded-md w-full h-10' type="password" />
                            </div>
                        </div>
                    </div>
                    <div className='ml-48'>
                        <button className='text-sm text-white font-medium mb-7 px-2 py-1 bg-blue-500 rounded-sm'>Change Passoword</button>
                        <p className='text-sm text-blue-600 font-semibold'>Forgot Password?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword