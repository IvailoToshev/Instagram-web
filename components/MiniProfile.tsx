// import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router';

const MiniProfile = () => {
    // const { data: session } = useSession();
    const router = useRouter()

    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5oc9cfL5pAMnxKY3Jv6Td9FEAm4BgxQU2Q&usqp=CAU' onClick={() => router.push('/profile')} alt='profile picture' className='rounded-full border p-[2px] w-16 h-16 cursor-pointer' />
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