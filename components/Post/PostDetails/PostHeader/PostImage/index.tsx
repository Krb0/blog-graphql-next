import React from 'react'
import Post from '../../../../../interfaces/Post'

interface IProps {
  post: Post
}

const PostImage = ({ post }: IProps) => {
  return (
    <div className="relative mb-6 overflow-hidden shadow-md">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="h-full w-full rounded-t-lg object-top"
      />
    </div>
  )
}

export default PostImage
