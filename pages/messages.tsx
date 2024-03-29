import Header from '../components/Header';
import Allmessages from '../components/Message/AllMessages';
import Modal from '../components/Modals/Modal'
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
// import { useSession } from 'next-auth/react';
import { HeartIcon, ChatIcon } from '@heroicons/react/solid'

const messages = () => {
  const router = useRouter()
//   const { data: session } = useSession();
  const [input, setInput] = useState([])
  const [inboxState, setInboxState] = useState(1);

  const toggleInbox = (index) => {
    setInboxState(index)
  }

  return (
    <div className='bg-gray-50 h-screen z-0'>
        <Header />
        <div className='flex justify-center items-center mt-5'>
          <div className='flex justify-center items-center max-w-7xl max-h-[90%]'>
            {/* 1st section */}
            <div className='bg-white border h-full max-w-[22rem]'>
                <div className='flex flex-wrap border-b-[1px] bg-white w-full h-[3.75rem]'>
                  <div className='flex flex-row items-center justify-between px-5 h-full w-full'>
                    <div className='flex-row w-8'></div>
                    <div className='flex flex-1 justify-center items-center overflow-hidden min-w-0'>
                      <h1 className='font-semibold'>Direct</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='flex justify-center items-center'>
                          <div>
                            <svg aria-label="New Message" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
                          </div>
                        </button>
                    </div>
                  </div>
                </div>

                {/* Inbox's categories */}
                <div className='flex flex-row w-full border-b-[1px] bg-white'>
                  <div className='flex items-stretch justify-items-start'>
                    <div className='flex items-stretch justify-items-start'>
                      <nav className='flex flex-row'>
                        <p onClick={() => toggleInbox(1)} className={inboxState === 1 ? 'flex flex-1 cursor-pointer justify-center py-3 px-5 font-semibold text-black transition-all duration-[250ms] ease-out border-b-[1px] border-b-black opacity-100 z-[2]' : 'flex flex-1 cursor-pointer text-gray-400 justify-center py-3 px-5 font-semibold transition-all duration-[250ms] ease-out'}>PRIMARY</p>
                        <p onClick={() => toggleInbox(2)} className={inboxState === 2 ? 'flex flex-1 cursor-pointer justify-center py-3 px-5 font-semibold transition-all duration-[250ms] ease-out border-b-[1px] border-b-black opacity-100 z-[2]' : 'flex flex-1 cursor-pointer justify-center py-3 px-5 font-semibold transition-all duration-[250ms] ease-out text-gray-400'}>GENERAL</p>
                      </nav>
                      <div className='flex items-stretch justify-items-start w-5/12'>
                        <div className='flex justify-center items-center ml-7 pr-4'>
                          <p className='text-blue-500 text-sm font-semibold'>Requests (2)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Primary Chats */}
                <div className='h-[45rem] w-full'>
                  <div className='flex space-y-2 h-full overflow-auto pt-1 bg-white'>
                    <div className={inboxState === 1 ? 'block w-full' : 'hidden'}>
                      <Allmessages />
                    </div>
                  </div>
                </div>
                    
            </div>

            {/* 2nd section without message */}
            <div className='z-0'>
              <div className='hidden bg-white border-t-[1px] border-b-[1px] border-r-[1px] w-full px-36 py-10 h-full'>
                {/* Spacer */}
                <div className='h-[19.45rem]'></div>

                <div className='flex flex-col justify-center items-center w-full'>
                  <div className='flex justify-center items-center'>
                    <h1 className='text-2xl font-light'>Your Messages</h1>
                  </div>
                  <div className='flex justify-center items-center mt-2'>
                    <p className='text-gray-400 text-sm'>Send a private photos and messages to a friend or group.</p>
                  </div>
                  <div className='flex justify-center my-5 bg-blue-500 rounded-sm'>
                    <button className='p-1 text-sm text-white font-medium'>Send Message</button>
                  </div>
                </div>

                {/* Spacer */}
                <div className='h-[19.45rem]'></div>
              </div>
            </div>

            {/* 2nd section with message */}
            <div className='z-0'>
              <div className='bg-white border-t-[1px] border-b-[1px] border-r-[1px] w-[40rem] h-[52rem]'>
                <div className='flex justify-between sticky z-50 top-0 px-8 py-[9.7px] border-b-[1px]'>
                  <div className='flex justify-center items-center'>
                    <div>
                      <img className='rounded-full w-7 h-7' src="https://qph.fs.quoracdn.net/main-qimg-f521020f4e9761f812d1dd8e1de32ebb-c" alt="pfp" />
                    </div>
                    <div className='ml-2'>
                      <h3 className='font-semibold'>BarkingDOG</h3>
                      <p className='text-xs text-gray-400'>Active now</p>
                    </div>
                  </div>
                  <div className='flex justify-center items-center'>
                    <svg aria-label="View Thread Details" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                  </div>
                </div>

                {/* Chat messages */}
                <div className='h-[43rem] overflow-auto px-4'>
                  <div className='flex justify-center py-3'>
                    <p className='text-xs text-gray-400'>February 10, 2022 2:13 am</p>
                  </div>

                  <div className='flex justify-start items-center mb-2'>
                    <div className='mr-3'>
                      <img onClick={() => router.push('/profile2')} className='rounded-full cursor-pointer w-6 h-6' src="https://qph.fs.quoracdn.net/main-qimg-f521020f4e9761f812d1dd8e1de32ebb-c" alt="pfp" />
                    </div>

                    <div className='rounded-2xl border px-3 py-2'>
                      <h1 className='text-sm'>Hello</h1>
                    </div>
                  </div>
                  
                  {/* You can onDoubleClikc() to add heart icon */}
                  <div className='flex justify-end items-center mb-2'>
                    <div className='max-w-[45%] bg-gray-100 rounded-2xl border px-3 py-2'>
                      <h1 className='text-sm'>I want to eat pizza I want to eat pizza I want to eat pizza I want to eat pizza I want to eat pizzaI want to eat pizzaI want to eat pizzaI want to eat pizzaI want to eat pizzaI want to eat pizzaI want to eat pizzaI want to eat pizzaI want to eat pizza</h1>
                    </div>
                    <div className='ml-3'>
                      <img onClick={() => router.push('/profile')} className='rounded-full cursor-pointer w-6 h-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5oc9cfL5pAMnxKY3Jv6Td9FEAm4BgxQU2Q&usqp=CAU' alt="pfp" />
                    </div>
                  </div>

                  <div className='flex justify-start items-center mb-2'>
                    <div className='mr-3'>
                      <img onClick={() => router.push('/profile2')} className='rounded-full cursor-pointer w-6 h-6' src="https://qph.fs.quoracdn.net/main-qimg-f521020f4e9761f812d1dd8e1de32ebb-c" alt="pfp" />
                    </div>

                    <div className='message'>
                      <div className='rounded-2xl border px-3 py-2'>
                        <h1 className='text-sm'>Hello</h1>
                      </div>
                    </div>
                  </div>

                </div>
                
                {/* Text Input */}
                <div className='flex justify-center items-center'>
                  <div className='w-[94%]'>
                    <div className='w-full sticky'>
                        <div className='relative mt-1 p-3 rounded-lg'>
                            <div className='absolute inset-y-0 pl-3 flex items-center cursor-pointer'>
                                <div className='flex justify-center items-center h-5 w-5'>
                                  <svg aria-label="Emoji" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                                </div>
                            </div>
                            {/* Add this to textarea for functionality - onChange={(e) => setInput(e.target.value)} */}
                            <textarea data-rows='1' value={input} className='bg-white resize-none block w-full pl-10 pr-16 py-[10px] overflow-auto sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-lg' placeholder='Message...' />
                            <div className='absolute inset-y-0 right-8 pl-3 flex items-center cursor-pointer'>
                              <button type='submit' className='font-semibold text-sm text-blue-400 hover:text-blue-500 active:text-blue-600'>Send</button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Modal />
      </div>
  );
}

export default messages;  
