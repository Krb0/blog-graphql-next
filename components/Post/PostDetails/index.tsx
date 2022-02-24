import React from 'react'
import PostContent from './PostContent'
import Post from '../../../interfaces/Post'
import PostHeader from './PostHeader'
interface IProps {
  post: Post
}

const PostDetail = (props: IProps) => {
  const { post } = props
  return (
    <div className="rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <PostHeader post={post} />
      <PostContent post={post} />
    </div>
  )
}

export default PostDetail
