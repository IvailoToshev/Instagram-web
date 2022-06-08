// import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import { useRouter } from 'next/router';

function signIn({ providers }) {
    const router = useRouter()

    return (
        <div className='bg-gray-50 h-screen'>
            <div className='flex flex-col items-center justify-center pt-48 text-center'>
            {/* <Header /> */}
            
            <div className='w-96 border flex flex-col items-center justify-center bg-white px-14 text-center'>
                <img className='w-56 mt-4' src='https://links.papareact.com/ocw' alt='logo' />

                <div className='w-4/5 mt-7'>
                    <form>
                        <input className='mb-1 border bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='email' placeholder='Phone Number or Email'></input>
                        <input className='mb-5 bg-gray-50 block w-full sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='password' placeholder='Password'></input>
                        <button className='px-2 py-1 bg-blue-500 rounded-sm text-sm font-semibold text-white w-full'>Log In</button>
                    </form>
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <div className='border-t-2 border-gray-300 w-[5.25rem]'></div>
                    <p className='text-xs text-gray-500 font-semibold px-4'>OR</p>
                    <div className='border-t-2 border-gray-300 w-[5.25rem]'></div>
                </div>

                <div className='mt-4'>
                    {Object.values(providers).map((provider) => (
                        <div key='name'>
                            {/* onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })} - for firebase don't use it */}
                            <button className='p-2 text-sm rounded-lg font-semibold text-blue-900'>
                                Sign in with 
                                {/* {provider.name} */}
                            </button>
                        </div>
                    ))}
                </div>

                <div className='my-4'>
                    <a href="/resetpassword"><p className='text-xs text-blue-800'>Forgot password?</p></a>
                </div>
            </div>

            <div className='mt-4 w-96 py-4 px-22 border'>
                <p>Don't have an accout? <a onClick={() => router.push('/auth/signin')} className='cursor-pointer text-blue-500'>Sign up</a></p>
            </div>
            </div> 
        </div>
    )
}

export async function getServerSideProps() {
    // const providers = await getProviders();

    // return {
    //     props: {
    //         providers
    //     }
    // }
}

export default signIn
