function Message() {
    return (
        <div className='w-full bg-white py-2 px-4 hover:bg-gray-50'>
            <div className="">
                <a className="flex items-center" href="">
                    <div className='mr-3'>
                    <a className='relative' href="">
                        <div>
                            <img className='w-14 h-14 rounded-full' src="https://qph.fs.quoracdn.net/main-qimg-f521020f4e9761f812d1dd8e1de32ebb-c" alt="pfp" />
                        </div>
                        <div className='absolute -top-1 w-5 h-5 bg-green-400 rounded-full flex items-center border-[2px] border-white'></div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h6 className="text-sm">BarkingDOG</h6>
                        <p className="text-sm text-gray-400">Active now</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Message
