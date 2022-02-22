import Head from 'next/head'
import Aside from '../components/Aside'
import PostsList from '../components/PostsList'
import { Posts } from '../interfaces/Post'
import { getPosts } from '../services'

interface IProps {
  posts: Posts
}
export default function Home({ posts }: IProps) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <PostsList posts={posts} />
        <Aside />
      </div>
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
