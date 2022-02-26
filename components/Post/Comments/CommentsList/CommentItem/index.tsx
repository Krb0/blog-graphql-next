import React from 'react'
import Comment from '../../../../../interfaces/Comment'
import moment from 'moment'
import parse from 'html-react-parser'
import Image from 'next/image'

const CommentItem = ({ comment }: { comment: Comment }) => {
  const { id, name, email, createdAt, comment: content } = comment
  return (
    <div key={id} className="mb-4 border-b border-gray-100 pb-4">
      <div className="mb-4 flex items-center gap-2">
        <div className="relative h-8 w-8 rounded-full">
          <Image
            className="rounded-full"
            src={'https://via.placeholder.com/300.png/09f/red?text=uwu'}
            layout="fill"
            alt={'comment'}
          />
        </div>
        <span className="font-semibold">{name}</span> on{' '}
        {moment(createdAt).format('MMM DD, YYYY')}
      </div>
      <p className="w-full whitespace-pre-line break-words text-gray-600 sm:px-4 ">
        {
          'Adipisicing pariatur minim et excepteur aute aute do. Ut ex consectetur commodo non exercitation. Ut eu irure deserunt adipisicing sit minim tempor exercitation reprehenderit commodo id sunt fugiat. Occaecat quis consequat non ad ad culpa sint enim Lorem sit culpa. Quis eiusmod eiusmod sit sit est. Nulla eiusmod veniam non enim velit aliquip est mollit reprehenderit ex. Exercitation consectetur nulla incididunt incididunt et nisi magna dolor laborum qui.'
        }
      </p>
    </div>
  )
}

export default CommentItem
