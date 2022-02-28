import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Posts } from '../../../interfaces/Post'
import PostsList from './PostsList'

interface IProps {
  relatedPosts: Posts
}

const PostWidget = (props: IProps) => {
  const { relatedPosts } = props
  const slug = useRouter().query.slug
  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}{' '}
      </h3>

      <PostsList relatedPosts={relatedPosts} />
    </div>
  )
}

export default PostWidget
