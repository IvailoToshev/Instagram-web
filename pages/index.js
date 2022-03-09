import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'
import PostModal from '../components/PostModal'


export default function Home() {
  return (
    <div className="bg-gray-50 h-full overflox-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostModal />
      <Header />
      <Feed />
      <Modal />
    </div>
  )
}
