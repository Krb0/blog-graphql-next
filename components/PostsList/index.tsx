import Post, { Posts } from '../../interfaces/Post'
import PostCard from './PostCard'

interface IProps {
  posts: Posts
}

const PostsList = (props: IProps) => {
  const { posts } = props
  return (
    <div className="col-span-1 lg:col-span-8 ">
      {posts.map((post: Post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  )
}

export default PostsList
