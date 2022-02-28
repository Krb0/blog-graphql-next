import React from 'react'
import Comment from '../../../../../interfaces/Comment'
import moment from 'moment'
import parse from 'html-react-parser'
import Image from 'next/image'
import { graphCMSImageLoader } from '../../../../Aside/PostWidget/PostsList/util'

const CommentItem = ({ comment }: { comment: Comment }) => {
  const { id, name, createdAt, image, comment: content } = comment
  return (
    <div key={id} className="mb-4 border-b border-gray-100 pb-4">
      <div className="mb-4 flex items-center gap-2">
        <div className="relative h-8 w-8 rounded-full">
          <Image
            loader={graphCMSImageLoader}
            className="rounded-full"
            src={image}
            layout="fill"
            alt={'comment'}
            unoptimized={true}
          />
        </div>
        <span className="font-semibold">{name}</span> on{' '}
        {moment(createdAt).format('MMM DD, YYYY')}
      </div>
      <p className="w-full whitespace-pre-line break-words text-gray-600 sm:px-4 ">
        {content}
      </p>
    </div>
  )
}

export default CommentItem
