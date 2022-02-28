import { Categories as ICategories } from '../../interfaces/Category'
import { Posts } from '../../interfaces/Post'
import Aside from '../Aside'
import PostsList from './PostsList'

interface IProps {
  posts: Posts
  categories: ICategories
  relatedPosts: Posts
}

const Home = (props: IProps) => {
  const { posts, categories, relatedPosts } = props
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <PostsList posts={posts} />
      <Aside categories={categories} relatedPosts={relatedPosts} />
    </div>
  )
}

export default Home
