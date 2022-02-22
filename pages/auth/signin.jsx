import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header';
import { useRouter } from 'next/router';

function signIn({ providers }) {
    const router = useRouter()

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-16 px-14 text-center'>
            {/* <Header /> */}
            
            <div className='w-96 border  flex flex-col items-center justify-center py-10  px-14 text-center'>
                <img className='w-80' src='https://links.papareact.com/ocw' alt='logo' />
                <p className='font-xs font-bold text-gray-400'>
                    Sign up to see photos and videos from your friends.
                </p>

                <div className='mt-5'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className='p-2 bg-blue-500 rounded-md text-white' onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <div className='border-t-[1px] border-gray-400 w-[4.1rem]'></div>
                    <p className='text-xs text-gray-400 font-semibold px-4'>OR</p>
                    <div className='border-t-[1px] border-gray-400 w-[4.1rem]'></div>
                </div>
                <div className='mt-5'>
                    <form>
                        <input className='mb-1 border bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='email' placeholder='Mobile Number or Email'></input>
                        <input className='mb-1 bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Full Name'></input>
                        <input className='mb-1 bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Username'></input>
                        <input className='mb-5 bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='password' placeholder='Password'></input>
                        <button className='px-2 py-1 bg-blue-500 rounded-md text-sm font-semibold text-white w-full'>Sign In</button>
                    </form>
                </div>
            </div>

            <div className='mt-4 w-96 py-8 px-24 border'>
                <p>Have an account? <a onClick={() => router.push('/auth/login')} className='cursor-pointer text-blue-500' src=''>Log in</a></p>
            </div>
        </div> 
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn
