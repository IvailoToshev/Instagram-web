function Highlights({ img, heading }) {
    return (
        <div>
            <img className='highlight' src={img} alt='highlight pic' />
            <div className="flex justify-center items-center">
                <p className='text-sm font-semibold pt-2 mr-6 w-auto truncate text-center lg:mr-10 lg:w-16'>{heading}</p>
            </div>
        </div>
    )
}

export default Highlights