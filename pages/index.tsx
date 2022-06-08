import Link from 'next/link'
import Header from '../components/Header'
import Head from 'next/head'
import Feed from '../components/Feed'
import Modal from '../components/Modals/Modal'
import PostModal from '../components/Modals/PostModal'

const IndexPage = () => {
  return (
    <div className="bg-gray-50 h-full overflox-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
      </Head>

      <PostModal />
      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

export default IndexPage
