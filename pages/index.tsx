import Head from 'next/head'
import Categories from '../components/Categories'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostCard/PostWidget'
import { Post } from '../interfaces/Posts'
import { getPosts } from '../services'

interface IProps {
  posts: Post[]
}
export default function Home({ posts }: IProps) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 ">
          {posts.map((post: Post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
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
