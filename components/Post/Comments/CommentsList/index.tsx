import React, { useEffect, useState } from 'react'
import Comment, { Comments } from '../../../../interfaces/Comment'
import moment from 'moment'
import parse from 'html-react-parser'
interface IProps {
  slug: string
}

const CommentsList = ({ slug }: IProps) => {
  const [comments, setComments] = useState<Comments | []>([])

  useEffect(() => {
    fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ slug: slug }),
    })
  }, [])
  return (
    <div>
      {comments.map(({ comment }) => {
        ;<h1>{comment}</h1>
      })}
    </div>
  )
}

export default CommentsList
