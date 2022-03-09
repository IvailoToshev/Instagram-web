import { useSession } from 'next-auth/react';
import { 
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  PaperAirplaneIcon,
  EmojiHappyIcon
} from '@heroicons/react/outline'
import Header from '../components/Header'

const postPage = () => {
  const { data: session } = useSession();

  return (
    <div className='bg-gray-50 h-screen'>
      <Header />

      <div className='flex justify-center items-center mt-10'>
        <div className='block sm:flex'>
          {/* The Post's Image */}
          <div className='flex justify-center items-center border'>
            <img className='object-cover h-[40rem] w-[37rem]' src="https://dthezntil550i.cloudfront.net/1f/latest/1f1812170212508330007997070/494e2362-6d3c-40b3-8bf5-192fcea38a2f.png" alt="" />
          </div>

          {/* SideBar */}
          <div className='bg-white w-full border-r-[1px] border-t-[1px] border-b-[1px] sm:w-99'>
            {/* Account Info */}
            <div className='flex justify-between items-center border-b-[1px] px-5 py-4'>
              <div className='flex items-center'>
                <img className='rounded-full h-9 w-9 mr-3' src={session?.user?.image} alt="prof pic" />
                <div>
                  <h4 className='text-sm font-semibold'>{session?.user?.username}</h4>
                  <p className='text-sm text-gray-300'></p>
                </div>
              </div>
              <div>
                <DotsHorizontalIcon className='h-5 cursor-pointer' />
              </div>
            </div>

            {/* Comments */}
            <div className='h-[29rem] overflow-auto'>
              <div className='flex items-center p-5'>
                <div>
                  <img className='rounded-full h-9 w-9 mr-3' src={session?.user?.image} alt="prof pic" />
                </div>
                <div>
                  <p className='text-sm truncate'>
                    <span className='font-bold mr-1'>{session?.user?.username} </span> 
                    My awesome paint!
                  </p>
                </div>
              </div>
            </div>


            {/* Buttons */}
            <div className='flex justify-between border-t-[1px] px-4 py-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn' />
                </div>

                <BookmarkIcon className='btn' />
            </div>

            {/* Input */}
            <form className='flex items-center border-t-[1px] px-4 pt-1'>
                <EmojiHappyIcon className='h-7' />
                <input type='text' className='border-none text-sm flex-1 focus:ring-0 outline-none' placeholder='Add a comment...' />
                <button className='font-semibold text-blue-400'>Post</button>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex justify-center items-center'>
          <div className=''>
            {/* Line  */}
            <div className='flex justify-center items-center mt-10'>
              <div className='border-t-[1px] border-gray-300 mt-3 w-[62.1rem]'></div>
            </div>
          
            {/* More posts section */}
            <div className='mt-10'>
              <h1 className='text-sm text-gray-500 font-semibold'>More posts from <span className='text-black'>{session?.user?.username}</span></h1>
            </div>

            {/* The posts */}
            <div className='flex justify-center items-center mt-5 mb-8'>
              <div className='grid grid-cols-3 gap-1 w-[62.1rem] lg:gap-5'>
                  <div className='hover:'>
                      <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/One-Piece-Most-Memorable-Characters.jpg" alt="post pic" /> 
                  </div>
                  <div>
                      <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://data.whicdn.com/images/351268117/original.jpg" alt="post pic" /> 
                  </div>
                  <div>
                      <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://cdn.realsport101.com/images/ncavvykf/epicstream/7b2b09c20531dab5c6ce455345ec3d6d50f8f813-760x400.jpg?rect=25,0,711,400&w=686&h=386&auto=format" alt="post pic" /> 
                  </div>
                  <div className=''>
                      <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://cdn.realsport101.com/images/ncavvykf/epicstream/7b2b09c20531dab5c6ce455345ec3d6d50f8f813-760x400.jpg?rect=25,0,711,400&w=686&h=386&auto=format" alt="post pic" /> 
                  </div>
                  <div className=''>
                      <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/One-Piece-Most-Memorable-Characters.jpg" alt="post pic" /> 
                  </div>
                  <div className=''>
                      <img className='cursor-pointer object-cover h-36 lg:h-72 w-76' src="https://data.whicdn.com/images/351268117/original.jpg" alt="post pic" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default postPage;
