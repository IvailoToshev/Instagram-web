import { useSession } from 'next-auth/react'

function EditProfile() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col justify-center w-[50rem]">
        {/* Profile Info + Profile Change - Not sure if I'm going to use it */}
        <div className="flex">
            <div className="flex flex-shrink-0 flex-grow-0 justify-end px-8 w-48">
                <img src={session?.user?.image} className='rounded-full h-10 w-10' alt="profile pic" />
            </div>
            <div>
                <h4 className="text-xl">{session?.user?.username}</h4>
                <p className="text-sm text-blue-500 font-semibold cursor-pointer">Change Profile Photo</p>
            </div>
        </div>

        {/* Name */}
        <div className='flex mt-5'>
          <div className='flex flex-shrink-0 flex-grow-0 justify-end px-8 mt-[6px] w-48'>
              <h2 className='font-semibold'>Name</h2>
          </div>
          <div>
              <input className='mb-1 border bg-gray-50 block w-86 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Name'></input>
          </div>
        </div>

        {/* Username */}
        <div className='flex mt-5'>
          <div className='flex flex-shrink-0 flex-grow-0 justify-end px-8 mt-[6px] w-48'>
              <h2 className='font-semibold'>Username</h2>
          </div>
          <div>
              <input className='mb-1 border bg-gray-50 block w-86 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Username'></input>
          </div>
        </div>

        {/* Website - Not gonna use it */}
        <div className='flex mt-5'>
          <div className='flex flex-shrink-0 flex-grow-0 justify-end px-8 mt-[6px] w-48'>
              <h2 className='font-semibold'>Website</h2>
          </div>
          <div>
              <input className='mb-1 border bg-gray-50 block w-86 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='*Coming Soon!*'></input>
          </div>
        </div>

        {/* Bio */}
        <div className='flex mt-5'>
          <div className='flex flex-shrink-0 flex-grow-0 justify-end px-8 mt-[6px] w-48'>
              <h2 className='font-semibold'>Bio</h2>
          </div>
          <div>
              <textarea className='mb-1 border bg-gray-50 block w-86 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'></textarea>
          </div>
        </div>

        {/* Email */}
        <div className='flex mt-5'>
          <div className='flex flex-shrink-0 flex-grow-0 justify-end px-8 mt-[6px] w-48'>
              <h2 className='font-semibold'>Email</h2>
          </div>
          <div>
              <input className='mb-1 border bg-gray-50 block w-86 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='email' placeholder='Email'></input>
          </div>
        </div>

        {/* Phone Number */}
        <div className='flex mt-5'>
          <div className='flex flex-shrink-0 flex-grow-0 justify-end px-8 mt-[6px] w-48'>
              <h2 className='font-semibold'>Phone Number</h2>
          </div>
          <div>
              <input className='mb-1 border bg-gray-50 block w-86 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Phone Number'></input>
          </div>
        </div>

        {/* Gender - Not sure if I'm going to use it */}
        <div className='flex mt-5'>
          <div className='flex flex-shrink-0 flex-grow-0 justify-end px-8 mt-[6px] w-48'>
              <h2 className='font-semibold'>Gender</h2>
          </div>
          <div>
              <select className='mb-1 border bg-gray-50 block text-sm border-gray-300 focus:ring-black focus:border-black rounded-md w-86' name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="custom">Custom</option>
                <option value="pnts">Prefer Not To Say</option>
              </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex mt-8'>
          <div className='flex flex-shrink-0 flex-grow-0 justify-end px-8 mt-[6px] w-48'></div>
          <div>
              <button className='bg-blue-400 text-white text-sm font-semibold px-2 py-1 rounded-md' type='submit'>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default EditProfile