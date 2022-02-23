import React from 'react'
import CalendarIcon from '@heroicons/react/outline/CalendarIcon'
import moment from 'moment'
import Post from '../../../../../interfaces/Post'

interface IProps {
  post: Post
}

const PostAuthor = (props: IProps) => {
  const { post } = props
  return (
    <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
      <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
        <img
          alt={post.author.name}
          height="25px"
          width="25px"
          className="rounded-full align-middle"
          src={post.author.photo.url}
        />
        <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
          {post.author.name}
        </p>
      </div>
      <div className="font-medium text-gray-700">
        <CalendarIcon className="mr-2 inline w-6 text-pink-600" />
        <span className="align-middle">
          {moment(post.createdAt).format('MMM D, YYYY')}
        </span>
      </div>
    </div>
  )
}

export default PostAuthor
