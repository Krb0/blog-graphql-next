import React from 'react'
import Post from '../../interfaces/Post'
import Author from './Author'
import Comments from './Comments'
import PostDetails from './PostDetails'
interface IProps {
  post: Post
}

const PostContent = (props: IProps) => {
  const { post } = props
  return (
    <>
      <PostDetails post={post} />
      <Author author={post.author} />
      <Comments slug={post.slug} />
    </>
  )
}

export default PostContent
