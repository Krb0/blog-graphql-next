import Link from 'next/link'
import React from 'react'
import Post from '../../../../interfaces/Post'
import Image from 'next/image'
import PostHeader from './PostHeader'
import PostAuthor from './PostAuthor'
type IProps = {
  post: Post
}
const PostCard = (props: IProps) => {
  const { post } = props
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <PostHeader post={post} />
      <PostAuthor post={post} />
      <p className="mb-8 px-4 text-center text-lg font-normal text-gray-700 lg:px-20">
        {post.excerpt}
      </p>

      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="inline-block transform cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
