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
            <Story img='https://scontent-sof1-2.xx.fbcdn.net/v/t1.18169-9/26992357_1743080209077496_7661103156531689506_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JVNGZkfigtwAX__5Fgw&_nc_ht=scontent-sof1-2.xx&oh=00_AT9sGlBRmwsfgs70VwD2vN4qy8OTW4nuGyNaCgFkbfA3NA&oe=62DFFA82' username='ivailotoshev' />

            {suggestions.map(profile => (
                <Story key={profile.id} img={profile.randomAvatar} username={profile.randomName} />
            ))}
        </div>
    )
}

export default Stories