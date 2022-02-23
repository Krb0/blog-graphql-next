import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from 'next'
import PostDetails from '../../components/Post'
import Categories from '../../components/Aside/Categories'
import PostWidget from '../../components/Aside/PostWidget'
import Post from '../../interfaces/Post'

interface IProps {
  postRes: Post
}

const Post: NextPage | {} = (props: IProps) => {
  const { postRes } = props

  const [singlePost, setSinglePost] = useState(postRes)
  useEffect(() => {
    setSinglePost(postRes)
  }, [postRes])

  const Router = useRouter()
  const { slug } = Router.query

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetails post={singlePost} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget
              slug={slug}
              categories={singlePost?.categories?.map(
                (category) => category.slug
              )}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
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
    await fetch(baseUrl + '/api/posts/' + params?.slug)
  ).json()

  const postRes: Post = result || []
  return {
    props: {
      postRes,
    },
  }
}
