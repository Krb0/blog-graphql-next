import React from 'react'
import Post from '../../../interfaces/Post'

interface IProps {
  post: Post
}

const PostDetail = (props: IProps) => {
  const { post } = props
  return <div className="text-white">{post.title}</div>
}

export default PostDetail
