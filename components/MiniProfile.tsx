// import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router';

const MiniProfile = () => {
    // const { data: session } = useSession();
    const router = useRouter()

    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img src='https://scontent-sof1-2.xx.fbcdn.net/v/t1.18169-9/26992357_1743080209077496_7661103156531689506_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JVNGZkfigtwAX__5Fgw&_nc_ht=scontent-sof1-2.xx&oh=00_AT9sGlBRmwsfgs70VwD2vN4qy8OTW4nuGyNaCgFkbfA3NA&oe=62DFFA82' onClick={() => router.push('/profile')} alt='profile picture' className='rounded-full border p-[2px] w-16 h-16 cursor-pointer' />
            <div className='flex-1 mx-4'>
                {/* <h2 className='font-bold cursor-pointer' onClick={() => router.push('/profile')}>{session?.user?.username}</h2> */}
                <h2 className='font-bold cursor-pointer' onClick={() => router.push('/profile')}>ivailotoshev</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
            </div>
            {/* Here is gonna be modal for switch account */}
            <button className='font-semibold text-sm text-blue-400'>Switch</button>
        </div>
    )
}

export default MiniProfile