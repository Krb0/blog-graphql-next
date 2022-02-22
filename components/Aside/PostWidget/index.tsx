import React, { useEffect } from 'react'
import PostsList from './PostsList'

interface IProps {
  categories?: string[]
  slug?: string
}

const PostWidget = (props: IProps) => {
  const { categories, slug } = props

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}{' '}
      </h3>
      {categories && slug ? (
        <PostsList categories={categories} slug={slug} />
      ) : (
        <PostsList />
      )}
    </div>
  )
}

export default PostWidget
