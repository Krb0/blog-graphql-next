import { getPosts } from '../../services'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import PostDetails from '../../components/Post'
import Categories from '../../components/Aside/Categories'
import PostWidget from '../../components/Aside/PostWidget'

const Post: NextPage = () => {
  const Router = useRouter()
  const { slug } = Router.query

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetails />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget slug={slug} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
