import { Transition, Popover } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/outline'

const SearchMenu = () => {
    return (
        <Popover>
            <Popover.Button>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                    <SearchIcon className='h-5 w-5 text-gray-500' />
                </div>
                <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' type='text' placeholder='Search' />
            </Popover.Button>
            <Transition>
                <Popover.Panel className='absolute z-10'>
                    <div>
                        Recent
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default SearchMenu; 