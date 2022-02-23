import Head from 'next/head'
import HomeSection from '../components/Home'
import { Posts } from '../interfaces/Post'
import { getPosts } from '../services'
import { NextPage } from 'next'

interface IProps {
  posts: Posts
}
const Home: NextPage<IProps> = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection posts={posts} />
    </div>
  )
}
export async function getStaticProps() {
  type Posts = [] | undefined
  const posts: Posts = (await getPosts()) || []
  return {
    props: {
      posts,
    },
  }
}

export default Home
