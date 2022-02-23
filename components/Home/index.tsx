import { Posts } from '../../interfaces/Post'
import Aside from '../Aside'
import PostsList from './PostsList'

interface IProps {
  posts: Posts
}

const Home = (props: IProps) => {
  const { posts } = props
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <PostsList posts={posts} />
      <Aside />
    </div>
  )
}

export default Home
