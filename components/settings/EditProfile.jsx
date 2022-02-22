import { useSession } from 'next-auth/react'

function EditProfile() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col justify-center w-[50rem]">
        <div className="flex ">
            <div className="mr-6">
                <img src={session?.user?.image} className='rounded-full h-10 w-10' alt="profile pic" />
            </div>
            <div>
                <h4 className="text-xl">{session?.user?.username}</h4>
                <p className="text-sm text-blue-500 font-semibold cursor-pointer">Change Profile Photo</p>
            </div>
        </div>
    </div>
  )
}

export default EditProfile