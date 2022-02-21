import React from 'react'
import { Post } from '../../interfaces/Posts'

type IProps = {
  post: Post
}
const PostCard = (props: IProps) => {
  const { post } = props
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className=" relative mb-6 overflow-hidden pb-80 shadow-md"></div>
    </div>
  )
}

export default PostCard
