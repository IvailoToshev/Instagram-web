import Post from "./Post"

function Posts() {

    const posts = [
        {
            id: '123',
            username: 'ivcho.makarona',
            userImg: 'https://media-exp1.licdn.com/dms/image/C4E03AQFtSjqwZkjLWA/profile-displayphoto-shrink_100_100/0/1619100376741?e=1639612800&v=beta&t=wqpOlqUVBLPbHjd70d1HLRRxkZQWGzP_fq5sVqovl6g',
            img: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
            caption: 'Hello guys, my name is Ivailo more known as a Makaroncho!',
        },
        {
            id: '124',
            username: 'ivcho.makarona',
            userImg: 'https://media-exp1.licdn.com/dms/image/C4E03AQFtSjqwZkjLWA/profile-displayphoto-shrink_100_100/0/1619100376741?e=1639612800&v=beta&t=wqpOlqUVBLPbHjd70d1HLRRxkZQWGzP_fq5sVqovl6g',
            img: 'https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            caption: 'Hello guys, my name is Ivailo more known as a Makaroncho!',
        },
    ]

    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id} 
                    id={post.id} 
                    username={post.username} 
                    userImg={post.userImg} 
                    img={post.img} 
                    caption={post.caption} 
                />
            ))}
            
        </div>
    )
}

export default Posts
