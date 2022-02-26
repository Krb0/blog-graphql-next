import Image from 'next/image'
import React from 'react'
import Post from '../../../../../interfaces/Post'
import { graphCMSImageLoader } from '../../../../Aside/PostWidget/PostsList/util'

interface IProps {
  post: Post
}

const PostImage = ({ post }: IProps) => {
  return (
    <div className="h-200 mb-6 w-full overflow-hidden rounded-t-lg shadow-md">
      <Image
        src={post.featuredImage.url}
        loader={graphCMSImageLoader}
        alt={post.title}
        className="rounded-t-lg object-top"
        width={360}
        height={240}
        layout="responsive"
        priority={true}
      />
    </div>
  )
}

export default PostImage
