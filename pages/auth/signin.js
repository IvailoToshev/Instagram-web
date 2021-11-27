import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header';

function signIn({ providers }) {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-16 px-14 text-center'>
            {/* <Header /> */}
            
            <div className='w-96 border  flex flex-col items-center justify-center min-h-screen  px-14 text-center'>
                <img className='w-80' src='https://links.papareact.com/ocw' alt='logo' />
                <p className='font-xs font-bold text-gray-500'>
                    Sign up to see photos and videos from your friends.
                </p>

                <div className='mt-5'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className='p-2 bg-blue-500 rounded-lg text-white' onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <div className='border-t-4 border-solid border-gray-600 mx-14'></div>
                    <p className='text-xs text-gray-500 font-semibold px-4'>OR</p>
                    <div className='border-t-2 border-solid border-gray-600 mx-14'></div>
                </div>
                <div className='mt-5'>
                    <form>
                        <input className='mb-1 border bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='email' placeholder='Mobile Number or Email'></input>
                        <input className='mb-1 bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Full Name'></input>
                        <input className='mb-1 bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Username'></input>
                        <input className='mb-5 bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='password' placeholder='Password'></input>
                        <button className='p-2 bg-blue-500 rounded-lg text-white'>Sign In</button>
                    </form>
                </div>
            </div>

            <div className='mt-4 w-96 py-8 px-24 border'>
                <p>Have an account? <a className='cursor-pointer text-blue-500' src=''>Log in</a></p>
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
