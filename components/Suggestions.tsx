import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker'

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);

    // Fake Data for User
    const randomName = faker.name.findName();
    const randomEmail = faker.internet.email();
    const randomAvatar = faker.internet.avatar();

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
            {
                // ...faker.helpers.uniqueArray([faker.name.findName(), faker.internet.email()], faker.internet.avatar()),
                randomAvatar, randomName, randomEmail,
                id: i
            }
        ))

        setSuggestions(suggestions)
    }, [])

    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold'>See All</button>
            </div>

            {
                suggestions.map(profile => (
                    <div key={profile.id} className='flex items-center justify-between mt-3' data-img={profile.randomAvatar} data-username={profile.randomName}>
                        <img 
                            className='w-10 h-10 rounded-full border p-[2px]' src={profile.randomAvatar} 
                            alt='' 
                        />

                        <div className='flex-1 ml-4'>
                            <h2 className='font-semibold text-sm'>{profile.randomName}</h2>
                            <h3 className='text-xs text-gray-400'>Suggested for you</h3>
                        </div>

                        <button className='font-semibold text-blue-400 text-xs'>Follow</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions