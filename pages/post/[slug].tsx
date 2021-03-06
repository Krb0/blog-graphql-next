import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from 'next'
import PostDetails from '../../components/Post'
import Post, { Posts } from '../../interfaces/Post'
import Layout from '../../components/Layout'
import Head from 'next/head'
import { Categories as ICategories } from '../../interfaces/Category'
import Aside from '../../components/Aside'

interface IProps {
  postRes: Post
  categories: ICategories
  relatedPosts: Posts
}

const Post: NextPage | {} = (props: IProps) => {
  const { postRes, relatedPosts, categories } = props
  const [singlePost, setSinglePost] = useState(postRes)
  useEffect(() => {
    setSinglePost(postRes)
  }, [postRes])

  return (
    <Layout categories={categories}>
      <>
        <Head>
          <title>{singlePost.title} | GraphBlog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="mx-auto px-2 sm:container sm:mb-8 sm:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-8">
              <PostDetails post={singlePost} />
            </div>
            <Aside relatedPosts={relatedPosts} categories={categories} />
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Post
export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const result = await (
    await fetch(baseUrl + '/api/posts/' + params?.slug, {
      headers: { blogtoken: process.env.SECRET! },
    })
  ).json()
  const categories = await (
    await fetch(baseUrl + '/api/categories', {
      headers: { blogtoken: process.env.SECRET! },
    })
  ).json()
  const postRes: Post = result || []
  const relatedPostsReq = await fetch(baseUrl + '/api/similarpost', {
    method: 'POST',
    headers: { blogtoken: process.env.SECRET! },
    body: JSON.stringify({
      categories: postRes!.categories!.map((category) => category.slug),
      slug: params?.slug,
    }),
  })
  const relatedPosts = (await relatedPostsReq.json()).posts
  return {
    props: {
      postRes,
      categories,
      relatedPosts,
    },
  }
}
