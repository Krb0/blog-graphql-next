import React from 'react'
import CalendarIcon from '@heroicons/react/outline/CalendarIcon'
import moment from 'moment'
import Post from '../../../../../interfaces/Post'

interface IProps {
  post: Post
  isPostDetails?: boolean
}

const PostAuthor = (props: IProps) => {
  const { post, isPostDetails } = props
  return (
    <div className={isPostDetails ? 'author--postdetail' : 'author'}>
      <a target="_blank" href={post.author.slug}>
        <div className="hover:opacity-75 ">
          <img
            alt={post.author.name}
            height="25px"
            width="25px"
            className="rounded-full align-middle"
            src={post.author.photo.url}
          />
          <p className="ml-2 inline align-middle text-lg font-medium ">
            {post.author.name}
          </p>
        </div>
      </a>
      <div className="font-medium text-gray-700">
        <CalendarIcon className="mr-2 inline w-6 text-[#C33EC5]" />
        <span className="align-middle">
          {moment(post.createdAt).format('MMM D, YYYY')}
        </span>
      </div>
    </div>
  )
}

export default PostAuthor
