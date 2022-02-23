import React from 'react'
import Post from '../../../interfaces/Post'

interface IProps {
  post: Post
}

const PostDetail = (props: IProps) => {
  const { post } = props
  return <div>PostDetail</div>
}

export default PostDetail
