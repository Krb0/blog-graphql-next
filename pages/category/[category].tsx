import Head from 'next/head'
import HomeSection from '../../components/Home'
import Post, { Posts } from '../../interfaces/Post'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import { Categories as ICategories } from '../../interfaces/Category'
import FeaturedPosts from '../../components/Home/FeaturedPosts'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
interface IProps {
  posts: Posts
  categories: ICategories
  relatedPosts: Posts
}
const Home: NextPage<IProps> = ({ posts, categories, relatedPosts }) => {
  const Router = useRouter()
  const { category } = Router.query
  const [filteredPosts, setFilteredPosts] = useState<Posts>(posts)
  useEffect(() => {
    if (category) {
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.categories &&
            post.categories
              .map((categoryItem) => categoryItem.slug)
              .includes(`${category}`)
        )
      )
    }
  }, [posts])
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Home | GraphBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout categories={categories}>
        <>
          <FeaturedPosts posts={posts} />
          <HomeSection
            posts={filteredPosts}
            categories={categories}
            relatedPosts={relatedPosts}
          />
        </>
      </Layout>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  type Posts = [] | undefined
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const res = await (
    await fetch(baseUrl + '/api/posts', {
      method: 'POST',
      headers: { blogtoken: process.env.SECRET! },
    })
  ).json()
  const categories = await (
    await fetch(baseUrl + '/api/categories', {
      method: 'POST',
      headers: { blogtoken: process.env.SECRET! },
    })
  ).json()

  const relatedPosts = await (
    await fetch(baseUrl + '/api/recentpost', {
      method: 'POST',
      headers: { blogtoken: process.env.SECRET! },
    })
  ).json()

  const posts: Posts = res || []
  return {
    props: {
      posts,
      categories,
      relatedPosts,
    },
  }
}

export default Home
