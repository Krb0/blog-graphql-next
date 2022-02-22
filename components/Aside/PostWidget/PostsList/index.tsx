import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import useRelatedPosts from '../../../../hooks/useRelatedPosts'
import { Posts } from '../../../../interfaces/Post'
interface IProps {
  categories?: string[]
  slug?: string
}

const PostsList = (props: IProps) => {
  const { categories, slug } = props
  const [relatedPosts] = useRelatedPosts(categories, slug)
  return (
    <>
      {relatedPosts.map((post) => (
        <div className="mb-4 flex w-full items-center" key={post.title}>
          <div className="w-16 flex-none rounded-full">
            <img
              alt={post.title}
              width="60px"
              className="rounded-full object-cover align-middle"
              src={post.featuredImage.url}
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="font-xs text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}{' '}
            </p>
            <Link href={`/posts/${post.slug}`} key={post.title}>
              <span className="cursor-pointer">{post.title}</span>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostsList
