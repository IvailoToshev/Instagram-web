import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router';

function MiniProfile() {
    const { data: session } = useSession();
    const router = useRouter()

    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img src={session?.user?.image} onClick={() => router.push('/profile')} alt='profile picture' className='rounded-full border p-[2px] w-16 h-16 cursor-pointer' />
            <div className='flex-1 mx-4'>
                <h2 className='font-bold cursor-pointer'>{session?.user?.username}</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
            </div>
            <button onClick={signOut} className='font-semibold text-sm text-blue-400'>Switch</button>
        </div>
    )
}

export default MiniProfile
