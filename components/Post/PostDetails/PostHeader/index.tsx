import Post from '../../../../interfaces/Post'
import Author from '../../../Home/PostsList/PostCard/PostAuthor'
import PostImage from './PostImage'

interface IProps {
  post: Post
}

const PostHeader = ({ post }: IProps) => {
  return (
    <>
      <PostImage post={post} />
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <Author post={post} isPostDetails={true} />
        </div>
        <h1 className="mb-8 break-words text-3xl font-semibold">
          {post.title}
        </h1>
      </div>
    </>
  )
}

export default PostHeader
