import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from './Story';

function Stories() {
    const [suggestions, setSuggestions] = useState([])

    const randomName = faker.name.findName();
    const randomAvatar = faker.internet.avatar();
    const randomEmail = faker.internet.email();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            randomName,randomAvatar,randomEmail,
            id: i,
        }));

        setSuggestions(suggestions);
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {/* className='border-gray-400 lg:hidden md:hidden space-x-4' */}
            <Story img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5oc9cfL5pAMnxKY3Jv6Td9FEAm4BgxQU2Q&usqp=CAU' username='ivailotoshev' />

            {suggestions.map(profile => (
                <Story key={profile.id} img={profile.randomAvatar} username={profile.randomName} />
            ))}
        </div>
    )
}

export default Stories