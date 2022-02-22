import React from 'react'
import Post from '../../../../interfaces/Post'
import Link from 'next/link'

interface IProps {
  post: Post
}

const PostHeader = (props: IProps) => {
  const { post } = props
  return (
    <>
      <div className=" relative mb-6 overflow-hidden pb-8 shadow-md">
        <img
          src={post?.featuredImage.url}
          alt={post.title}
          className="relative h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 block cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
    </>
  )
}

export default PostHeader
