import React, { useEffect, useState } from 'react'
import Comment, { Comments as IComments } from '../../../../interfaces/Comment'
import CommentItem from './CommentItem'
interface IProps {
  slug: string
  comments: IComments
  setComments: React.Dispatch<React.SetStateAction<[] | IComments>>
}

const CommentsList = ({ slug, comments, setComments }: IProps) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {comments.length} Comments
      </h3>

      {comments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </div>
  )
}

export default CommentsList
