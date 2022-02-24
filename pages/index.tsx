import Head from 'next/head'
import HomeSection from '../components/Home'
import { Posts } from '../interfaces/Post'
import { getPosts } from '../services'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Layout from '../Layout'
interface IProps {
  posts: Posts
}
const Home: NextPage<IProps> = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Home | GraphBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomeSection posts={posts} />
      </Layout>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  type Posts = [] | undefined
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const res = await (await fetch(baseUrl + '/api/posts')).json()
  const posts: Posts = res || []
  return {
    props: {
      posts,
    },
  }
}

export default Home
